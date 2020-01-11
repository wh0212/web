import { storeObject, getStoreObject ,delStore} from './locaType'
import { SEARCHHISTORY } from './config'

export let setSearchKey = (object) => {
     storeObject(SEARCHHISTORY, object)
}

//获取
export let getSearchKey = () => {
    return getStoreObject(SEARCHHISTORY)
}

export let delSearchkey = () =>{
     delStore(SEARCHHISTORY)
}