import { setLocal } from "./localStorage"

const deleteInfo = (arr = [],index) =>{
    const updated = arr.filter((_,i) => i !== index)
    return updated
}


const editInfo = () =>{
    
}

export {deleteInfo}

