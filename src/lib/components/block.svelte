<script>
  export let active = false; 
</script>

<section class="block {active ? 'block--active' : ''}">
  <p class="block__text">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, fuga earum. Obcaecati sunt excepturi earum maiores molestias necessitatibus omnis autem, cupiditate, deleniti est, alias nostrum perspiciatis voluptate inventore dignissimos? Minima.
  </p>
</section>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .block {
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 20px;
    min-height: 100vh;
    color: #fff;
    opacity: 0;
    transition: 1s;

    @include media-breakpoint-down(md) {
      justify-content: center;
      padding: 100px 0;
      align-items: end;
    }

    &--active {
      opacity: 1;
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