<header class="header">
  <div class="header__inner">
    <span class="header__logo">glebe</span>
  </div>
  
</header>

<style lang="scss">
  .header {
    position: fixed;
    z-index: 10;
    width: 100%;
    padding: 20px;
    top: 0;
    left: 0;

    &__inner {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 60px;
      padding: 10px 20px;
      border-radius: 50px;
      background: #000;
    }

    &__logo {
      font-weight: 700;
      font-size: 30px;
      
      text-transform: uppercase;
      color: #fff;
    }
  }
</style>