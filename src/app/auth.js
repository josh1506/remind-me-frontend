import { createSlice } from '@reduxjs/toolkit'


const slice = createSlice({
    name: 'auth',
    initialState: {
        id: '',
        username: '',
        email: '',
        tokens: {
            refreshToken: '' ,
            accessToken: ''
        }
    },
    reducers: {
        authCreated: (auth, action) => {
            auth.id= action.payload.id
            auth.username= action.payload.username
            auth.email= action.payload.email
            auth.tokens= {
                refreshToken: action.payload.tokens.refreshToken,
                accessToken: action.payload.tokens.accessToken
            }
        }, 
        authRemoved: (auth, action) => {
        auth.id = ''
        auth.username = ''
        auth.email = ''
        auth.tokens = {
            refreshToken: '' ,
            accessToken: ''
            }
        }
    }
})


export const {authCreated, authRemoved} = slice.actions
export default slice.reducer