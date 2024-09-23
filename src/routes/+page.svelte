<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  import { onMount } from "svelte";
  import Header from "../lib/components/Sections/Header.svelte";
  import Footer from "../lib/components/Sections/Footer.svelte";
  import Hero from "../lib/components/Sections/Hero.svelte";
  import About from "../lib/components/Sections/About.svelte";
  import Block from "../lib/components/Sections/Block.svelte";
  import Text from "../lib/components/Sections/Text.svelte";
  import Roles from "../lib/components/Sections/Roles/Roles.svelte";
  import ContactUs from "../lib/components/Sections/ContactUs.svelte";
  import Team from "../lib/components/Sections/Team.svelte";

  const blocks = [
    {
      title: 'Unique land exploration system:',
      description: 'Players can explore various lands and find areas with varying profitability, which creates constant dynamics and new opportunities in the gameplay.',
      src: '/images/image1.png'
    },
    {
      title: 'Variety of ways for earning:',
      description: `Glebe offers the opportunity to build different business models, including earning without initial investment.`,
      src: '/images/image2.webp'
    },
    {
      title: 'Passive income through NFT ownership:',
      description: 'Owners of land and other in-game assets can earn a steady income by renting them out, allowing them to earn even without actively participating in the gameplay.',
      src: '/images/image1.png'
    },
    {
      title: 'Deep integration of NFT with gameplay:',
      description: `Owners of lands, tools and islands don't just own digital assets - they manage assets that can generate real passive income through rentals and other in-game transactions. This makes the game's economy deeper and more dynamic, providing players real opportunities for long-term investment.`,
      src: '/images/image2.webp'
    },
    {
      title: 'Variety of game roles: ',
      description: 'Glebe offers the unique ability to choose multiple roles, each providing players with different ways of earning. Players can participate both actively (e.g. gold miners) and passively (asset owners), which appeals to different categories of users - from those looking for fun to those interested in passive income through NFT management.',
      src: '/images/image1.png'
    },
  ]

  const sections = [
    // {name: 'Hero', id: 0}, 
    {name: 'About', id: 1}, 
    {name: 'Gameplay', id: 2}, 
    {name: 'Roles', id: 3}, 
    {name: 'Differences', id: 4},
    {name: 'Team', id: 9},
    {name: 'Contact', id: 10}
  ]

  const delay = 800
  const easing = 'ease-in-out'

  let slideActiveId = 0
  let blockActiveId = 0
  let mySlider
  let image
  let imageisShow = false

  let arrHeight = []

  onMount(() => {
    // console.log(mySlider)
    image.style.transition = `${delay / 1000}s ${easing}`
    arrHeight = mySlider.splide.Components.Elements.slides.map(slide => slide.scrollHeight)
  })

  function imageHandler(e) {
    const index = e.detail.index
    const startId = 4
    const endId = startId + blocks.length
    slideActiveId = index
    blockActiveId = (index - startId < 0) 
    ? 0 
    : (index - startId > blocks.length) 
    ? blocks.length-1 
    : index - startId
    chandeHeigth(index, startId, endId)
  }

  function chandeHeigth(index, startId, endId) {
    const sumStart = arrHeight.slice(index, startId+1).reduce((arr, el) => arr + el, 0)
    const sumEnd = arrHeight.slice(endId-1, index).reduce((arr, el) => arr + el, 0)

    if(index < startId) {
      imageisShow = false
      image.style.top = `${sumStart}px`
    } else if(index >= startId && index < endId) {
      imageisShow = true
      image.style.top = `50%`
    } else if(index >= endId) {
      imageisShow = false
      image.style.top = `-${sumEnd}px`
    }
  }

  function goToSectionId(num) {
    mySlider.go(num)
  }
</script>

<div class="wrapper">
  <Header handler={goToSectionId} sections={sections}/>

  <main class="main">
    <Splide class='slider' bind:this={ mySlider }
    options={{
      direction: 'ttb',
      speed: delay,
      remindSpeed: 0,
      easing: easing,
      height   : '100vh',
      autoHeight: true,
      wheel    : true,
      arrows: false,
      pagination: false,
      perMove: 1,
      focus    : 'center',
      waitForTransition: true,
      flickMaxPages: 1,
      releaseWheel: true,
      preloadPages: 1,
      dragMinThreshold: {
        mouse: 20,
        touch: 20,
      },
      wheelMinThreshold: 10,
    }}
    on:move={imageHandler}
   
    >

    <SplideSlide>
      <Hero/>
    </SplideSlide>

    <SplideSlide>
      <About active={slideActiveId == 1}/>
    </SplideSlide>

    <SplideSlide>
      <Text/>
    </SplideSlide>

    <SplideSlide>
      <Roles />
    </SplideSlide>

    {#each blocks as el, i}
      <SplideSlide>
        <Block 
          id={i}
          active={blockActiveId == i}
          title={el.title}
          description={el.description}
        />
      </SplideSlide>
    {/each}

    <SplideSlide>
      <Team/>
    </SplideSlide>

    <SplideSlide>
      <ContactUs active={slideActiveId == 10}/>
    </SplideSlide>

  </Splide>

  <div class="image {!blockActiveId ? 'image__first' : ''} {imageisShow ? 'image--show' : ''}" bind:this={image} >
    <div class="image__wrapper">
      {#each blocks as el, i}
        <img class="image__inner {blockActiveId == i ? 'image--active' : ''}" src={el.src} alt="image {i}">
      {/each}
    </div>
  </div>
  </main> 
  <!-- <Footer/> -->
</div>



<style lang="scss">
  @import '/static/styles/mixins.scss';

  .wrapper {
    position: relative;
  }

  :global(section) {
    max-height: 100vh;
    position: relative;

    @include media-breakpoint-up(xl) {
      padding: 90px 50px 50px;
    } 

    @include media-breakpoint-between(lg, xl) {
      padding: 90px 40px 50px;
    } 

    @include media-breakpoint-between(md, lg) {
      padding: 90px 30px 50px;
    } 

    @include media-breakpoint-down(md) {
      padding: 90px 15px 50px;
    } 
  } 

  .image {
    position: fixed;
    top: 150vh;
    left: 50px;
    transform: translateY(-50%);
    width: 100%;
    aspect-ratio: 1.5/1;
    pointer-events: none;
    visibility: hidden;
    opacity: 0;


    @include media-breakpoint-up(xl) {
      transform: translateY(-50%);
      max-width: 580px;
    }

    @include media-breakpoint-between(lg, xl) {
      transform: translateY(-50%);
      max-width: 400px;
    }

    @include media-breakpoint-between(md, lg) {
      transform: translateY(-50%);
      left: 30px;
      max-width: 380px;
    }

    @include media-breakpoint-down(md) {
      transform: translateY(-50%) translateX(-50%);
      left: 50%;
      max-width: 450px;
    }

    &--show {
      opacity: 1;
      visibility: visible;

      @include media-breakpoint-up(md) {
        transform: translateY(-50%);
      }

      @include media-breakpoint-down(md) {
        transform: translateY(-100%) translateX(-50%);
      }
    }

    &__first {
      @include media-breakpoint-down(md) {
        transform: translateY(-65%) translateX(-50%);
      }
    }
    
    &__wrapper {
      position: relative;
      height: 100%;
      overflow: hidden;
    }

    &__inner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 1s;
      opacity: 0;
      transform: scale(100%);
    }

    &--active {
      opacity: 1;
      z-index: 1;
      transform: scale(110%);
    }
  }
</style>
