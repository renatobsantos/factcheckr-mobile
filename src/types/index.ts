export type AppParamsList = {
  Education: undefined
  Home: undefined
  Explore: undefined
  ProfileStack: undefined
}

export type ProfileParamsList = {
  Profile: undefined
  Login: undefined
}

export enum VerifiedNewsStatusEnum {
  REAL = 'verdadeira',
  UNCERTAIN = 'sem certeza',
  FAKE = 'falsa',
}

export interface NewsCardProps {
  id: string
  title: string
  description: string
  status: VerifiedNewsStatusEnum
  link?: string
  date: string
  isTrending: boolean
}

export interface ModelCardProps {
  id: string
  title: string
  description: string
}

export interface User {
  id: string
  name: string
  email: string
  news: News[]
  accessToken: string
}

export interface CreateUserInput {
  name: string
  email: string
  password: string
}

export interface LoginInput {
  email: string
  password: string
}

export interface News {
  id: string
  createdAt: Date
  updatedAt: Date
  title?: string
  content: string
  isFake?: boolean
  isTrending: boolean
}

export interface NewsInput {
  title?: string
  content: string
  userId?: string
}

export interface PaginationControls {
  total: string
  totalPages: string
}

export type NewsPaginated = PaginationControls & { news: News[] }

export type NewsListTabs = 'AllNews' | 'TrendingNews' | 'UserNews'
