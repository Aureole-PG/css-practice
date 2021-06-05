import {useEffect, useState} from 'react'

export default function useApiList(apiList) {
    const [response, setResponse]=useState([]);

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/${apiList}`)
        .then(response=> response.json())
        .then(resultData=> {setResponse(resultData.results)} )
        
    },[apiList])
    
    return response
    
}
