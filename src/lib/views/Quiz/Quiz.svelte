<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import View from '$lib/components/View.svelte';
  import { quizStore } from '$lib/stores/QuizStore';
  import { constants } from '$lib/constants';

  import type { Question, Quiz } from '$lib/types';
  import { onMount } from 'svelte';

  // The params prop contains values matched from the URL
  export let params: { id: string } = { id: '' };

  let currentQuestion: Question = { question: '', image: '' };
  let currentNumb = 1;
  let quiz: Quiz;
  let questionEntries: Question[] = [];

  onMount(() => {
    quiz = quizStore.findQuiz(params.id);
    currentQuestion = quiz.questions[0];
    questionEntries = quiz.questions;
    if (questionEntries == null) questionEntries = [];
  });

  function getLastQuestion() {
    currentNumb = currentNumb - 1;
    currentQuestion = questionEntries[currentNumb - 1];
  }

  function getNextQuestion() {
    currentNumb = currentNumb + 1;
    currentQuestion = questionEntries[currentNumb - 1];
  }

  function finishQuiz() {
    if(currentNumb === questionEntries.length - 1) window.location.href = '/#/congrats';
    window.location.href = '/';
  }

</script>

<View>
  <Card>
    <div class="grid grid-rows-[8vh_10vh_minmax(40vh,_60vh)_1vh_7vh_7vh]">
      <div
        class="row-start-1 lg:text-5xl sm:text-3xl text-3xl font-extrabold text-center"
      >
        <h2
          class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
        >
          {quiz && quiz.title}
        </h2>
      </div>

      <div
        class="flex text-xl font-extrabold text-left {currentQuestion.image ===
        'string'
          ? 'row-start-3'
          : 'row-start-2'} "
      >
        <p class="text-gray-700 py-5 mr-5">
          {currentNumb}.{currentQuestion.question}
        </p>
      </div>

      {#if typeof currentQuestion.image === 'string'}
        <div class="flex justify-center row-start-3 row-span-1 items-center">
          <img class="m-auto" src={currentQuestion.image} alt="Preview" />
        </div>
      {/if}

      <div />

      <div class="flex row-start-5 row-span-1 mx-auto">
        <div class="flex items-center">
          <button
            type="button"
            on:click={getLastQuestion}
            disabled={currentNumb === 1 && true}
            class="w-full p-4 text-base text-gray-600 bg-white border-y border-l rounded-l-xl hover:bg-gray-100"
          >
            <svg
              width="9"
              fill="currentColor"
              height="8"
              class=""
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"
              />
            </svg>
          </button>

          <button
            type="button"
            class="w-full px-4 py-2 text-base text-indigo-500 bg-white border-y hover:bg-gray-100"
          >
            1
          </button>
          <button
            type="button"
            disabled
            class="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
          >
            _____
          </button>
          <button
            type="button"
            class="w-full px-4 py-2 text-base text-gray-600 bg-white border-y hover:bg-gray-100"
          >
            {questionEntries.length - 1}
          </button>
          <button
            on:click={getNextQuestion}
            type="button"
            disabled={currentNumb === questionEntries.length - 1 && true}
            class="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
          >
            <svg
              width="9"
              fill="currentColor"
              height="8"
              class=""
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="row-start-6 h-full">
        <button
          type="button"
          class="w-full flex max-w-[200px] mx-auto justify-center items-center bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
          on:click={finishQuiz}
        >
          Finalizar
        </button>
      </div>
    </div>
  </Card>
</View>
