<script>
  import Burger from "../Burger.svelte";

  export let handler = null
  export let sections = []

  let isOpen = false

  function handleToggle(event) {
    isOpen = event.detail; // Обновляем состояние на основе данных из дочернего компонента
  }

  function clickMenu(id) {
    handler(id)
    isOpen = false
  }
</script>

<header class="header">
  <div class="header__inner">
    <span class="header__logo">glebe</span>
    <nav class="header__nav_list {isOpen ? 'header__nav_list--active' : ''}">
      {#each sections as section}
        <button type="button" class="header__nav_item" on:click={() => clickMenu(section.id)}>{section.name}</button>
      {/each}
    </nav>
    <Burger isActive={isOpen} on:toggle={handleToggle}/>
  </div>
  
</header>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .header {
    position: fixed;
    z-index: 10;
    width: 100%;
    padding: 10px;
    top: 0;
    left: 0;

    &__inner {
      display: flex;
      align-items: center;
      gap: 50px;
      min-height: 60px;

      @include media-breakpoint-up(lg) {
        padding: 10px 40px;
      }

      @include media-breakpoint-down(lg) {
        justify-content: space-between;
        padding: 10px 10px;
      }
    }

    &__logo {
      font-weight: 700;
      font-size: 40px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #fff;

      @include media-breakpoint-down(lg) {
        font-size: 36px;
      }
    }

    &__nav_list {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 30px;

      @include media-breakpoint-up(lg) {
        justify-content: center;
      }

      @include media-breakpoint-down(lg) {
        position: absolute;
        transition: 0.3s;
        top: 100%;
        left: 100%;
        height: 100vh;
        background: #00000000;
        flex-direction: column;
        gap: 15px;
        padding: 40px 20px;
        backdrop-filter: blur(10px);
      }

      &--active {
        @include media-breakpoint-down(lg) {
          left: 0;
        }
      }
    }

    &__nav_item {
      position: relative;
      background: transparent;
      border: none;
      font-size: 26px;
      text-align: left;
      color: #fff;
      cursor: pointer;
      max-width: max-content;
      padding: 0;
      overflow: hidden;

      @include media-breakpoint-down(lg) {
        font-size: 30px;
        padding: 10px;
        text-shadow: 0 0 10px #000;
      }
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: #fff;
        transition: 0.3s;
        border-radius: 10px;
      }
      &:hover {
        &::before {
          left: 0;
        }
      }
      
    }
  }
</style>