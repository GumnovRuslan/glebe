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


<style>
  .wrapper {
    position: relative;
  }
</style>