<script>
    export let data; 
</script>

{#if data.error}
  <p>{data.titulo}</p>
  <p>{data.error}</p>
{:else}

{#each data.props.jsonRaw.docs as element}
    <div>
      <p>Author: {element.author_name}</p>
      <p>First Published Year: {element.first_publish_year}</p>
      <p>Title: {element.title}</p>
    </div>
  {/each}
{/if}
