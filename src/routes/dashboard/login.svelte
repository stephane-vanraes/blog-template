<script>
  import { goto } from "$app/navigation";

  import { session } from "$app/stores";

  import Button from "$lib/components/Button.svelte";
  import TextField from "$lib/components/TextField.svelte";

  let password = "";
  let username = "";

  async function handleSubmit() {
    fetch("/dashboard/auth.json", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(res => session.update(s => ({ ...s, isAuthorized: res.ok })));
  }

  $: $session.isAuthorized && goto("/dashboard");
</script>

<form on:submit|preventDefault={handleSubmit} autocomplete="off">
  <TextField label="username" bind:value={username} name="username" />
  <TextField
    label="password"
    bind:value={password}
    name="password"
    type="password"
  />
  <Button>Login</Button>
</form>

<style>
  form > :global(* + *) {
    margin-top: 1em;
  }
</style>
