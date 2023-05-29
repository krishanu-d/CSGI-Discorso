import { Actions } from "../types"


export const setToken = (payload) => {
    console.log('payload', payload);
    return {
        type: Actions.TOKEN,
        payload: payload
    }
}