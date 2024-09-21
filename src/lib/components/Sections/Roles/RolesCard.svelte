<script>
  export let front = {src: '', title: ''}
  export let back = {title: '', text: ''}
</script>

<div class="card">
  <div class="card__inner">
    <div class="card__side card__front" style="background-image: url({front.src})">
      <h3 class="card__title">{front.title}</h3>
    </div>
    <div class="card__side card__back">
      <h3 class="card__title">{back.title}</h3>
      <p class="card__text">{back.text}</p>
    </div>
  </div>
</div>

<style lang="scss">
@import '/static/styles/mixins.scss';
.card {
  padding: 10px;
  width: 100%;
  height: 100%;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    .card__inner {
      transform: rotateX(180deg);
      -webkit-transform: rotateX(180deg);
    }
  }

  &__inner {
    position: relative;
    height: 100%;
    width: 100%;
    -webkit-perspective: 1000px;
    perspective: 1000px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: all 800ms;
    transition: all 800ms;
    z-index: 20;
  }

  &__side {
    position: absolute;
    height: 100%;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 30px;
    background: #222;
    color: #fff;
    overflow: hidden;

    @include media-breakpoint-up(sm) {
      padding: 25px;
    }

    @include media-breakpoint-down(sm) {
      padding: 25px 15px;
    }
  }

  &__front {
    background-position: center;
    background-size: cover;
    color: #222;
  }

  &__back {
    display: flex;
    flex-direction: column;
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);

    @include media-breakpoint-up(lg) {
      gap: 30px;
    }

    @include media-breakpoint-down(lg) {
      gap: 15px;
    }
  }
  
  &__title {
    text-align: center;

    @include media-breakpoint-up(lg) {
      font-size: 35px;
    }

    @include media-breakpoint-down(lg) {
      font-size: 34px;
    }
  }

  &__text {
    @include media-breakpoint-up(lg) {
      font-size: 26px;
      line-height: 30px;
      letter-spacing: 1px;
    }

    @include media-breakpoint-between(sm, lg) {
      font-size: 22px;
      line-height: 28px;
      letter-spacing: 0.5px;
    }

    @include media-breakpoint-down(sm) {
      font-size: 22px;
      line-height: 24px;
      letter-spacing: 0.5px;
    }
  }
}
</style>