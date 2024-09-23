<script>
</script>

<section class="hero">
  <div class="hero__background">
    <img class="hero__background_img" src="/images/Glebe_1.jpg" alt="background">
  </div>
  <div class="hero__content">
    <p class="hero__title">A game where every strike brings gold</p>
  </div>
</section>

<style lang="scss">
  // @import '/static/styles/mixins.scss';
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
      // flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      padding: 90px 20px 50px;

      // @include media-breakpoint-down(md) {
      //   padding: 20px;
      // }
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

    &__title {
      font-size: 46px;
      font-weight: 700;
      color: #ffffff;
      text-shadow: 0 0 10px #000;
      text-align: center;
      padding-bottom: 0px;
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
      object-position: 45% 100%;
    }
  }
</style>