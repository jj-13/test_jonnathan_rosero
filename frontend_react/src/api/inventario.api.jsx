import axios from "axios"

const inventarioApi = axios.create({
        baseURL: `${import.meta.env.VITE_APP_API_URL}/api/v1`
})


/* export const empresaCreate = async (body) => {  
    let formData = new FormData()  
    formData.append('nit', body.form.nit)  
    formData.append('nombre', body.form.nombre)   
    formData.append('direccion', body.form.direccion)
    formData.append('telefono', body.form.telefono)
                           
    const request = await empresaApi.post(`/empresas/`, formData, {
        headers:  body.headers,
        params: body.params
    })    
    const response = request.data

    return response    
} */

export const getInventario = async (body) => {
    const request = await inventarioApi.get('/inventario/', body.headers)
    const response = request.data
    const inventarioObject = {}
    const data = []
    response.forEach(category => {
        data.push({
            producto: category.producto,
            cantidad: category.cantidad
        })
    });
    //console.log(request.status)
    //console.log(response)
    inventarioObject.data = data    
    //localStorage.setItem('empresas', JSON.stringify(empresasObject))
    console.log(inventarioObject)
    return inventarioObject
}