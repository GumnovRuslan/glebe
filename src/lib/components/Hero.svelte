<script>

</script>

<section class="hero">
  <div class="hero__backgroud">
    <img class="hero__backgroud_img" src="/images/glebe_hp.webp" alt="backgroud">
  </div>
</section>

<style lang="scss">
  .hero {
    position: relative;
    min-height: 100vh;

    &__backgroud {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      min-height: 100vh;
    } 

    &__backgroud_img {
      object-fit: cover;
    }
  }
</style>