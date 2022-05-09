import { FINDENTRY,ADDENTRY,UPDATEENTRY,FINDALLDENTRIES,DELETEENTRIES } from "./action";

export function addEntry(obj){
    return{
        type:ADDENTRY,
        payload:obj
    }
}

export function updatEntry(obj){
    return{
        type:UPDATEENTRY,
        payload:obj
    }
}
export function findEntry(id){
    return{
        type:FINDENTRY,
        payload:id
    }
}
export function deleteEntry(id){
    return{
        type:DELETEENTRIES,
        payload:id
    }
}
export function findALLEntries(){
    return{
        type:FINDALLDENTRIES,
        payload:null
    }
}