<script>
  import Hero from "../lib/components/Hero.svelte";
  import About from "../lib/components/About.svelte";
  import Block from "../lib/components/Block.svelte";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  import { onMount } from "svelte";
  import Text from "../lib/components/Text.svelte";

  const blocks = [
    {
      title: 'Target audience:',
      description: 'Glebe is aimed at gamers, crypto-enthusiasts and NFT investors aged 18 to 45. These users are actively involved in the development of Play2Earn and blockchain games, and many of them are using Telegram as their primary platform to interact with the crypto community.',
      src: '/images/image1.png'
    },
    {
      title: 'Market potential:',
      description: `The GameFi market is projected to reach $19.58 billion by 2024, with a robust compound annual growth rate (CAGR) of 27.7% from 2024 to 2031. This growth is driven by the integration of blockchain technologies, which enhance transparency, trust, and security in gaming environments. GameFi's rise is fueled by the increasing popularity of play-to-earn models, which allow players to earn digital assets and real-world value through in-game activities. The Asia Pacific, North America, and Europe are expected to lead in market revenue, with significant growth opportunities in China, the U.S., and Europe​.
By 2030, the market could grow exponentially, making GameFi a crucial player in both the gaming and decentralized finance ecosystems.`,
      src: '/images/image2.webp'
    },
    {
      title: 'The potential of games on the Telegram platform:',
      description: 'Telegram is one of the fastest-growing platforms in the world and currently has over 1 billion active users. Due to its flexibility, ability to integrate bots and mini-apps, Telegram has become an important tool for crypto-enthusiasts and Play2Earn game developers. The platform is also known for its focus on privacy and decentralization, which attracts both gamers and investors willing to participate in blockchain-based Play2Earn projects.',
      src: '/images/image1.png'
    },
    {
      title: 'The potential of the TON blockchain:',
      description: 'The TON (The Open Network) blockchain plays a key role in providing low transaction costs and high performance, making it an ideal technological foundation for games with NFT elements.',
      src: '/images/image2.webp'
    },
    {
      title: 'Conclusion:',
      description: 'Glebe integrates three powerful market trends - Play2Earn, Telegram as a gaming platform and the TON blockchain - which offers significant opportunities for growth and involvement of an active audience.',
      src: '/images/image1.png'
    },
  ]

  const delay = 800
  const easing = 'ease-in-out'

  let slideActiveId = 0
  let blockActiveId = 0
  let blockActiveId2 = 0
  let mySlider
  let image

  onMount(() => {
    // scrollHeight children
    // console.log(mySlider.splide.root.children[0].children[0].children.length )
    // const heightSplider = mySlider.splide.root.children[0].scrollHeight
    // const sliders = mySlider.splide.root.children[0].children[0].children
    // console.log(mySlider.splide.Components)
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
      focus    : 'center',
      waitForTransition: true
    }}
    on:move={e => {
      const index = e.detail.index
      const startId = 2
      const endId = startId + blocks.length
      const slides = e.detail.splide.root.firstElementChild.querySelectorAll('.splide__slide')
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
        <Block 
        id={i}
        active={blockActiveId == i}
        title={el.title}
        description={el.description}
        />
      </SplideSlide>
    {/each}

    <SplideSlide>
      <Text />
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

  .text {
    margin-top: 100px;
    padding: 50px 20px;
    background: #000;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;

    & p {
      font-size: 26px;
      line-height: 36px;
      color: #fff;
    }
  }

  .title {
    text-align: center;
    font-size: 50px;
    color: #fff;
  }

  .image {
    position: fixed;
    top: 200vh;
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
