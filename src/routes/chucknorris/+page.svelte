<script>
	const url = `https://api.chucknorris.io/jokes/random`;

	export let data;
	//import { goto } from '$app/navigation';
	function reload() {
		fetch(url);
	//	goto(`/chucknorris/`,{invalidateAll: true });
	//	 location.reload();
	}
</script>

<main class="min-h-screen bg-gray-100 py-12">
	<div class="container mx-auto text-center">

<div>
	<p class = "font-bold text-center">Jokes: {data.props.jsonRaw.value}</p>
</div>
<button
	on:click={reload}
	class=" font-bold text-lg rounded bg-blue-700 px-7 py-4 text-white transition-all duration-500 hover:bg-blue-600"
>
	Buscar
</button>
</div>

</main>
