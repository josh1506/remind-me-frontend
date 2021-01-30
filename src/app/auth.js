import { createAction, createReducer } from '@reduxjs/toolkit'

export const authCreated = createAction('authCreated')
export const authRemoved = createAction('authRemoved')

export default createReducer({
            id: '',
            username: '',
            email: '',
            tokens: {
                refreshToken: '' ,
                accessToken: ''
            }
        }, {
    [authCreated.type]: (auth, action) => {
        auth.id= action.payload.id
        auth.username= action.payload.username
        auth.email= action.payload.email
        auth.tokens= {
            refreshToken: action.payload.tokens.refreshToken,
            accessToken: action.payload.tokens.accessToken
        }
    },
    [authRemoved.type]: (auth, action) => {
        auth.id = ''
        auth.username = ''
        auth.email = ''
        auth.tokens = {
            refreshToken: '' ,
            accessToken: ''
        }
    }

})