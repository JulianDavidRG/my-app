<script>
    import { goto } from '$app/navigation';
    let query = '';
  
    function search() {
      if (query.trim() !== '') {
        goto(`/title/${query}`);
      }
    }
  </script>
  

    <div class="container mx-auto">

      <h1 class="text-4xl font-bold text-center mb-8 text-gray-800">Buscar Libro</h1>

      <div class="flex justify-center">
        <div class="flex items-center bg-white shadow-md rounded-lg w-full max-w-md">

          <input
            type="text"
            bind:value={query}
            placeholder="Ingrese el título del libro..."
            on:keyup={event => event.key === 'Enter' && search()}
            class="flex-grow px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-lg"
          />

          <button
            on:click={search}
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition-all duration-300"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  <slot/>
  