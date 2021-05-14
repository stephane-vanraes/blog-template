<script context="module">
  export async function load({ session }) {
    if (!session.isAuthorized) {
      return {
        status: 302,
        redirect: "/dashboard/login",
      };
    }

    return {
      status: 200,
    };
  }
</script>

<slot />
