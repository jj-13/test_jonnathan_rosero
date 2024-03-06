import { Route, Routes, useLocation } from 'react-router-dom'
import { Error404 } from "../../containers/errors/Error404"
import { Login } from "../../containers/pages/Login"
import { Home } from "../../containers/pages/Home"
import { Empresa } from "../../containers/pages/empresa/Empresa"
import { EmpresaLista } from "../../containers/pages/empresa/EmpresaLista"
import { Productos } from "../../containers/pages/productos/Productos"
import { Inventario } from "../../containers/pages/inventario/Inventario"
import { Dashboard } from "../../containers/pages/Dashboard"
import { ResetPassword } from "../../containers/auth/ResetPassword"
import { ResetPasswordConfirm } from "../../containers/auth/ResetPasswordConfirm"
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation()

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            {/* Error Display */}
            <Route path="*" element={<Error404 />} />

            {/* Home Display */}
            <Route path="/" element={<Login />} />
            <Route path="/forgot_password" element={<ResetPassword />} />
            <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/empresa/list" element={<EmpresaLista />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/inventario" element={<Inventario />} />
            
            
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
