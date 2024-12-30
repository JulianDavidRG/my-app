<script>
  export let data;
  import { perros } from './perros';
  import { goto } from '$app/navigation';

  let value = 0;

  function search() {
    goto(`/razas?nombre=${value}`);
  }
</script>

<main class="min-h-screen bg-gray-100 py-12">
  <div class="container mx-auto text-center">

    <div class="mb-8">
      <img
        src={data.props.jsonRaw.message[0]}
        alt="Perro"
        class="mx-auto rounded-lg shadow-lg w-64 h-64 object-cover "
      /> 
    </div>

    <div class="mb-6">
      <select
        bind:value={value}
        class="w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {#each perros as raza, indice}
          <option value={indice}>{raza}</option>
        {/each}
      </select>
    </div>


    <button
      on:click={search}
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-lg shadow-md transition duration-300"
    >
      Buscar
    </button>
  </div>
</main>
