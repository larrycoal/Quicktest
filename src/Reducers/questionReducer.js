export default(state=null,action)=>{
    switch(action.type){
        case 'FETCH-QUESTION':return{state,...action.payload}
        default:return state
    }
   }