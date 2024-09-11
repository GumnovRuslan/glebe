<script>

</script>

<section class="hero">
  <div class="hero__background">
    <img class="hero__background_img" src="/images/glebe_hp.webp" alt="background">
  </div>
</section>

<style lang="scss">
  .hero {
    position: relative;
    min-height: 100vh;

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