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
