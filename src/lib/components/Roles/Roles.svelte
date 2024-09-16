<script>
  import RolesCard from "./RolesCard.svelte";
  import Title from "../Title.svelte";
</script>

<section class="roles">
  <div class="roles__inner">
    <Title text='Lorem ipsum dolor sit amet consectetur adipisicing elit.'/>

    <div class="roles__cards">
      <RolesCard/>
      <RolesCard/>
      <RolesCard/>
      <RolesCard/>
    </div>
  </div>
</section>

<style lang="scss">
  .roles {
    height: 100vh;
    padding: 100px 60px;

    &__inner {
      display: flex;
      flex-direction: column;
      gap: 50px;
      height: 100%;
    }

    &__title {
      font-size: 40px;
      text-align: center;
      color: #fff;
    }

    &__cards {
      display: grid;
      grid-template-columns: repeat(2, 500px);
      grid-template-rows: repeat(2, 300px);
      align-content: center;
      justify-content: center;
      gap: 40px;
      height: 100%;
    }
  }
</style>