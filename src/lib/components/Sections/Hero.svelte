<script>
</script>

<section class="hero">
  <div class="hero__background">
    <img class="hero__background_img" src="/images/hero.webp" alt="background">
  </div>
  <div class="hero__content">
    <p class="hero__title">A game where every strike brings gold</p>
  </div>
</section>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .hero {
    position: relative;
    min-height: 100vh;

    &__content {
      position: relative;
      display: flex;
      justify-content: center;

      @include media-breakpoint-up(sm) {
        padding: 90px 0 50px;
      }

      @include media-breakpoint-down(sm) {
        padding: 60px 0 50px;
      }
    }

    &__title {
      font-size: 46px;
      font-weight: 700;
      color: #ffffff;
      text-shadow: 0 0 10px #000;
      text-align: center;
      // padding-top: 5%;    
    }

    &__background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    } 

    &__background_img {
      object-fit: cover;
      object-position: 50% 100%;
    }
  }
</style>