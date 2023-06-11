<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import View from '$lib/components/View.svelte';

  function comeBack() {
    window.location.href = '/';
  }

</script>

<View>
  <Card>
    <div class="grid grid-rows-[10vh_10vh_minmax(20vh,_40vh)_7vh_7vh]">
      <div
        class="row-start-1 lg:text-5xl sm:text-3xl text-3xl font-extrabold text-center"
      >
        <p
          class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
        >
          ¡Felicitaciones por completar el Quiz!
        </p>
      </div>

      <p>
        ¡Lo lograste! Has superado nuestro desafiante quiz de práctica y eso
        merece un gran aplauso. Queremos felicitarte por tu dedicación y
        esfuerzo al prepararte para tus futuros exámenes.
      </p>

      <img
        alt="Quiz-books-study-girl"
        class="h-auto max-h-[360px] max-w-full rounded-full m-auto"
        src="https://cdn.shopify.com/s/files/1/0754/5123/products/5796d009133ed42dea65331f6293cd9e_1024x1024.png?v=1535667531"
      />
      
      <p class="text-center">
        Te deseamos ¡Mucho exito en tu futuro brillante! 👏👏🥳
      </p>


      <p class="text-center italic font-semibold text-xl">
        "Cada logro comienza con la decisión de intentarlo - Gail Denvers"
      </p>

    
      <div class="row-start-5 h-full">
        <button
          type="button"
          class="w-full flex max-w-[200px] mx-auto justify-center items-center bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
          on:click={comeBack}
        >
          Regresa a inicio 📚
        </button>
      </div>
    </div>
  </Card>
</View>
