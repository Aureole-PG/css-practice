import {useEffect, useState, useContext} from 'react';
import {Context} from './../context/generalContext'

export default function useApiList(apiList) {
    const [response, setResponse]=useState([]);
    const {data, setData }= useContext(Context)
    useEffect(()=>{
        
        if (!data[apiList]) {
            fetch(`https://rickandmortyapi.com/api/${apiList}`)
            .then(response=> response.json())
            .then(resultData=> {
                setResponse(resultData.results)
                setData({...data, [apiList] : resultData.results})
            })
        }
        else{
            setResponse(data[apiList])
        }
        
        
    },[apiList])
    
    return response
    
}

export function singlePetition(name, id){
    return fetch(`https://rickandmortyapi.com/api/${name}/${id}`).then(response=>response.json())

}


export function apiLink(link) {
    return fetch(link).then(response=> response.json())
}
