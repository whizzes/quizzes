<script lang="ts">
  import Router from 'svelte-spa-router';

  import NotFound from '$lib/components/NotFound.svelte';
  import Home from './index.svelte';
  import Create from './create/index.svelte';

  const routes = {
    '/': Home,
    '/create': Create,
    // Catch-all, must be last
    '*': NotFound
  };
</script>

<body>
  <Router {routes} />
</body>
