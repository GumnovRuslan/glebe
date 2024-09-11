<script>
  export let active = false;
</script>

<section class="about">
  <div class="about__top {active ? 'about__top--active' : ''}"></div>
  <div class="about__inner">
    <div class="about__content">
      <h2 class="about__title">About</h2>
      <p class="about__description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum perspiciatis ullam recusandae porro, iure harum at tempore, possimus cumque praesentium repudiandae fugit aperiam, facere ipsum quasi veniam soluta asperiores est?
      </p>
    </div>
  </div>
</section>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .about {
    position: relative;
    

    &__top {
      position: absolute;
      top: 0;
      transition: 1s;
      transform: translateY(-40%);
      background: red;
      width: 100%;
      height: 200px;

      &--active {
        transform: translateY(-100%);
      }
    }
    
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
      padding: 0 20px;
      overflow: hidden;

      @include media-breakpoint-up(lg) {
        max-width: 55%;
      }

      @include media-breakpoint-between(md, lg) {
        max-width: 80%;
      }

      @include media-breakpoint-down(md) {
        max-width: 100%;
      }
    }

    &__title {
      width: max-content;
      padding: 0 20px;
      position: relative;
      text-align: center;
      font-weight: 700;
      text-transform: uppercase;
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

      @include media-breakpoint-up(lg) {
        margin-bottom: 40px;
        font-size: 50px;
      }

      @include media-breakpoint-between(md, lg) {
        margin-bottom: 30px;
        font-size: 30px;
      }

      @include media-breakpoint-down(md) {
        margin-bottom: 20px;
        font-size: 26px;
      }
    }

    &__description {
      text-align: center;
      color: #fff;

      @include media-breakpoint-up(lg) {
        font-size: 30px;
        line-height: 48px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 22px;
        line-height: 32px;
      }

      @include media-breakpoint-down(md) {
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
</style>