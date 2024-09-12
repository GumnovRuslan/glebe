<script>
  export let active = false; 
  export let title = ''
  export let description = ''
</script>

<section class="block {active ? 'block--active' : ''}">
  <div class="block__inner">
    <p class="block__title">{title}</p>
    <p class="block__text">{description}</p>
  </div>
</section>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .block {
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 20px;
    min-height: 50vh;
    color: #fff;
    opacity: 0.2;
    transition: 1s;

    @include media-breakpoint-down(md) {
      justify-content: center;
      padding: 100px 0;
      align-items: end;
    }

    &--active {
      opacity: 1;
    }

    &__inner {
      display: flex;
      gap: 50px;

      @include media-breakpoint-down(xl) {
        flex-direction: column;
        gap: 20px;
      }

      // @include media-breakpoint-between(md, lg) {
      //   flex-direction: column;
      //   gap: 20px;
      // }
    }

    &__title {
      max-width: 400px;
      align-self: flex-start;

      @include media-breakpoint-up(xl) {
        font-size: 40px;
        text-align: center;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 30px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 30px;
      }
    }

    &__text {
      @include media-breakpoint-up(xl) {
        max-width: 600px;
        font-size: 30px;
        line-height: 42px;
      }

      @include media-breakpoint-between(lg, xl) {
        max-width: 40vw;
        font-size: 26px;
        line-height: 32px;
      }

      @include media-breakpoint-between(md, lg) {
        max-width: 39vw;
        font-size: 24px;
        line-height: 30px;
      }

      @include media-breakpoint-down(md) {
        text-align: justify;
        max-width: 100%;
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
</style>