import {perros} from './perros'
export async function load({ url:origen }) {
  const acceso = origen.searchParams.get("nombre");
  const indice = perros[ Number (acceso)];
  const url = `https://dog.ceo/api/breed/${indice}/images`;
  
  const response = await fetch(url);
  if (!response.ok) {
    return { error: 'ya que la palabra solicitada no se encuentra en la base de datos', titulo: `${indice} No encontrada`}; //no se enconto la palabra
  }
  
  try {
    const jsonRaw = await response.json();
    return { props: { jsonRaw } }; 
  } catch (e) { 
    return { error: 'Error parseando la respuesta', titulo:'error'} ;
  }
}