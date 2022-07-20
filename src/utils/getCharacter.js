import { http } from './http'

const getCharacter = async endpoint => {
  const response = await http.get(endpoint)
  const data = response.data.docs

  const characters = data.map(character => ({
    id: character._id,
    name: character.name,
    race: character.race,
  }))

  return characters
}

export default getCharacter
