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
  <div class="burger__line {isActive ? 'burger__line--active' : ''}"></div>
</button>

<style lang="scss">
  @import '/static/styles/mixins.scss';

  $transition: 0.2s;

  .burger {
    width: max-content;
    display: flex;
    align-items: center;
    aspect-ratio: 1/1;
    padding: 5px;
    background: transparent;
    border: none;
    cursor: pointer;

    @include media-breakpoint-up(xl) {
      display: none;
    }

    &__line {
      position: relative;
      width: 36px;
      height: 3px;
      background: #fff;
      border-radius: 20px;
      transition: $transition;

      &::after, 
      &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 20px;
        transition: top $transition*2 $transition, transform $transition;
      }

      &::before {
        top: -12px;
      }

      &::after {
        top: 12px;
      }

      &--active {
        background: transparent;

        &::after,
        &::before {
          top: 0;
          transition: top $transition, transform $transition*2 $transition;
        }

        &::after {
          transform: rotate(45deg);
        }

        &::before {
          transform: rotate(-45deg);
        }
      }
    }
  }
</style>