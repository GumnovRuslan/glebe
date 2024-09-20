<script>
  export let active = false
  export let text = 'Title'
</script>

<div class="title__wrapper">
  <h2 class="title {active ? 'title--active' : ''}">{text}</h2>
</div>

<style lang="scss">
  @import '/static/styles/mixins.scss';

  .title__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
      width: max-content;
      position: relative;
      text-align: center;
      font-size: 50px;
      font-weight: 700;
      text-transform: uppercase;
      color: #fff;

      &::before, 
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        top: 50%;
        transition: all 0.8s 0.5s;
        background: currentColor;
      }
      &::before {
        left: calc(100% + 20px);
      }
      &::after {
        right: calc(100% + 20px);
      }

      &--active {
        &::before, 
        &::after {
          width: 200px;

          @include media-breakpoint-up(md) {
            width: 200px;
          }

          @include media-breakpoint-down(md) {
            width: 100px;
          }
        }
      }

      @include media-breakpoint-up(xl) {
        font-size: 50px;
      }

      @include media-breakpoint-between(lg, xl) {
        font-size: 40px;
      }

      @include media-breakpoint-between(md, lg) {
        font-size: 30px;
      }

      @include media-breakpoint-down(md) {
        font-size: 26px;
      }
    }
</style>