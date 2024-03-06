import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getInventario } from '../api/inventario.api'

export const inventario = createAsyncThunk(
    'inventario',
    async (body) => {
        //console.log(userCredentials)   
        const response_api = await getInventario(body)
        return response_api
    }
)

const inventarioSlice = createSlice({
    name: 'inventario',
    initialState:{ 
        rows:[]
    },
    extraReducers:(builder)=>{
        builder
        //list
        .addCase(inventario.pending, (state)=>{
            console.log('inventario entro pending')
            //state.token = null
        })
        .addCase(inventario.fulfilled, (state, action)=>{
            console.log('inventario entro fulfilled')
            state.rows = [...action.payload.data]
        })
        .addCase(inventario.rejected, (state, action)=>{
            console.log('inventario entro rejected')
            console.log(action.error.message)
            if(action.error.message === 'Request failed with status code 401'){
                state.error = 'Access denied! invalid credentials'
            }
            else{
                console.log('inventario entro 400 backend')
                state.error = action.error.message
            }
        })
               
    }
})

export default inventarioSlice.reducer