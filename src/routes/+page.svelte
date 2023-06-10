<script lang="ts">
  import Router from 'svelte-spa-router';

  import Create from '$lib/views/Create/Create.svelte';
  import Home from '$lib/views/Home.svelte';
  import NotFound from '$lib/views/NotFound.svelte';
  import Question from '$lib/views/Create/Question.svelte';

  const routes = {
    '/': Home,
    '/create': Create,
    '/create/question': Question,
    // Catch-all, must be last
    '*': NotFound
  };
</script>

<body>
  <Router {routes} />
</body>
