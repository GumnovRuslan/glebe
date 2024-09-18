<script>
  export let icon
  export let text = ''
  export let href = '#'
</script>

<a {href} class="link">
  {#if icon}
    <span class="link__icon">{@html icon}</span>
  {/if}
  <span class="link__text">{text}</span>
</a>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .link {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
    width: max-content;
    text-decoration: none;
    padding: 10px 0;
    overflow: hidden;
    transition: 0.3s;
    color: #fff;

    &::before {
      content: '';
      position: absolute;
      bottom: 0px;
      left: -100%;
      width: 100%;
      height: 2px;
      border-radius: 5px;
      background: #fff;
      transition: 0.3s;
    }

    &:hover {
      color: #fff;
      &::before {
        left: 0;
      }
    }

    &__icon {
      @include media-breakpoint-up(md) {
        max-width: 40px;
        max-height: 40px;
      }

      @include media-breakpoint-down(md) {
        max-width: 30px;
        max-height: 30px;
      }
    }

    &__text {
      @include media-breakpoint-down(md) {
        font-size: 30px;
      }

      @include media-breakpoint-down(md) {
        font-size: 20px;
      }
    }
  }
</style>