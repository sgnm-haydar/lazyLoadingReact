import axios from "axios"

const getOneByLabel = ()=>{
    return axios.get("http://localhost:3010/lazyLoading/FacilityStructure")
}

const getOneByKey = (key)=>{
    return axios.get("http://localhost:3010/lazyLoading/"+key+'/Space')
}

const service = {getOneByLabel,getOneByKey}

export default service;