<script>
  export let disabled;
  export let label;
  export let name;
  export let type = "text";
  export let value;
</script>

{#if type == "password"}
  <label>
    <span>{label}</span>
    <input type="password" {name} {disabled} bind:value />
  </label>
{:else}
  <label>
    <span>{label}</span>
    <input type="text" {name} {disabled} bind:value />
  </label>
{/if}

<style>
  label {
    display: flex;
    flex-direction: column;
    max-width: 30ch;
  }

  span {
    align-items: flex-end;
    display: flex;
    gap: 1em;
    margin-bottom: 0.25em;
  }
  span:after {
    background-color: currentColor;
    content: "";
    flex: 1 0;
    gap: 1em;
    margin-bottom: -0.25em;
    height: 0.25em;
  }
  input {
    background-color: white;
    border: 1px solid currentColor;
    border-radius: 0;
    color: var(--primary--200);
    padding: 0.25em 1em;
  }
  input:active,
  input:focus,
  input:hover {
    background-color: var(--primary--600);
    color: var(--primary--100);
  }
</style>
