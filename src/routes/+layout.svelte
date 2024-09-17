<script>
  import Header from "../lib/components/Header.svelte";
  import Footer from "../lib/components/Footer.svelte";
</script>

<div class="wrapper">
  <Header/>
  <main class="main">
    <slot />
  </main> 
  <Footer/>
</div>


<style lang="scss">
  @import '/static/styles/mixins.scss';
  .wrapper {
    position: relative;
  }

  :global(section) {
    position: relative;

    @include media-breakpoint-up(xl) {
      padding: 90px 50px;
    } 

    @include media-breakpoint-between(lg, xl) {
      padding: 90px 40px;
    } 

    @include media-breakpoint-between(md, lg) {
      padding: 90px 30px;
    } 

    @include media-breakpoint-down(md) {
      padding: 90px 15px;
    } 
  } 
</style>