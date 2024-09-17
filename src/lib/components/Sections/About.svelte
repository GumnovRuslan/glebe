<script>
  import Title from "../Title.svelte";

  export let active = false;
</script>

<section class="about">
  <div class="about__inner">
    <div class="about__content">
      <Title text='About' {active}/>
      <p class="about__description {active ? 'about__description--active' : ''}">
        Glebe is a world where every handful of earth can turn into a golden nugget, and every action brings you closer to true wealth. Here, in the era of a new gold rush, users compete for resources, explore lands and earn. In Glebe everyone can build their own business empire, combining all the game roles, building new and novel earning strategies to maximize profits.
      </p>
    </div>
  </div>
</section>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .about {
    position: relative;
    height: 100vh;
    
    &__inner {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
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

    // &__title {
    //   width: max-content;
    //   padding: 0 20px;
    //   position: relative;
    //   text-align: center;
    //   font-weight: 700;
    //   text-transform: uppercase;
    //   color: #fff;
    //   // transition: 0.5s .5s;

    //   &::before, 
    //   &::after {
    //     content: '';
    //     position: absolute;
    //     width: 50px;
    //     height: 2px;
    //     top: 50%;
    //     transition: 0.8s 0.5s;
    //     background: currentColor;
    //   }
    //   &::before {
    //     left: 100%;
    //   }
    //   &::after {
    //     right: 100%;
    //   }

    //   &--active {
    //     &::before, 
    //     &::after {
    //       width: 200px;
    //     }
    //   }

    //   @include media-breakpoint-up(lg) {
    //     margin-bottom: 40px;
    //     font-size: 50px;
    //   }

    //   @include media-breakpoint-between(md, lg) {
    //     margin-bottom: 30px;
    //     font-size: 30px;
    //   }

    //   @include media-breakpoint-down(md) {
    //     margin-bottom: 20px;
    //     font-size: 26px;
    //   }
    // }

    &__description {
      transition: 1.5s 0.5s;
      transform: translateY(100px);
      opacity: 0;
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

      &--active {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
</style>