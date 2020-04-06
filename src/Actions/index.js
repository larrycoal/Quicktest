import axios from 'axios'

export const signIn = (id)=>{
    return{
        type:'SIGN-IN',
        payload:id
    }
}
export const signOut = ()=>{
    return{
        type:'SIGN-OUT'
    }
}

export const createTest=(values)=>async(dispatch,getState)=>{
    const {userId}=getState().auth
    const response = await axios.post("http://localhost:3001/test",{...values,userId})

    dispatch({type:"CREATE-TEST", payload:response.data})
}

export const fetch =()=>async (dispatch,getState)=>{
    const response = await axios.get("http://localhost:3001/test")
    dispatch({type:"FETCH-TEST",payload:response.data}) 
}
export const addQuestion = (questions)=>async(dispatch,getState)=>{
    const {userId}=getState().auth
    const response = await axios.post("http://localhost:3001/questions",{...questions,TestId:userId})

    dispatch({type:"ADD-QUESTION",payload:response.data})
    return(
        response
    )
}

export const fetchTest =(Id,name)=>async(dispatch)=>{
    const response=await axios.get(`http://localhost:3001/questions?TestId=${Id}&&TestName=${name}`)
    return response
}