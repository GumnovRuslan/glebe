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
    padding: 25px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 30px;
    background: #222;
    color: #fff;
    overflow: hidden;
  }

  &__front {
    background-position: center;
    background-size: cover;
    color: #222;
  }

  &__back {
    display: flex;
    flex-direction: column;
    gap: 40px;
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
  }
  
  &__title {
    font-size: 35px;
    text-align: center;
  }

  &__text {
    font-size: 26px;
    line-height: 30px;
  }
}
</style>