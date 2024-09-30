<script>

</script>

<section class="text">
  <div class="text__background">
    <img class="text__background_img" src="/images/gameplay.webp" alt="background">
  </div>
  <div class="text__content">
    <div class="text__content_wrapper">
      <p class="text__title">Gameplay:</p>
      <p class="text__text">Glebe transports players to an immersive gold rush universe where each participant chooses their unique role and interacts with in-game assets to generate cryptocurrency profits. Players can become explorers, landlords or large-scale owners, creating a unique ecosystem where the economy is player-driven and hardened by real value through NFT.</p>
    </div>
  </div>
</section>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .text {
    position: relative;
    height: 100vh;

    &__content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      overflow: hidden;
    }

    &__content_wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 600px;
      padding: 30px;
      border-radius: 50px;
      background: #00000098;
      backdrop-filter: blur(5px);
    }

    &__title {
      font-size: 46px;
      font-weight: 700;
      color: #ffffff;
      text-shadow: 0 0 10px #000;

      @include media-breakpoint-between(sm, md) {
        font-size: 40px;
        line-height: 30px;
      }

      @include media-breakpoint-down(sm) {
        font-size: 34px;
        line-height: 26px;
      }
    }

    &__text {
      font-size: 30px;
      color: #ffffff;

      @include media-breakpoint-between(sm, md) {
        font-size: 24px;
        line-height: 30px;
      }

      @include media-breakpoint-down(sm) {
        font-size: 20px;
        line-height: 26px;
      }
    }

    &__background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      min-height: 100vh;
    } 

    &__background_img {
      object-fit: cover;
    }
  }
</style>