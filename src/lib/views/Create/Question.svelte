<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import View from '$lib/components/View.svelte';
  import { constants } from '$lib/constants'
  import { encodeBase64 } from '$lib/utils/b64';

  import type { Question } from '$lib/types';

  let question = '';
  let questionNumb = 0;
  let questionEntries: Question[] = JSON.parse(
    localStorage.getItem('Questions') as string
  );
  let inputEl: HTMLInputElement | null = null;
  let activeImage: string | undefined;

  if (questionEntries == null) questionEntries = [];
  questionNumb = questionEntries.length + 1;

  function handleSubmit() {

    questionEntries.push({
      question,
      image: activeImage
    });
    localStorage.setItem('Questions', JSON.stringify(questionEntries));
    questionNumb = questionNumb + 1;
    question = '';
    activeImage = undefined;
  }

  async function handleInputFileChange() {
    const file = inputEl?.files?.[0];

    if (!file) {
      return null;
    }

    const base64 = await encodeBase64(file);

    activeImage = base64;
  }

  function startQuiz() {
    //TODO: check
    //if(question) questionEntries.push(question) && localStorage.setItem(constants.questionsLt, JSON.stringify(questionEntries)); 
    //sessionStorage.setItem(constants.questionSt, questionEntries[0]);
    
    localStorage.setItem('Questions', JSON.stringify(questionEntries));
  }
</script>

<View>
  <Card>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="flex text-xl font-extrabold text-left pt-10">
        <div class="flex flex-col items-center justify-center space-y-4 w-full">
          <div class="flex items-center justify-center w-full">
            <p class="text-gray-700 pr-4">
              {questionNumb}.
            </p>
            <input
              type="text"
              class="w-full py-5 rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="Question"
              placeholder={constants.addQuestion}
              bind:value={question}
            />
          </div>
          <button
            class="cursor-pointer border p-4 w-full rounded-lg text-center text-gray-700 text-md"
            type="button"
            on:click={() => inputEl?.click()}
          >
            {#if typeof activeImage === 'string'}
              <img src={activeImage} alt="Preview" />
            {:else}
              <strong>{constants.addImg}</strong>
            {/if}
          </button>
          <input
            hidden
            type="file"
            class="mt-5 py-5 rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="File"
            on:change={handleInputFileChange}
            bind:this={inputEl}
          />
        </div>
      </div>

      <div class="pt-20">
        <button
          type="submit"
          class="w-full max-w-2/3 py-4 px-4 text-white
        {question
            ? 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600'
            : 'bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300'}
        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300
        dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 text-center mr-2 mb-2"
          disabled={!question }
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
