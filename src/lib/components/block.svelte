<script>
  export let active = false; 
  export let title = ''
  export let description = ''
  export let id = null
</script>

<section class="block {active ? 'block--active' : ''}">
  <div class="block__inner">
    {#if id == 0}
      <h2 class="block__title">Market and target audience</h2>
    {/if}
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
    transition: 1s 0.3s;
    color: #fff;

    &--active {
      opacity: 1;
    }

    &__inner {
      padding: 100px 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-start;
      gap: 30px;
      min-height: 100vh;
    }

    &__title {
      width: 100%;
      font-size: 46px;
      text-align: center;
      text-align: center;
      color: #fff;
      margin-bottom: -26px;
    }

    &__content {
      flex: content;
      display: flex;
      align-items: center;
    }

    &__card {
      display: flex;
      gap: 50px;

      @include media-breakpoint-down(xl) {
        flex-direction: column;
        gap: 20px;
      }
    }

    &__card_title {
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

    &__card_text {
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