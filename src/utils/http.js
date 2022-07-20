import axios from 'axios'

const token = 'E8CGYB36uY5bBEnc1cOZ'

let headers = {
  'Content-type': 'application/json; charset=UTF-8',
  Authorization: `Bearer ${token}`,
}

export const http = axios.create({
  baseURL: 'https://the-one-api.dev/v2/',
  headers: headers,
})
