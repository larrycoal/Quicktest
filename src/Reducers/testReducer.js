

export default(state=null,action)=>{
 switch(action.type){
     case 'CREATE-TEST':return {...state,...action.payload}
     case 'FETCH-TEST':return{...state,...action.payload}
     default:return state
 }
}