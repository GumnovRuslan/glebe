<script context="module">
  export const ssr = false;
</script>

<script>
  import { onMount } from 'svelte';

  let sections = []; // Массив для хранения ссылок на секции

  function onSectionVisible(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = sections.indexOf(entry.target);
        if (index !== -1) scrollToSection(index);
      }
    });
  }

  function scrollToSection(index) {
    sections.forEach(section => {
      if(section == sections[index]) {
        section.style.color = '#fff'
      } else {
        section.style.color = '#353434'
      }
    })
    // console.log(sections[index])
    sections[index].style.color = '#fff'
    sections[index].scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  onMount(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(onSectionVisible, {
        root: null,
        threshold: 0.5
      });

      sections.forEach(section => {
        observer.observe(section);
      });

      return () => {
        observer.disconnect();
      };
    } else {
      console.warn('IntersectionObserver не поддерживается в этом окружении.');
    }
  });
</script>

<section class="scrolling">
  <!-- <div class="scrolling__image">

  </div> -->
  <div bind:this={sections[0]} class="section">
    <div class="scrolling__content">
      <h1>Секция 1</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae provident debitis doloremque! Quo illo ad sint vel laboriosam impedit exercitationem eius doloribus modi, quibusdam blanditiis pariatur sequi possimus magnam obcaecati.</p>
    </div>
  </div>
  
  <div bind:this={sections[1]} class="section">
    <div class="scrolling__content">
      <h1>Секция 1</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae provident debitis doloremque! Quo illo ad sint vel laboriosam impedit exercitationem eius doloribus modi, quibusdam blanditiis pariatur sequi possimus magnam obcaecati.</p>
    </div>
  </div>
  
  <div bind:this={sections[2]} class="section">
    <div class="scrolling__content">
      <h1>Секция 1</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae provident debitis doloremque! Quo illo ad sint vel laboriosam impedit exercitationem eius doloribus modi, quibusdam blanditiis pariatur sequi possimus magnam obcaecati.</p>
    </div>
  </div>

  <div bind:this={sections[3]} class="section">
    <div class="scrolling__content">
      <h1>Секция 1</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae provident debitis doloremque! Quo illo ad sint vel laboriosam impedit exercitationem eius doloribus modi, quibusdam blanditiis pariatur sequi possimus magnam obcaecati.</p>
    </div>
  </div>

  <div bind:this={sections[4]} class="section">
    <div class="scrolling__content">
      <h1>Секция 1</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae provident debitis doloremque! Quo illo ad sint vel laboriosam impedit exercitationem eius doloribus modi, quibusdam blanditiis pariatur sequi possimus magnam obcaecati.</p>
    </div>
  </div>
</section>


<style lang="scss">
  .section {
    position: relative;
    height: 60vh;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 24px;
    padding: 0 50px;
    transition: 2s;
    color: #353434;
    // border-top: 1px solid #fff;
    // border-bottom: 1px solid #fff;
  }

  .scrolling {

    &__image {
      position: fixed;
      z-index: 1;
      top: 50%;
      left: 50px;
      width: 400px;
      height: 400px;
      transform: translateY(-50%);
      background: #353434;
    }

    &__content {
      max-width: 500px;

      & p {
        font-size: 30px;
        line-height: 40px;
      }
    }
  }
</style>