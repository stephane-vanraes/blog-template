<script>
  export let disabled;
</script>

<button on:click {disabled}><slot /></button>

<style>
  button {
    background-color: white;
    border: 2px solid var(--primary--100);
    border-radius: 1em / 50%;
    padding: 0.25em 1em;
  }
  button:active,
  button:focus,
  button:hover {
    background-color: var(--primary--100);
    color: white;
  }
  button:disabled {
    background-color: #aaa;
    color: black;
  }
</style>
