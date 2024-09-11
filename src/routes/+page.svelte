<script>
  import Hero from "../lib/components/Hero.svelte";
  import About from "../lib/components/About.svelte";
  import Scrolling from "../lib/components/Scrolling.svelte";
  import Slider from "../lib/components/Slider.svelte";
  import Block from "../lib/components/block.svelte";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  import { onMount } from "svelte";

  const blocks = [
    {
      src: '/images/image1.png'
    },
    {
      src: '/images/image2.webp'
    },
    {
      src: '/images/image1.png'
    },
    {
      src: '/images/image2.webp'
    },
  ]

  const delay = 1000
  const easing = 'ease-in-out'

  let slideActiveId = 0
  let blockActiveId = 0
  let mySlider
  let image

  onMount(() => {
    image = document.querySelector('.image')
    initImage()
  })

  function initImage() {
    image.style.transition = `${delay / 1000}s ${easing}`
  }
</script>

<Splide aria-label="My Favorite Images" class='slider' bind:this={ mySlider }
    options={{
      direction: 'ttb',
      speed: delay,
      easing: easing,
      height   : '100vh',
      autoHeight: true,
      wheel    : true,
      arrows: false,
      pagination: false,
    }}
    on:move={e => {
      const index = e.detail.index
      const startId = 2
      const endID = startId + blocks.length
      slideActiveId = index
      blockActiveId = (index - startId < 0) 
      ? 0 
      : (index - startId > blocks.length-1) 
      ? blocks.length-1 
      : index - startId
      
      if(index <= 2) {
        image.style.top = `${startId - index}00vh`
      } else if(index > startId && index < endID) {
        image.style.top = `0`
      } else if(index >= endID) {
        image.style.top = `${endID - 1 - index}00vh`
      }
    }}
    >

    <SplideSlide>
      <Hero />
    </SplideSlide>

    <SplideSlide>
      <About active={slideActiveId == 1}/>
    </SplideSlide>

    {#each blocks as el, i}
      <SplideSlide>
        <Block active={blockActiveId == i}/>
      </SplideSlide>
    {/each}

    <SplideSlide>
      <About />
    </SplideSlide>

  </Splide>

  <div class="image">
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
    top: 1000%;
    left: 50px;
    transform: translateY(calc(50vh - 50%));
    width: 500px;
    aspect-ratio: 1.5/1;
    pointer-events: none;

    @include media-breakpoint-between(md, lg) {
      left: 20px;
      max-width: 400px;
    }

    @include media-breakpoint-down(md) {
      transform: translateY(calc(100px)) translateX(-50%);
      left: 50%;
      width: 100%;
      max-width: 600px;
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
