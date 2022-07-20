import { useEffect, useState } from 'react'
import getCharacter from '../utils/getCharacter'

const useFetch = endpoint => {
  const [state, setState] = useState(null)

  useEffect(() => {
    getCharacter(endpoint).then(character => {
      setState(character)
    })
  }, [])

  return state
}

export default useFetch
