<script context="module">
  export async function load({ fetch }) {
    const data = await fetch("/index.json").then(res => res.json());
    return {
      props: {
        ...data,
      },
    };
  }
</script>

<script>
  import Article from "$lib/components/Article.svelte";
  import ArticleList from "$lib/components/ArticleList.svelte";

  export let frontpage = "";
  export let latestPosts = [];
</script>

<Article {...frontpage} />
<ArticleList title="Latests posts" posts={latestPosts} />
