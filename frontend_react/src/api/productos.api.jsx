import axios from "axios"

const productossaApi = axios.create({
        baseURL: `${import.meta.env.VITE_APP_API_URL}/api/v1`
})


export const productosCreate = async (body) => {  
    let formData = new FormData()  
    formData.append('codigo', body.form.codigo)  
    formData.append('nombre', body.form.nombre)   
    formData.append('caracteristicas', body.form.caracteristicas)
    formData.append('precio_en_moneda', body.form.precio_en_moneda)
    formData.append('empresa', body.form.empresa)
    formData.append('categorias',body.form.categorias)
                        
    const request = await productossaApi.post(`/productos/`, formData, {
        headers:  body.headers,
        params: body.params
    })    
    const response = request.data

    return response    
}