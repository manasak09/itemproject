import { ADDENTRY,UPDATEENTRY,FINDENTRY,FINDALLDENTRIES,DELETEENTRIES } from "../action/action";
var message="init state"

const reducer=(state="initial state",action)=>{
    switch (action.type){
       case ADDENTRY:
           state="Entry added"
           return state  
       case UPDATEENTRY:
           state="Entry Updated"
           return state
       case FINDENTRY:
           state="Entry found for id"+ action.payload
           return state
      case DELETEENTRIES:
         state="Entry Deleted for id"+ action.payload
         return state
       case FINDALLDENTRIES:
           state="All entries returrned"
           return state
           default:
               return state
    }
}
export default reducer;