<script context="module">
  export async function load({ fetch, page }) {
    const { slug } = page.params;

    const content = await fetch(`/${slug}.json`).then(res => res.json());

    return {
      props: {
        slug,
        ...content.post,
      },
    };
  }
</script>

<script>
  import { goto } from "$app/navigation";

  import Button from "$lib/components/Button.svelte";
  import TextField from "$lib/components/TextField.svelte";

  export let slug = "";
  export let markdown = "";
  export let tags = "";
  export let title = "";

  $: saveDisabled = markdown.length === 0 || title.length === 0;

  async function handleDelete(ev) {
    ev.preventDefault();
    await fetch(`${slug}.json`, {
      method: "DELETE",
    }).then(_ => goto("/dashboard"));
  }
  async function handleCancel() {
    goto("/dashboard");
  }
  async function handleSave() {
    const method = slug.length === 0 ? "POST" : "PUT";
    const path = slug.length === 0 ? "index" : slug;

    await fetch(`/dashboard/write/${path}.json`, {
      method,
      body: JSON.stringify({
        title,
        tags,
        markdown,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(_ => goto("/dashboard"));
  }
</script>

<div class="buttons">
  <Button on:click={handleSave} disabled={saveDisabled}>Save</Button>
  <Button on:click={handleCancel}>Cancel</Button>
  {#if slug.startsWith("blog")}
    <Button on:click={handleDelete}>Delete</Button>
  {/if}
</div>

<div class="fields">
  <TextField label="Title" bind:value={title} />
  <TextField label="Tags" bind:value={tags} />
</div>

<textarea bind:value={markdown} />

<style>
  .buttons {
    border-bottom: 2px solid var(--primary--200);
    display: flex;
    gap: 1em;
    justify-content: center;
    margin-bottom: 1em;
    padding-bottom: 1em;
  }
  .fields {
    border-bottom: 2px solid var(--primary--200);
    margin-bottom: 1em;
    padding-bottom: 1em;
  }
  textarea {
    border: 2px solid var(--primary--200);
    resize: vertical;
    flex: 1 0;
    min-height: 400px;
    padding: 0.5em;
    width: 100%;
  }
</style>
