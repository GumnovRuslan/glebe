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
      // justify-content: center;
      min-height: 60px;
      padding: 10px 40px;
      border-radius: 50px;
      box-shadow: 0 0 5px #fff;
      background: #00000098;
      backdrop-filter: blur(5px);
    }

    &__logo {
      font-weight: 700;
      font-size: 40px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #fff;
    }
  }
</style>