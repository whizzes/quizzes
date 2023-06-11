<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import View from '$lib/components/View.svelte';
  import { shuffle } from '$lib//utils/shuffle'
  import {constants} from '../../constants';
  import { onMount } from 'svelte';

  onMount(() => {
		//const res = localStorage
	});

  let question = {textQ: "", imgQ: ""};
  let questionNumb = 0;
  let questionEntries = JSON.parse(localStorage.getItem(constants.questionsLt) as string);
  question = JSON.parse(sessionStorage.getItem(constants.questionSt) as string);

  if (questionEntries == null) questionEntries = [];
  questionNumb = questionEntries.length + 1;

  function getLastQuestion() {
    localStorage.setItem(constants.questionsLt, JSON.stringify(questionEntries));
  }

  function getNextQuestion() {
    localStorage.setItem(constants.questionsLt, JSON.stringify(questionEntries));
  }

</script>

<View>
  <Card>
    <div class="flex text-xl font-extrabold text-left pt-10">
      <p class="text-gray-700 mt-5 py-5 mr-5">
        {questionNumb}.{sessionStorage.getItem(constants.questionSt)}
      </p>
    </div>

    <div/>

    <div class="pt-20">
      <button
        type="submit"
        class="w-1/4"
        on:click={getLastQuestion}
      >
        {"<"}
      </button>
      <button
        type="button"
        class="w-1/4"
        on:click={getNextQuestion}
      >
      {">"}
      </button> 
    </div>
  </Card>
</View>
