<script>
  export let slider = null
  export let sections = []
</script>

<section class="hero">
  <div class="hero__background">
    <img class="hero__background_img" src="/images/Glebe_1.jpg" alt="background">
  </div>
  <div class="hero__content">
    <div class="hero__sections">
      {#each sections as section}
        <button type="button" class="hero__btn_section" on:click={() => slider(section.id)}>{section.name}</button>
      {/each}
    </div>
    <p class="hero__title">A game where every strike brings gold</p>
  </div>
</section>

<style lang="scss">
  .hero {
    position: relative;
    min-height: 100vh;

    &__content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      // align-items: flex-end;
      justify-content: space-between;
      padding: 90px 20px;
    }

    &__sections {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 300px;
      background: #00000088;
      border-radius: 20px;
      padding: 15px;
    }

    &__btn_section {
      position: relative;
      background: transparent;
      border: none;
      font-size: 26px;
      text-align: left;
      color: #fff;
      cursor: pointer;
      max-width: max-content;
      padding: 0;
      overflow: hidden;
      

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: -100%;
        width: 100%;
        height: 1px;
        background: #fff;
        transition: 0.3s;
      }

      &:hover {
        &::before {
          left: 0;
        }
      }
      
    }

    &__title {
      font-size: 46px;
      font-weight: 700;
      color: #ffffff;
      text-shadow: 0 0 10px #000;
      text-align: center;
      padding-bottom: 50px;
    }

    &__background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      min-height: 100vh;
    } 

    &__background_img {
      object-fit: cover;
    }
  }
</style>