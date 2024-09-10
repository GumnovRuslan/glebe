<script>
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";
</script>

<div class="wrapper">
  <Header/>
  <main class="main">
    <slot />
  </main> 
  <Footer/>
</div>


<style>
  .wrapper {
    position: relative;
  }
</style>