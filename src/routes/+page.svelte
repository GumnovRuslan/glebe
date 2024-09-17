<script>
  import Hero from "../lib/components/Hero.svelte";
  import About from "../lib/components/About.svelte";
  import Block from "../lib/components/Block.svelte";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  import { onMount } from "svelte";
  import Text from "../lib/components/Text.svelte";
  import Roles from "../lib/components/Roles/Roles.svelte";
  import ContactUs from "../lib/components/ContactUs.svelte";
  import Team from "../lib/components/Team.svelte";

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

  const delay = 800
  const easing = 'ease-in-out'

  let slideActiveId = 0
  let blockActiveId = 0
  let mySlider
  let image

  let scrollTimeout;

  function handleWheel(event) {
    console.log(event)
    if (Math.abs(event.deltaY) > 0) {
      event.preventDefault(); // Отключаем инерцию
    }
  }

  // onMount(() => {
  //   const splideContainer = document.querySelector('.splide');

  //   // Отключаем инерцию скролла
  //   splideContainer.addEventListener('wheel', disableScrollInertia, { passive: false });
  // });

  function handleScroll(event) {
    event.preventDefault()
    // Если таймер уже запущен, сбрасываем его
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // Устанавливаем новый таймер
    scrollTimeout = setTimeout(() => {
      console.log("Scroll event triggered");
      // Выполняем нужную логику здесь, например, перемещение слайда.
    }, 100); // Задержка в 100 миллисекунд
  }

  onMount(() => {
    console.log(mySlider)
    // console.log(mySlider.go(2))
    // scrollHeight children
    // console.log(mySlider.splide.root.children[0].children[0].children.length )
    // const heightSplider = mySlider.splide.root.children[0].scrollHeight
    // const sliders = mySlider.splide.root.children[0].children[0].children
    // const maxHeight = sliders.forEach(slider => slider.scrollHeight)
    // console.log(mySlider.splide.Components)
    image = document.querySelector('.image')
    // const splideContainer = document.querySelector('.splide');

//   // Отключаем инерцию скролла
    // window.addEventListener('wheel', (e) => {
    //   e.preventDefault()
    //   console.log(e)
    // });

    const splideContainer = document.querySelector('.splide');
    
    // Отключаем инерцию на тачпаде
    // document.addEventListener('wheel', handleWheel, { passive: false });
    // window.addEventListener('wheel', handleScroll, {passive: false});
    initImage()

    
  })

  function imageHandler(e) {
    const index = e.detail.index
      const startId = 4
      const endId = startId + blocks.length
      // const slides = e.detail.splide.root.firstElementChild.querySelectorAll('.splide__slide')
      slideActiveId = index
      blockActiveId = (index - startId < 0) 
      ? 0 
      : (index - startId > blocks.length-1) 
      ? blocks.length-1 
      : index - startId
      
      if(index <= startId) {
        image.style.top = `${startId - index}00vh`
      } else if(index > startId && index < endId) {
        image.style.top = `0`
      } else if(index >= endId) {
        image.style.top = `${endId -1 - index}00vh`
      }
  }

  function goTo(num) {
    mySlider.go(num)
  }

  function initImage() {
    image.style.transition = `${delay / 1000}s ${easing}`
  }
</script>

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
      // drag   : 'free',
    }}
    on:move={imageHandler}
    on:dragging={imageHandler}
    >

    <SplideSlide>
      <Hero slider={goTo} sections={sections}/>
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

  <div class="image {blockActiveId ? 'image__first' : ''}" style="{`${delay / 1000}s ${easing}`}">
    <div class="image__wrapper">
      {#each blocks as el, i}
        <img class="image__inner {blockActiveId == i ? 'image--active' : ''}" src={el.src} alt="image {i}">
      {/each}
    </div>
  </div>

<style lang="scss">
  @import '/static/styles/mixins.scss';
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
