import axios, { AxiosInstance } from 'axios'
import { ImgItem } from '../types'

import { API_URL, CLIENT_ID, SEARCH_ENDPOINT } from './constants'

class Client {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: API_URL,
      params: {q: 'cats'},
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`
      }
    })
  }

  async request() {
    return this.instance.get<{data: ImgItem[]}>(SEARCH_ENDPOINT)
  }
}

const client = new Client()

export default client