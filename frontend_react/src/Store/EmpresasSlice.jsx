import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEmpresas } from '../api/empresa.api'

export const empresas = createAsyncThunk(
    'empresas',
    async (body) => {
        //console.log(userCredentials)   
        const response_api = await getEmpresas(body)
        return response_api
    }
)

const empresasSlice = createSlice({
    name: 'empresas',
    initialState:{ 
        rows:[]
    },
    extraReducers:(builder)=>{
        builder
        //list
        .addCase(empresas.pending, (state)=>{
            console.log('empresas entro pending')
            //state.token = null
        })
        .addCase(empresas.fulfilled, (state, action)=>{
            console.log('empresas entro fulfilled')
            state.rows = [...action.payload.data]
        })
        .addCase(empresas.rejected, (state, action)=>{
            console.log('empresas entro rejected')
            console.log(action.error.message)
            if(action.error.message === 'Request failed with status code 401'){
                state.error = 'Access denied! invalid credentials'
            }
            else{
                console.log('user-checking entro 400 backend')
                state.error = action.error.message
            }
        })
               
    }
})

export default empresasSlice.reducer