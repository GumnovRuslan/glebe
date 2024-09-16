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
      align-items: flex-end;
      justify-content: center;
      padding: 100px 20px;
    }

    &__title {
      font-size: 46px;
      font-weight: 700;
      color: #ffffff;
      text-shadow: 0 0 10px #000;
      padding: 12vh 0;
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