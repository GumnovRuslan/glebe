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
  import Roles from "../lib/components/Roles/Roles.svelte";
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
    {name: 'Hero', id: 0}, 
    {name: 'About', id: 1}, 
    {name: 'Gameplay', id: 2}, 
    {name: 'Roles', id: 3}, 
    {name: 'DFifferences', id: 4},
    {name: 'Team', id: 9},
    {name: 'Contact', id: 10}
  ]

  const delay = 600
  const easing = 'ease-in-out'

  let slideActiveId = 0
  let blockActiveId = 0
  let mySlider
  let image

  onMount(() => {
    console.log(mySlider)
    // initImage()
  })

 

  function imageHandler(e) {
    const index = e.detail.index
      const startId = 4
      const endId = startId + blocks.length
      slideActiveId = index
      blockActiveId = (index - startId < 0) 
      ? 0 
      : (index - startId > blocks.length-1) 
      ? blocks.length-1 
      : index - startId
      
      // if(index <= startId) {
      //   image.style.top = `${startId - index}00vh`
      // } else if(index > startId && index < endId) {
      //   image.style.top = `0`
      // } else if(index >= endId) {
      //   image.style.top = `${endId -1 - index}00vh`
      // }
  }

  function goToSectionId(num) {
    mySlider.go(num)
  }

  function initImage() {
    image.style.transition = `${delay / 1000}s ${easing}`
  }
</script>

<div class="wrapper">
  <Header handler={goToSectionId} sections={sections}/>

  <main class="main">
    <Splide aria-label="My Favorite Images" class='slider' bind:this={ mySlider }
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
      wheelMinThreshold: 10
      // drag   : 'free',
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
      <Text bgImage='/image' title='' text=''/>
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
      <Team title='title' text='text'/>
    </SplideSlide>

    <SplideSlide>
      <ContactUs active={slideActiveId == 10}/>
    </SplideSlide>

  </Splide>

  <!-- <div class="image {blockActiveId ? 'image__first' : ''}" bind:this={image} style="{`${delay / 1000}s ${easing}`}">
    <div class="image__wrapper">
      {#each blocks as el, i}
        <img class="image__inner {blockActiveId == i ? 'image--active' : ''}" src={el.src} alt="image {i}">
      {/each}
    </div>
  </div> -->
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
      padding: 90px 50px;
    } 

    @include media-breakpoint-between(lg, xl) {
      padding: 90px 40px;
    } 

    @include media-breakpoint-between(md, lg) {
      padding: 90px 30px;
    } 

    @include media-breakpoint-down(md) {
      padding: 90px 15px;
    } 
  } 

  .image {
    position: fixed;
    top: 200vh;
    left: 50px;
    transform: translateY(calc(50vh - 50%));
    width: 100%;
    aspect-ratio: 1.5/1;
    pointer-events: none;

    @include media-breakpoint-up(xl) {
      max-width: 580px;
    }

    @include media-breakpoint-between(lg, xl) {
      max-width: 400px;
    }

    @include media-breakpoint-between(md, lg) {
      left: 30px;
      max-width: 380px;
    }

    @include media-breakpoint-down(md) {
      transform: translateY(calc(170px)) translateX(-50%);
      left: 50%;
      max-width: 450px;
    }

    &__first {
      @include media-breakpoint-down(md) {
      transform: translateY(calc(90px)) translateX(-50%);
      left: 50%;
      max-width: 450px;
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
