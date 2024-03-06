import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectEmpresas } from "../../Store/Selector"
import { empresas } from "../../Store/EmpresasSlice"


function getAcces(){
    let access = localStorage.getItem('login')

    if(access){
        access = JSON.parse(access)
        //console.log(blogs)
    }
    else{
        access = null
    }
    return access
}

export const TablaEmpresas = () => {
    const dispatch = useDispatch() 
    const [access, setAccess] = useState(getAcces())
    const empresasObject = useSelector(selectEmpresas)
    

    useEffect(()=>{
        const body = {
                              
            headers: {                                    
                'Accept': 'application/json',  
                'Content-Type': 'multipart/form-data', // Agrega el encabezado Content-Type: application/json 
                'Authorization': `JWT ${access.data[0].access}`
            }
        } 
        dispatch(empresas(body))
        
    },[])

    

    return (
        <>
        {
            access&&access ?
            <Link to={'/empresa'} className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Crear Empresa</Link>
            :
            <></>
        }       
            
            <h1 className="font-bold text-4xl text-gray-900 pb-4">Empresas</h1>
            
            <div className="container mx-auto mt-10">
                <table className="min-w-full bg-white border border-gray-300" id="my-table">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">NIT</th>
                        <th className="py-2 px-4 border-b">Nombre</th>
                        <th className="py-2 px-4 border-b">Dirección</th>                    
                        <th className="py-2 px-4 border-b">Teléfono</th>                    
                    </tr>
                    </thead>
                    <tbody>
                        
                    {empresasObject&&empresasObject ?
                    
                        empresasObject.map((row) => (
                        <tr className="py-2 px-4 border-b" key={row.nit}>
                            <td>{row.nit}</td>
                            <td>{row.nombre}</td>
                            <td>{row.direccion}</td>
                            <td>{row.telefono}</td>
                        </tr>
                        ))
                        :
                        <>No hay registros de empresas.</>
                    }
                    </tbody>
                </table>
            </div>

            
        </>
  )
}
