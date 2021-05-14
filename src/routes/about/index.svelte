<script context="module">
  export async function load({ fetch }) {
    const content = await fetch("./about.json").then(res => res.json());
    return {
      props: {
        content,
      },
    };
  }
</script>

<script>
  import Article from "$lib/components/Article.svelte";

  export let content = "";
</script>

<Article {...content} />
