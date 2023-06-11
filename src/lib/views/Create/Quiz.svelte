<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import View from '$lib/components/View.svelte';
  //import { shuffle } from '$lib//utils/shuffle'
  import {constants} from '../../constants';
  //import { onMount } from 'svelte';

  let quiz = {question: "", image: ""};
  let currentNumb = 1;
  let questionEntries = JSON.parse(localStorage.getItem(constants.questionsLt) as string);
  
  
  // onMount(() => {
  //   shuffle(questionEntries)
  //   if(sessionStorage.getItem(constants.questionSt)){
  //     question = sessionStorage.getItem(constants.questionSt)
  //   } else {
  //     question = questionEntries[0]
  //   }
  //   JSON.parse(sessionStorage.setItem(constants.questionSt, questionEntries[0]) as unknown as string);
	// 	//const res = localStorage
	// });
  
  if (questionEntries == null) questionEntries = [];

  function getLastQuestion() {
    currentNumb = currentNumb - 1
    quiz = questionEntries[currentNumb - 1]
  }

  function getNextQuestion() {
    currentNumb = currentNumb + 1
    quiz = questionEntries[currentNumb - 1]
  }

</script>

<View>
  <Card>
    <div class="flex text-xl font-extrabold text-left pt-10">
      <p class="text-gray-700 mt-5 py-5 mr-5">
        {currentNumb}.{quiz.question}
        {#if typeof quiz.image === 'string'}
          <img src={quiz.image} alt="Preview" />
        {/if}
      </p>
    </div>

    <div/>

    <div class="bottom-0 ">
      <div class="flex items-center ">
        <button type="button" on:click={getLastQuestion}  class="w-full p-4 {currentNumb === 1 && 'hidden'} text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
          <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
            </path>
          </svg>
        </button>
        
        <button type="button" class="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t {currentNumb === 1 && 'rounded-l-xl border'}  border-b hover:bg-gray-100 ">
          1
        </button>
        <button type="button" disabled class="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100">
          _____
        </button>
        <button type="button" class="w-full px-4 {currentNumb === questionEntries.length - 1 && 'rounded-r-xl border'} py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
          {questionEntries.length - 1}
        </button>
        <button on:click={getNextQuestion} type="button" class="w-full  {currentNumb === questionEntries.length - 1 && 'hidden'} p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
          <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
            </path>
          </svg>
        </button>
      </div>
    </div>
    </Card>
  </View>
  