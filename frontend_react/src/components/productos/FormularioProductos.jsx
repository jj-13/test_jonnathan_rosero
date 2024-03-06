import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { productosCreate } from '../../api/productos.api'
import CircleLoader from "react-spinners/CircleLoader"
import { selectEmpresas, selecCategorias } from "../../Store/Selector"
import { empresas } from "../../Store/EmpresasSlice"
import { categorias } from "../../Store/CategoriasSlice"


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


export const FormularioProductos = () => {

    const dispatch = useDispatch() 
    const navigate = useNavigate()
    const [access, setAccess] = useState(getAcces())
    const [loading, setLoading]=useState(false)  
    const empresasObject = useSelector(selectEmpresas)
    const categoriasObject = useSelector(selecCategorias)
    const {register, handleSubmit, trigger,
      formState:{errors}, watch, setValue, reset} = useForm()
    

    
      useEffect(()=>{
        const body = {
                              
            headers: {                                    
                'Accept': 'application/json',  
                'Content-Type': 'multipart/form-data', // Agrega el encabezado Content-Type: application/json 
                'Authorization': `JWT ${access.data[0].access}`
            }
        }   

        dispatch(empresas(body))
        dispatch(categorias(body))
        
       },[])
  
    const onSubmit = handleSubmit( (data) => {    
      //console.log('datos data: ',data)
     
        setLoading(true)
        const fetchData = async () => {
          try{          
              
              const body = { 
                  form: {
                    codigo: data.codigo,
                    nombre: data.nombre,
                    caracteristicas: data.caracteristicas,
                    precio_en_moneda: data.precio_en_moneda,             
                    empresa: data.empresa,         
                    categorias: data.categorias,         
                  },                            
                  headers: {                                    
                      'Accept': 'application/json',  
                      'Content-Type': 'application/json', 
                  }
              }
              //console.log(body)
              await productosCreate(body)
  
              setLoading(false)
              setValue('codigo','')
              setValue('nombre','')
              setValue('caracteristicas','')
              setValue('precio_en_moneda','')
              setValue('empresa','')
              setValue('categorias','')
              alert('Message has been send.')
              
          }
          catch (error){          
            //console.log("Error fetching data:", error)
            alert('Error sending Message.')
          }
          finally{
            //setLoading(false)
          }
        }  
        fetchData()
     
    })  

    

    return (
        <div className="w-full h-90 shadow-card rounded-lg p-5 overscroll-y-auto overflow-y-auto">
            {/*<div className="w-full h-auto shadow-card rounded-lg p-12 overscroll-y-auto overflow-y-auto">*/}            
            <h1 className="font-bold text-4xl text-gray-900 pb-4">Registrar Productos</h1>
            <form onSubmit={e=>onSubmit(e)} className="grid grid-cols-1 gap-y-6">
            <div>
                <label htmlFor="codigo" className="sr-only">
                    Código
                </label>
                <input
                    type="number"
                    name="codigo"                          
                    autoComplete="codigo"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="codigo"
                    {...register('codigo', {
                    required: {
                        value: true,
                        message: "es requerido"
                        }
                    })
                    }
                />
            </div>

            <div>
                <label htmlFor="nombre" className="sr-only">
                Nombre del producto
                </label>
                <input
                    type="text"
                    name="nombre"                          
                    autoComplete="nombre"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="nombre"
                    {...register('nombre', {
                    required: {
                        value: true,
                        message: "es requerido"
                        }
                    })
                    }
                />
            </div>            

            <div>
                <label htmlFor="caracteristicas"  className="sr-only">
                Características
                </label>
                <input
                    type="text"
                    name="caracteristicas"                          
                    autoComplete="caracteristicas"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="caracteristicas"
                    {...register('caracteristicas', {
                    required: {
                        value: true,
                        message: "es requerido"
                        }
                    })
                    }
                />
            </div>
            
            <div>
                <label htmlFor="precio_en_moneda" className="sr-only">
                Precio en varias monedas
                </label>
                <input
                    type="number"
                    name="precio_en_moneda"                          
                    autoComplete="precio_en_moneda"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="precio_en_moneda"
                    {...register('precio_en_moneda', {
                    required: {
                        value: true,
                        message: "es requerido"
                        }
                    })
                    }
                />
            </div>

            <select
                id="empresa"
                name='empresa'
                className="mt-1 block w-full pl-3 pr-10 py-4 rounded-md text-base border text-gray-500 border-gray-300 "
                {...register('empresa', {
                    required: {
                        value: false,
                        message: "es requerido"
                        }
                    })
                }
            >
                {
                    empresasObject&&empresasObject ?
                    
                    empresasObject.map((option) => (
                        <option key={option.nit} value={option.nit}>
                          {option.nombre}
                        </option>
                      ))
                    :
                    <option key={0} value="" className="text-gray-400">No se han registrado Empresa</option>
                }                
            </select>

            <div>
                <label htmlFor="categorias" className="sr-only">
                    Categorias
                </label>
                <select
                    id="categorias"
                    name='categorias'
                    className="mt-1 block w-full pl-3 pr-10 py-4 rounded-md text-base border text-gray-500 border-gray-300 "
                    {...register('categorias', {
                        required: {
                            value: false,
                            message: "es requerido"
                            }
                        })
                    }
                >
                    {
                        categoriasObject&&categoriasObject ?
                        categoriasObject.map((option) => (
                            <option key={option.id} value={option.nombre}>
                              {option.nombre}
                            </option>
                          ))
                        :
                        <option key={0} value="" className="text-gray-400">No se han registrado Categorias</option>
                    }
                    
                </select>
              </div>

            <div className="px-4 py-5 sm:px-6">
                    <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    
                        <div className="ml-4 mt-2 flex-shrink-0">
                            {
                                loading ?
                                <div
                                    className="relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                >
                                    <CircleLoader loading={loading} size={25} color="#ffffff"/>
                                </div>
                                :
                                <button
                                    type="submit"
                                    className="relative inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                >
                                    Guardar
                                </button>

                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
        
    )
}
