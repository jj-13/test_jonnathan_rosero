import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selecInventario } from "../../Store/Selector"
import { inventario } from "../../Store/InventarioSlice"
import { jsPDF } from "jspdf";
import "jspdf-autotable"

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

export const TablaInventario = () => {
    const dispatch = useDispatch() 
    const [access, setAccess] = useState(getAcces())
    const inventarioObject = useSelector(selecInventario)
    

    useEffect(()=>{
        const body = {
                              
            headers: {                                    
                'Accept': 'application/json',  
                'Content-Type': 'multipart/form-data', // Agrega el encabezado Content-Type: application/json 
                'Authorization': `JWT ${access.data[0].access}`
            }
        } 
        dispatch(inventario(body))
        
    },[])

    const exportPdf = () => {
        const doc = new jsPDF()
        const  fechaActual = new Date()
        doc.text(`Inventario - ${fechaActual.toLocaleString()}`, 14, 10)
        doc.autoTable({
          html: "#my-table",
        });
    
        doc.save("mypdf.pdf");
    }

    return (
        <>
            
            <h1 className="font-bold text-4xl text-gray-900 pb-4">Table Inventario</h1>
            <button            
            className="relative inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={exportPdf}
            >
                Export
            </button>
            <div className="container mx-auto mt-10">
                <table className="min-w-full bg-white border border-gray-300" id="my-table">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Id</th>
                        <th className="py-2 px-4 border-b">Producto</th>
                        <th className="py-2 px-4 border-b">Cantidad</th>                    
                    </tr>
                    </thead>
                    <tbody>
                    {inventarioObject&&inventarioObject ?
                        inventarioObject.map((row) => (
                        <tr className="py-2 px-4 border-b" key={row.producto.id}>
                            <td>{row?.producto.id}</td>
                            <td>{row?.producto.nombre}</td>
                            <td>{row?.cantidad}</td>
                        </tr>
                        ))
                        :
                        <></>
                    }
                    </tbody>
                </table>
            </div>

            
        </>
  )
}
