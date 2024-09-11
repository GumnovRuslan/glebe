<script>
  import Hero from "../lib/components/Hero.svelte";
  import About from "../lib/components/About.svelte";
  import Scrolling from "../lib/components/Scrolling.svelte";
  import Slider from "../lib/components/Slider.svelte";
  import Block from "../lib/components/block.svelte";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  import { onMount } from "svelte";

  const delay = 1000
  const easing = 'ease-in-out'

  let mySlider
  let image
  let ifFixed = false

  onMount(() => {
    // console.log(mySlider.splide.root.childElementCount)
    image = document.querySelector('.image')
    initImage()
  })

  function initImage() {
    image.style.transition = `${delay / 1000}s ${easing}`
  }

  function iamgePosition() {
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
      // console.log(e.detail.splide.root.id)
      image.style.top = `${2 - e.detail.index}00vh`

      if(e.detail.index <= 1) {
        // ifFixed = false
        // image.style.top = '-33px'
        
      }
    }}
    
    >

    <SplideSlide>
      <Hero />
    </SplideSlide>

    <SplideSlide>
      <About />
    </SplideSlide>

    <SplideSlide>
      <div class="first">
        <Block/>
      </div>
    </SplideSlide>

    <SplideSlide>
      <Block/>
    </SplideSlide>

    <SplideSlide>
      <Block/>
    </SplideSlide>

    <SplideSlide>
      <About />
    </SplideSlide>

  </Splide>

  <div class="image {ifFixed ? 'fixed' : 'absolute'}">

  </div>

<style lang="scss">
  .image {
    position: fixed;
    top: 1000%;
    transform: translateY(calc(50vh - 50%));
    width: 400px;
    aspect-ratio: 1/1;
    background: red; 
  }
</style>
