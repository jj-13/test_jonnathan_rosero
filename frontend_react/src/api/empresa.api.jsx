import axios from "axios"

const empresaApi = axios.create({
        baseURL: `${import.meta.env.VITE_APP_API_URL}/api/v1`
})


export const empresaCreate = async (body) => {  
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
}

export const getEmpresas = async (body) => {
    const request = await empresaApi.get('/empresas/', body.headers)
    const response = request.data
    const empresasObject = {}
    const data = []
    response.forEach(category => {
        data.push({
            nit: category.nit,
            nombre: category.nombre,
            direccion: category.direccion,
            telefono: category.telefono
        })
    });
    //console.log(request.status)
    //console.log(response)
    empresasObject.data = data    
    //localStorage.setItem('empresas', JSON.stringify(empresasObject))
    //console.log(empresasObject)
    return empresasObject
}