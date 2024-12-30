import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const title = params.books;
  const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`;

  const response = await fetch(url);
  if (!response.ok) {
    return { error: 'ya que el libro solicitado no se encuentra en la base de datos', titulo: `${title} No encontrada`}; //no se enconto la palabra
  }
  
  try {
    const jsonRaw = await response.json();

    return { props: { jsonRaw } }; 
  } catch (e) { 
    return { error: 'Error parseando la respuesta', titulo:'error'} ;
 //   throw error(500, `Error processing request for '${word}': ${e.message}`); // si no es un json
  }
}
