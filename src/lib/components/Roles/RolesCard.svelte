<script>
  function handlerClick(e) {
    const target = e.currentTarget
    console.log(target)
  }
</script>

<label class="card">
  <input type="checkbox"  />
  <div class="card__inner">
    <div class="card__side card__front">
      <h3 class="card__title">Lorem ipsum dolor sit amet.</h3>
    </div>
    <div class="card__side card__back">
      <h3 class="card__title">Lorem ipsum dolor sit amet.</h3>
      <p class="card__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam unde voluptatem modi voluptatibus, incidunt officia consequuntur corporis? Saepe, voluptas facere?</p>
    </div>
  </div>
</label>

<style lang="scss">

.card {
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  cursor: pointer;

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
  }

  &__front {
    background-image: url('/images/Glebe_1.jpg');
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

  & input {
    display: none;

    &:checked + .card__inner {
      transform: rotateX(180deg);
      -webkit-transform: rotateX(180deg);
    }
  }
}
</style>