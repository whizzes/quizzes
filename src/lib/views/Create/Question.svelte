<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import View from '$lib/components/View.svelte';
  import {constants} from '../../constants'

  let question = '';
  let questionNumb = 0;
  let questionEntries = JSON.parse(localStorage.getItem(constants.questionsLt) as string);

  if (questionEntries == null) questionEntries = [];
  questionNumb = questionEntries.length + 1;

  function handleSubmit() {
    questionEntries.push(question);
    localStorage.setItem(constants.questionsLt, JSON.stringify(questionEntries));
    questionNumb = questionNumb + 1;
    question = '';
  }

  function startQuiz() {
    if(question) questionEntries.push(question) && localStorage.setItem(constants.questionsLt, JSON.stringify(questionEntries));
    
    sessionStorage.setItem(constants.questionSt, questionEntries[0]);
  }
</script>

<View>
  <Card>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="flex text-xl font-extrabold text-left pt-10">
        <p class="text-gray-700 mt-5 py-5 mr-5">
          {questionNumb}.
        </p>
        <input
          type="text"
          class="mt-5 py-5 rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="Question"
          placeholder={constants.addQuestion}
          bind:value={question}
        />
      </div>

      <div class="pt-20">
        <button
          type="submit"
          class="w-full max-w-2/3 py-4 px-4 text-white
        {!question
            ? 'bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300'
            : 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600'}
        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300
        dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 text-center mr-2 mb-2"
          disabled={!question}
        >
         {constants.addQuestion}
        </button>
        <button
          type="button"
          class="w-full max-w-2/3 py-4 px-4 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-lg px-5 text-center mr-2 mb-2"
          on:click={startQuiz}
        >
          {constants.completed}
        </button>
      </div>
    </form>
  </Card>
</View>
