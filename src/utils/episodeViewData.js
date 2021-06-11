import {singlePetition, apiLink} from './Api';
export async function episodeData(id){
    const episode = await singlePetition('episode', id)
    const characters = await episode.characters.map(character=>{
        return apiLink(character)
    })
    return Promise.all(characters).then(e=>{
        return {
            episode,
            characters: e
        }
    }).catch(e=>e)
}