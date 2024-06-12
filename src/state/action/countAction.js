
export const addCount = (number)=>{
    return (dispatch)=>{
        dispatch({
            type:'add',
            payload: number
        })
    }
}


export const minusCount = (number)=>{
    return (dispatch)=>{
        dispatch({
            type:"minus",
            payload:number
        })
    }
}
