<script>
	import { error, json } from '@sveltejs/kit';
  export let data;

  import { goto } from '$app/navigation';
  let word = '';

  function search() {
    if (word.trim().toUpperCase() !== '') {
      goto(`/en/${word}`);
    }
  }

</script>
<main class="min-h-screen bg-gray-100 py-12">

  {#if data.error}
    <div class="definitions">{data.titulo} {data.error}</div>
  {:else}
    {#each data.props.jsonRaw as element}
      <div class="definitions">
        {#each element.meanings as meaning}
          <div>{meaning.partOfSpeech}</div>
          <div>
            {#each meaning.definitions as definition}
              <div>{definition.definition}</div>
            {/each}
          </div>
        {/each}
      </div>
    {/each}
  {/if}
</main>