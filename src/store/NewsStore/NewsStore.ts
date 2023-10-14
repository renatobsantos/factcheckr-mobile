import { NewsCardProps } from '@types'
import { create } from 'zustand'

import { mockTrendingNews } from '../../mocks/mockTrendingNews'

interface NewsState {
  news: Array<NewsCardProps>
  trendingNews: Array<NewsCardProps>
}

const useNewsStore = create<NewsState>()((set) => ({
  news: mockTrendingNews,
  trendingNews: mockTrendingNews.filter((news) => news.isTrending === true),
}))

export default useNewsStore
