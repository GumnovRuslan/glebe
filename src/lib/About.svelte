<script>

</script>

<section class="about">
  <div class="about__inner">
    <div class="about__content">
      <h2 class="about__title">About</h2>
      <p class="about__description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum perspiciatis ullam recusandae porro, iure harum at tempore, possimus cumque praesentium repudiandae fugit aperiam, facere ipsum quasi veniam soluta asperiores est?
      </p>
      <p class="about__description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum perspiciatis ullam recusandae porro, iure harum at tempore, possimus cumque praesentium repudiandae fugit aperiam, facere ipsum quasi veniam soluta asperiores est?
      </p>
    </div>
  </div>
</section>

<style lang="scss">
  .about {
    position: relative;
    &__inner {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #000;
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 55%;
    }

    &__title {
      width: max-content;
      padding: 0 20px;
      position: relative;
      text-align: center;
      font-size: 50px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 40px;
      color: #fff;

      &::before, 
      &::after {
        content: '';
        position: absolute;
        width: 200px;
        height: 2px;
        top: 50%;
        background: currentColor;
      }

      &::before {
        left: 100%;
      }

      &::after {
      right: 100%;
      }
    }

    &__description {
      text-align: center;
      font-size: 30px;
      line-height: 48px;
      color: #fff;
    }
  }
</style>