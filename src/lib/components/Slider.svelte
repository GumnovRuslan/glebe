<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  import { onMount } from 'svelte';

  let isTop = null
  let index = 0
  let mySlider

  onMount(() => {
    
      window.addEventListener('wheel', (e) => {
        isTop = e.deltaY > 0

        if(isTop && index == 2) {
          console.log(mySlider.splide)
          mySlider.options.wheel = false
        }
      })
  })
</script>

<section>
  <Splide aria-label="My Favorite Images" class='slider' bind:this={ mySlider }
    options={{
      direction: 'ttb',
      height   : '100vh',
      wheel    : true,
    }}
    on:move={e => {
      // console.log(e.detail.index)
      index = e.detail.index
      console.log(isTop > 0, index)
    }}
    >

    <SplideSlide style='color: red'>
      <p>slide 1</p>
    </SplideSlide>
    <SplideSlide>
      <p>slide 2</p>
    </SplideSlide>
    <SplideSlide>
      <p>slide 3</p>
    </SplideSlide>

  </Splide>
</section>

<style lang="scss">
  .slider {
    background: red;
    pointer-events: none;
  }
  section {
    position: sticky;
    top: 0;
    // min-height: 100vh;
    background: #000;
    color: #fff;
  }
</style>