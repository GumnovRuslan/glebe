<script>
  import { createEventDispatcher } from 'svelte';
  
  export let isActive = false
  export let isVisable = true

  const dispatch = createEventDispatcher();

  function toggleMenu() {
    isActive = !isActive;
    dispatch('toggle', isActive);
  }
</script>

<button type="button" class="burger {!isVisable ? 'burger--hidden' : ''}" on:click={toggleMenu}>
  <div class="burger__line"></div>
</button>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .burger {
    width: max-content;
    display: flex;
    align-items: center;
    aspect-ratio: 1/1;
    padding: 5px;
    background: transparent;
    border: none;
    cursor: pointer;

    @include media-breakpoint-up(lg) {
      display: none;
    }

    &__line {
      position: relative;
      width: 36px;
      height: 3px;
      background: #fff;
      border-radius: 20px;

      &::after, 
      &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 20px;
      }

      &::before {
        top: -12px;
      }

      &::after {
        top: 12px;
      }
    }
  }
</style>