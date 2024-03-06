import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { empresaCreate } from '../../api/empresa.api'
import CircleLoader from "react-spinners/CircleLoader"


export const FormularioEmpresa = () => {

    const dispatch = useDispatch() 
    const navigate = useNavigate()
    const [loading, setLoading]=useState(false)
  
    const {register, handleSubmit, trigger,
      formState:{errors}, watch, setValue, reset} = useForm()
  
    const onSubmit = handleSubmit( (data) => {    
      //console.log('datos data: ',data)
     
        setLoading(true)
        const fetchData = async () => {
          try{          
              
              const body = { 
                  form: {
                    nit: data.nit,
                    nombre: data.nombre,
                    direccion: data.direccion,
                    telefono: data.telefono,             
                  },                            
                  headers: {                                    
                      'Accept': 'application/json',  
                      'Content-Type': 'application/json', 
                  }
              }
              //console.log(body)
              await empresaCreate(body)
  
              setLoading(false)
              setValue('nit','')
              setValue('nombre','')
              setValue('direccion','')
              setValue('telefono','')
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
            <h1 className="font-bold text-4xl text-gray-900 pb-4">Registrar Empresa</h1>
            <form onSubmit={e=>onSubmit(e)} className="grid grid-cols-1 gap-y-6">
            <div>
                <label id="nit" htmlFor="nit" className="sr-only">
                    NIT
                </label>
                <input
                    type="number"
                    name="nit"                          
                    autoComplete="nit"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="nit"
                    {...register('nit', {
                    required: {
                        value: true,
                        message: "es requerido"
                        }
                    })
                    }
                />
            </div>

            <div>
                <label id="nombre" htmlFor="nombre" className="sr-only">
                    Nombre de la empresa
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
                <label id="direccion" htmlFor="direccion"  className="sr-only">
                    Dirección
                </label>
                <input
                    type="text"
                    name="direccion"                          
                    autoComplete="direccion"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="direccion"
                    {...register('direccion', {
                    required: {
                        value: true,
                        message: "es requerido"
                        }
                    })
                    }
                />
            </div>
            
            <div>
                <label id="telefono" htmlFor="telefono" className="sr-only">
                    Teléfono
                </label>
                <input
                    type="number"
                    name="telefono"                          
                    autoComplete="telefono"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="telefono"
                    {...register('telefono', {
                    required: {
                        value: true,
                        message: "es requerido"
                        }
                    })
                    }
                />
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
