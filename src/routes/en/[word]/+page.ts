import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const word = params.word.toLowerCase();
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  const response = await fetch(url);
  if (!response.ok) {
    return { error: ',ya que la palabra solicitada no se encuentra en la base de datos', titulo: `${word} No encontrada`}; //no se enconto la palabra
  }
  
  try {
    const jsonRaw = await response.json();
    return { props: { jsonRaw } }; 
  } catch (e) { 
    return { error: 'Error parseando la respuesta', titulo:'error'} ;
 //   throw error(500, `Error processing request for '${word}': ${e.message}`); // si no es un json
  }
}
