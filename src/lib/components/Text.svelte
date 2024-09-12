<script>

</script>

<section class="text">
  <div class="text__background">
    <img class="text__background_img" src="/images/glebe_hp.webp" alt="background">
  </div>
  <div class="text__content">
    <div class="text__content_wrapper">
      <p class="text__title">Gameplay:</p>
      <p class="text__text">Glebe transports players to an immersive gold rush universe where each participant chooses their unique role and interacts with in-game assets to generate cryptocurrency profits. Players can become explorers, landlords or large-scale owners, creating a unique ecosystem where the economy is player-driven and hardened by real value through NFT.</p>
    </div>
  </div>
</section>

<style lang="scss">
  .text {
    position: relative;
    min-height: 100vh;

    &__content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 100px 50px;
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
    }

    &__text {
      font-size: 30px;
      color: #ffffff;
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