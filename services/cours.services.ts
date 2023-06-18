
export const getCours = async() => {
    const cours = await fetch('http://localhost:4000/cours/obtenercursos/');
    const data = await cours.json();
    return data;
}

export const getCourId = async(id:any) => {
    const cours = await fetch('http://localhost:4000/cours/obtenercurso/'+id);
    const data = await cours.json();
    return data;
}


/**
 * 
 * Creamos la data cursos
 */

export const crearDataCursos = async(body:any) => {
    const bodyForma = JSON.stringify(body);
    const cours = await fetch('http://localhost:4000/cours/create', {
        method: 'POST', 
        body: bodyForma,
        headers:{
            'Content-Type': 'application/json'
        }
    });
    const data = await cours.json();
    return data;
}


/**
 * 
 * Creamos la data Usuarios
 */

export const crearDataUsuarios = async(body:any) => {
    const bodyForma = JSON.stringify(body);
    const cours = await fetch('http://localhost:4000/users/create', {
        method: 'POST', 
        body: bodyForma,
        headers:{
            'Content-Type': 'application/json'
        }
    });
    const data = await cours.json();
    return data;
}
