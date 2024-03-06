import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Auth'
import empresasReducer from './EmpresasSlice'
import categoriasReducer from './CategoriasSlice'
import inventarioReducer from './InventarioSlice'

const store = configureStore({
    reducer:{
        auth: authReducer,        
        empresas: empresasReducer,
        categorias: categoriasReducer,
        inventario: inventarioReducer, 
    }
})

export default store