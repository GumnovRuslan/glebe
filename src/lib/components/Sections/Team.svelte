<script>

</script>

<section class="team">
  <div class="team__background">
    <img class="team__background_img" src="/images/team.webp" alt="background">
  </div>
  <div class="team__content">
    <div class="team__content_inner">
      <p class="team__title">Team with long experience</p>
      <div class="team__text">
        <p><span class="team__text_title">Experience: </span>Our team consists of industry professionals with more than 12 years of experience in game development, as well as participation in successful projects for social networks, mobile platforms and PC.</p>
        <p><span class="team__text_title">Key contributors: </span>Programmers, game designers, artists, blockchain specialists and QA who will ensure high performance and game security for many years.</p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import '/static/styles/mixins.scss';
  .team {
    position: relative;
    height: 100vh;

    &__content {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
    }

    &__content_inner {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 600px;
      backdrop-filter: blur(5px);
      background: #00000098;

      @include media-breakpoint-up(md) {
        padding: 30px;
        border-radius: 50px;
      }

      @include media-breakpoint-between(sm, md) {
        padding: 25px;
        border-radius: 40px;
      }

      @include media-breakpoint-down(md) {
        padding: 20px;
        border-radius: 30px;
      }
    }

    &__title {
      font-weight: 700;
      text-shadow: 0 0 10px #000;
      color: #ffffff;

      @include media-breakpoint-up(md) {
        font-size: 46px;
      }

      @include media-breakpoint-between(sm, md) {
        font-size: 36px;
      }

      @include media-breakpoint-down(md) {
        font-size: 30px;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: #ffffff;

      @include media-breakpoint-up(md) {
        font-size: 30px;
      }

      @include media-breakpoint-between(sm, md) {
        font-size: 26px;
      }

      @include media-breakpoint-down(md) {
        font-size: 24px;
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