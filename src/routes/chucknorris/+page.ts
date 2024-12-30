export async function  load (){
    const url = `https://api.chucknorris.io/jokes/random`;

    
    const response = await fetch(url);
    if (!response.ok) {
        return {error: `No se consiguio el dato`};

    }
    try {
        const jsonRaw = await response.json();
        return {props: {jsonRaw}};
    } catch (e){
        return {error: `Error parseando la respuesta`}
    }
}