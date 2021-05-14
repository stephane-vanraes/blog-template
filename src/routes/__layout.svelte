<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";

  import "../app.css";
</script>

<Header />
<main><slot /></main>
<Footer />

<style>
  main {
    flex: 1 0;
    max-width: 1400px;
    padding: 1em;
    width: 100%;
  }
</style>
