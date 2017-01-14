/**
 * Created by lerayne on 09.01.17.
 */

const api = {
    createTransaction(ta){
        console.log('api createTransaction', ta)
        return fetch('/api/transaction', {
            method:'POST',
            headers:{
                'content-type':'application/json;charset=UTF-8'
            },
            body: JSON.stringify(ta)
        })
    },

    deleteTransaction(id){
        return fetch(`/api/transaction/${id}`, {
            method:'DELETE'
        })
    }
}

export default api