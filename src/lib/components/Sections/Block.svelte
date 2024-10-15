<script>
  export let active = false; 
  export let title = ''
  export let description = ''
  export let id = null
</script>

<section class="block ">
  {#if id == 0}
      <h2 class="block__title">What makes our project stand out?</h2>
  {/if}
  <div class="block__inner">
    <div class="block__content {active ? 'block__content--active' : ''}" >
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
    transition: 0.5s 0.3s;
    color: #fff;
    height: 100%;
    

    @include media-breakpoint-up(xxl) {
      min-height: 600px;
    }

    @include media-breakpoint-between(xl, xxl) {
      height: 600px;
    }

    @include media-breakpoint-down(md) {
      height: 100vh;
      padding-bottom: 20px;
    }

    &__inner {
      display: flex;
      align-items: center;
      gap: 30px;
      height: 100%;
      flex: content;

      @include media-breakpoint-down(md) {
        flex-direction: column;
      }
    }

    &__title {
      width: 100%;
      font-size: 46px;
      text-align: center;
      color: #fff;

      @include media-breakpoint-up(md) {
        margin-top: -80px;
        margin-bottom: 80px;
      }

      @include media-breakpoint-between(sm, md) {
        font-size: 30px;
      }

      @include media-breakpoint-down(md) {
        font-size: 30px;
        margin-bottom: -60px;
      }
    }

    &__content {
      flex: content;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      opacity: 0.2;
      transition: 0.4s;

      @include media-breakpoint-up(xxl) {
        min-height: 400px;
      }

      @include media-breakpoint-between(xl, xxl) {
        min-height: 400px;
      }

      @include media-breakpoint-between(lg, xl) {
        min-height: 300px;
      }

      @include media-breakpoint-down(md) {
        align-items: flex-end;
      }

      &--active {
        opacity: 1;
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

      @include media-breakpoint-between(sm, xl) {
        flex-direction: column;
        width: 500px;
      }

      @include media-breakpoint-down(sm) {
        flex-direction: column;
        gap: 15px;
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
        margin-bottom: 10px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 30px;
        margin-bottom: 10px;
      }

      @include media-breakpoint-between(sm, md) {
        font-size: 34px;
        margin-bottom: 10px;
      }

      @include media-breakpoint-down(sm) {
        font-size: 28px;
        margin-bottom: 10px;
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

      @include media-breakpoint-between(sm, md) {
        text-align: justify;
        max-width: 100%;
        font-size: 26px;
        line-height: 28px;
      }

      @include media-breakpoint-down(sm) {
        text-align: justify;
        font-size: 20px;
        line-height: 25px;
      }
    }
  }
</style>