<script>
  import { onMount } from "svelte";

  onMount(() => {
    window.addEventListener('scroll', (e) => {
      e.preventDefault()
      console.log(e.currentTarget)
      
    })
    
  })
</script>

<section class="scrolling">
  <div class="scrolling__inner">
    <div class="scrolling__card">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, dolores quod quidem nam cumque laudantium fugit nesciunt maxime consequatur at minima sequi. Vel, autem facere quas a obcaecati neque culpa.
    </div>
    <div class="scrolling__card">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, dolores quod quidem nam cumque laudantium fugit nesciunt maxime consequatur at minima sequi. Vel, autem facere quas a obcaecati neque culpa.
    </div>
    <div class="scrolling__card">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, dolores quod quidem nam cumque laudantium fugit nesciunt maxime consequatur at minima sequi. Vel, autem facere quas a obcaecati neque culpa.
    </div>
    <div class="scrolling__card">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, dolores quod quidem nam cumque laudantium fugit nesciunt maxime consequatur at minima sequi. Vel, autem facere quas a obcaecati neque culpa.
    </div>
    <div class="scrolling__card">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, dolores quod quidem nam cumque laudantium fugit nesciunt maxime consequatur at minima sequi. Vel, autem facere quas a obcaecati neque culpa.
    </div>
    <div class="scrolling__card">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, dolores quod quidem nam cumque laudantium fugit nesciunt maxime consequatur at minima sequi. Vel, autem facere quas a obcaecati neque culpa.
    </div>
  </div>
</section>

<style lang="scss">
  .scrolling {
    position: relative;
    

    &__inner {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 100px;
      min-height: 100vh;
      background: #000;
    }

    &__card {
      position: sticky;
      top: 0;
      max-width: 400px;
      font-size: 30px;
      line-height: 40px;
      color: #fff;
    }
  }
</style>