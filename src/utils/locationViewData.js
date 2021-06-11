import {singlePetition, apiLink} from './Api';
export async function locationData(id){
    const location = await singlePetition('location', id)
    const residents = location.residents.map(resident=>{
        return apiLink(resident)
    })
    return Promise.all(residents).then(e=>{
        return {
            location,
            residents: e
        }
    }).catch(e=>e)
}