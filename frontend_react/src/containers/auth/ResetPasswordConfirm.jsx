import { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux"
import { useForm } from "react-hook-form"
import { Navigate, useNavigate , useParams } from "react-router-dom";
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { authCheckAuthenticated, authLoadUser, authResetPasswordConfirm, authRefresh } from "../../Store/Auth"
import { selectIsAuthenticated } from "../../Store/Selector"


export const ResetPasswordConfirm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, 
        formState:{errors}, watch, setValue, reset} = useForm()
    const isAuthenticated = useSelector(selectIsAuthenticated)

    const params = useParams()
    const uid = params.uid
    const token = params.token
  
    useEffect(()=>{
      isAuthenticated ? <></>:
      <>      
      {authRefresh()}
      {authCheckAuthenticated()}
      {/*authLoadUser()*/}
      </>

      
    },[isAuthenticated])
 
    const onSubmit = handleSubmit( (data) => {
        
        const fetchData = async () => {
          try{
            
            const body = {
              form: {
                uid: uid,
                token: token,
                new_password: data.password,
                re_new_password: data.password,
              },              
              headers: {              
                  'Content-Type': 'application/json', // Agrega el encabezado Content-Type                
              } 
            }
            await dispatch(authResetPasswordConfirm(body))
            navigate('/')

          }
          catch (error){
            console.log("Error fetching Login data:", error)
          }
          finally{
            //setLoading(false)
          }
        }
    
        fetchData()
    })

    if(isAuthenticated){
      return <Navigate to='/dashboard'/>
    }
    
    

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-22 w-auto"
              src="https://png.pngtree.com/element_our/png/20180911/background-material-design-for-lorem-ipsum-logo-png_89719.jpg"
              alt="Your Company"
            />
          </div>
          <form onSubmit={onSubmit} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
            <div>
                <label htmlFor="new_password" className="sr-only">
                  Password
                </label>
                <input
                  id="new_password"
                  name="new_password"                  
                  type="password"                  
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="New password"
                  {...register('new_password', {
                    required: {
                        value: true,
                        message: "es requerido"
                      }
                    })
                  }                  
                />
              </div>
              <div>
                <label htmlFor="re_new_password" className="sr-only">
                  Repit Password
                </label>
                <input
                  id="re_new_password"
                  name="re_new_password"                  
                  type="password"                  
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="repit new password"
                  {...register('re_new_password', {
                    required: {
                        value: true,
                        message: "es requerido"
                      }
                    })
                  }                  
                />
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Change Pasword
              </button>
            </div>
          </form>         
          
        </div>
      </div>
    </>
  )
}
