
export async function load({ url:origen }) {
  
  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`;
  
  
  const response = await fetch(url);
  if (!response.ok) {
    return { error: 'ya que la palabra solicitada no se encuentra en la base de datos', titulo: `${currency} No encontrada`}; //no se enconto la palabra
  }
  
  try {
    const jsonRaw = await response.json();
    return { props: { jsonRaw } }; 
  } catch (e) { 
    return { error: 'Error parseando la respuesta', titulo:'error'} ;
  }
}