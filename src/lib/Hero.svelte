<script>

</script>

<section class="hero">
  <div class="hero__backgroud">
    <img src="/images/glebe_hp.webp" alt="backgroud">
  </div>
  <div class="hero__content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate perspiciatis eius quod? Debitis ipsam molestiae cumque ea et porro sint magnam rem asperiores eaque. Natus aspernatur ipsum molestias consequatur.
  </div>
</section>

<style lang="scss">
  .hero {
    position: relative;
    min-height: 100vh;

    &__backgroud {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      & > img {
        object-fit: cover;
      } 
    } 

    &__content {
      // position: relative;
      // background: #000;
    }
  }
</style>