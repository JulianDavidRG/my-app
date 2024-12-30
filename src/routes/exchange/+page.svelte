<script>
    export let data;
    import { goto } from '$app/navigation';
  
    let value = 0;
    let value2 = 0;
    let cambio = null
    let valor = 2
  
    function search() {
      goto(`/exchange?nombre=${value}`);
    }
    async function exchange () {
      try{
        const response = await fetch (`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${value}.json`);
        if (!response.ok){
          throw new error ('error');

        }
        const result = await response.json();
        cambio = result[value] [value2]  
        console.log (cambio);
      } catch (error){
      console.error ('érror;', error);
      }
    }
    $: (value && value2) && exchange();

    $: calculo = valor*7;
    console.log (calculo)

  </script>
  
  <main class="min-h-screen bg-gray-100 py-12">
    <div class="container mx-auto text-center">
      <div>la tasa de cambio es de {cambio} {data.props.jsonRaw[value2]} a un {data.props.jsonRaw[value]}</div>
      <div class="mb-6">
        <select
          bind:value={value}
          class="w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {#each Object.keys(data.props.jsonRaw) as currency}
            <option value={currency}>{data.props.jsonRaw[currency]}</option>
          {/each}
        </select>

        <select
        bind:value={value2}
        class="w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {#each Object.keys(data.props.jsonRaw) as currency}
          <option value={currency}>{data.props.jsonRaw[currency]}</option>
        {/each}
      </select>
      </div>
    </div>
  </main>
  