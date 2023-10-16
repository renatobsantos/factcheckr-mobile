import { CreateUserInput, LoginInput, NewsInput, NewsPaginated, User } from '@types'
import axios from 'axios'

const useAxios = axios.create({
  baseURL: 'https://eb1b-2804-7f0-90b0-32df-e468-4e12-6ed6-16de.ngrok.io',
})

export const createNews = async (endpoint: string, data: NewsInput) => {
  const response = await useAxios
    .post(endpoint, data)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return undefined
    })

  return { ...response }
}

export const createUser = async (
  endpoint: string,
  data: CreateUserInput
): Promise<CreateUserInput> => {
  const response = await useAxios
    .post(endpoint, data)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return undefined
    })

  return { ...response }
}

export const login = async (endpoint: string, data: LoginInput): Promise<User> => {
  const response = await useAxios
    .post(endpoint, data)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return undefined
    })

  return { ...response }
}

export const getAllNews = async (endpoint: string, token: string): Promise<NewsPaginated> => {
  const response = await useAxios
    .get(endpoint, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return undefined
    })

  return response
}

export const getAllUserNews = async (endpoint: string, token: string): Promise<NewsPaginated> => {
  const response = await useAxios
    .get(endpoint, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return undefined
    })

  return response
}
