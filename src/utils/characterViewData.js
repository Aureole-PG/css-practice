import {singlePetition, apiLink} from './../utils/Api'
export async function characterData(id) {
    const character = await singlePetition('character', id);
    const origin= await apiLink(character.origin.url);
    const location= await apiLink(character.location.url);
    const episodesPromise = await character.episode.map(episode=>{
        return  apiLink(episode)
    })
    return Promise.all(episodesPromise).then(e=>{
        return {character, origin, location, episode: e}
    }).catch(e=>e)
    
    
}