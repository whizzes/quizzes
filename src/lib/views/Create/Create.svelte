<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import View from '$lib/components/View.svelte';
  import { quizStore } from '$lib/stores/QuizStore';

  let title = '';

  async function handleCreate() {
    if (title) {
      const id = quizStore.create(title);
      quizStore.save();

      window.location.href = `/#/create/${id}/question`;
    }
  }

  function cancelCreation() {
    window.location.href = '/';
  }
</script>

<View>
  <Card>
    <div class="text-xl font-extrabold text-left pt-10">
      <label for="required-titulo" class="text-gray-700">
        Nuevo Quiz:
        <span class="text-red-500 required-dot"> * </span>
      </label>
      <input
        type="text"
        id="required-titulo"
        class="mt-5 py-5 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        name="title"
        placeholder="Ingresar Título"
        bind:value={title}
      />
    </div>

    <div class="pt-20">
      <button
        type="button"
        class="flex justify-center w-full max-w-2/3 py-4 px-4 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 text-center mr-2 mb-2"
        on:click={handleCreate}
      >
        Continuar
      </button>
      <button
        type="button"
        class="w-full max-w-2/3 py-4 px-4 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-lg px-5 text-center mr-2 mb-2"
        on:click={cancelCreation}
      >
        Cancelar
      </button>
    </div>
  </Card>
</View>
