import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategorias } from '../api/categorias.api'

export const categorias = createAsyncThunk(
    'categorias',
    async (body) => {
        //console.log(userCredentials)   
        const response_api = await getCategorias(body)
        return response_api
    }
)

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState:{ 
        rows:[]
    },
    extraReducers:(builder)=>{
        builder
        //list
        .addCase(categorias.pending, (state)=>{
            console.log('categorias entro pending')
            //state.token = null
        })
        .addCase(categorias.fulfilled, (state, action)=>{
            console.log('categorias entro fulfilled')
            state.rows = [...action.payload.data]
        })
        .addCase(categorias.rejected, (state, action)=>{
            console.log('categorias entro rejected')
            console.log(action.error.message)
            if(action.error.message === 'Request failed with status code 401'){
                state.error = 'Access denied! invalid credentials'
            }
            else{
                console.log('categorias entro 400 backend')
                state.error = action.error.message
            }
        })
               
    }
})

export default categoriasSlice.reducer