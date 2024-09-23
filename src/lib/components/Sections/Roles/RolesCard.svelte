<script>
  export let front = {src: '', title: ''}
  export let back = {title: '', text: ''}

  let isOpen = false 
</script>

<button type="button" class="card {isOpen && 'card--active'}" on:click={() => isOpen = !isOpen}>
  <div class="card__inner">
    <div class="card__side card__front" style="background-image: url({front.src})">
      <h3 class="card__title">{front.title}</h3>
    </div>
    <div class="card__side card__back">
      <h3 class="card__title">{back.title}</h3>
      <p class="card__text">{back.text}</p>
    </div>
  </div>
</button>

<style lang="scss">
@import '/static/styles/mixins.scss';
.card {
  padding: 10px;
  width: 100%;
  height: 100%;
  border: none;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  cursor: pointer;
  background: transparent;

  &:hover {
    @include media-breakpoint-up(lg) {
      .card__inner {
        transform: rotateX(180deg);
        -webkit-transform: rotateX(180deg);
      }
    }
  }

  &--active {
    @include media-breakpoint-down(lg) {
      .card__inner {
        transform: rotateX(180deg);
        -webkit-transform: rotateX(180deg);
      }
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
      padding: 20px 15px;
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
      gap: 20px;
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
    @include media-breakpoint-up(xl) {
      font-size: 22px;
      line-height: 28px;
      text-align: justify;
    }

    @include media-breakpoint-between(lg, xl) {
      font-size: 20px;
      line-height: 24px;
      text-align: justify;
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