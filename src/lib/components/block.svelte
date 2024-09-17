<script>
  export let active = false; 
  export let title = ''
  export let description = ''
  export let id = null
</script>

<section class="block {active ? 'block--active' : ''}">
  {#if id == 0}
      <h2 class="block__title">What makes our project stand out?</h2>
  {/if}
  <div class="block__inner">
    <div class="block__image {active ? 'block__image--active' : ''}">
      <img src="/images/image2.webp" alt="">
    </div>
    <div class="block__content">
      <div class="block__card">
        <p class="block__card_title">{title}</p>
        <p class="block__card_text">{description}</p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .block {
    opacity: 0.2;
    transition: 0.5s 0.3s;
    color: #fff;

    &--active {
      opacity: 1;
    }

    &__inner {
      display: flex;
      align-items: flex-end;
      align-items: center;
      gap: 30px;
      height: 100%;

      @include media-breakpoint-down(md) {
        flex-direction: column;
      }
    }

    &__image {
      max-width: 600px;
      aspect-ratio: 1/1;
      opacity: 0;
      transition: 0.5s 0.5s;

      &--active {
        opacity: 1;
      }
    }

    &__title {
      width: 100%;
      font-size: 46px;
      text-align: center;
      text-align: center;
      color: #fff;
      margin-bottom: 50px;

      @include media-breakpoint-between(sm, md) {
        font-size: 30px;
      }

      @include media-breakpoint-down(md) {
        font-size: 30px;
      }
    }

    &__content {
      flex: content;
      display: flex;
      align-items: center;

      @include media-breakpoint-down(md) {
        align-items: flex-end;
      }
    }

    &__card {
      display: flex;

      @include media-breakpoint-up(xl) {
        gap: 30px;
      }

      @include media-breakpoint-between(md, lg) {
        max-width: 40vw;
      }

      @include media-breakpoint-down(xl) {
        flex-direction: column;
        gap: 20px;
      }
    }

    &__card_title {
      align-self: flex-start;

      @include media-breakpoint-up(xl) {
        max-width: 350px;
        font-size: 40px;
        text-align: center;
      }

      @include media-breakpoint-between(xl, xxl) {
        max-width: 350px;
        font-size: 36px;
        text-align: center;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 30px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 30px;
      }

      @include media-breakpoint-down(md) {
        text-align: center;
        font-size: 26px;
      }
    }

    &__card_text {
      @include media-breakpoint-up(xxl) {
        max-width: 35vw;
        font-size: 30px;
        line-height: 42px;
      }

      @include media-breakpoint-between(xl, xxl) {
        max-width: 25vw;
        font-size: 28px;
        line-height: 32px;
      }

      @include media-breakpoint-between(lg, xl) {
        max-width: 40vw;
        font-size: 26px;
        line-height: 32px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 24px;
        line-height: 30px;
      }

      @include media-breakpoint-down(md) {
        text-align: justify;
        max-width: 100%;
        font-size: 24px;
        line-height: 28px;
      }
    }
  }
</style>