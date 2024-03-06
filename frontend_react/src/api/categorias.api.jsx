import axios from "axios"

const categoriasaApi = axios.create({
        baseURL: `${import.meta.env.VITE_APP_API_URL}/api/v1`
})


/* export const empresaCreate = async (body) => {  
    let formData = new FormData()  
    formData.append('nit', body.form.nit)  
    formData.append('nombre', body.form.nombre)   
    formData.append('direccion', body.form.direccion)
    formData.append('telefono', body.form.telefono)
                           
    const request = await categoriasaApi.post(`/categorias/`, formData, {
        headers:  body.headers,
        params: body.params
    })    
    const response = request.data

    return response    
} */

export const getCategorias = async (body) => {
    const request = await categoriasaApi.get('/categorias/', body.headers)
    const response = request.data
    const categoriasObject = {}
    const data = []
    response.forEach(category => {
        data.push({
            id: category.id,
            nombre: category.nombre
        })
    });
    //console.log(request.status)
    //console.log(response)
    categoriasObject.data = data    
    //localStorage.setItem('empresas', JSON.stringify(empresasObject))
    console.log(categoriasObject)
    return categoriasObject
}