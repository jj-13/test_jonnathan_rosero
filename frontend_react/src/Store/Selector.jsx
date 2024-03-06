export const selectIsAuthenticated = state => state.auth.isAuthenticated
export const selectUser = state => state.auth.user
export const selectEmpresas = state => state.empresas.rows
export const selecCategorias = state => state.categorias.rows
export const selecInventario = state => state.inventario.rows