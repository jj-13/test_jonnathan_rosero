import { Layout } from "../../../Hocs/layouts/Layout"
import { TablaInventario } from "../../../components/inventario/TablaInventario"

export const Inventario = () => {
  return (
    <Layout>        
        <div className="pt-28">            
            <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
              {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
              <div className="mx-auto max-w-7xl my-10">
                <TablaInventario />
              </div>
            </div>            
        </div>    
    </Layout>
  )
}