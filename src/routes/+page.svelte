<script lang="ts">
  import { onMount } from 'svelte';
  import Router from 'svelte-spa-router';

  import Create from '$lib/views/Create/Create.svelte';
  import Home from '$lib/views/Home.svelte';
  import NotFound from '$lib/views/NotFound.svelte';
  import Question from '$lib/views/Create/Question.svelte';
  import Quiz from '$lib/views/Quiz/Quiz.svelte';
  import { quizStore } from '$lib/stores/QuizStore';
  import Congrats from '$lib/views/Congrats/Congrats.svelte';

  const routes = {
    '/': Home,
    '/create': Create,
    '/create/:id/question': Question,
    '/quiz/:id': Quiz,
    '/congrats': Congrats,
    // Catch-all, must be last
    '*': NotFound
  };

  onMount(() => {
    quizStore.load();
  });
</script>

<body>
  <Router {routes} />
</body>
