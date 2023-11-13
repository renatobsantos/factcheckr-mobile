import { News, NewsListTabs } from '@types'
import { create } from 'zustand'

interface NewsState {
  news: News[]
  setNews: (news: News[]) => void
  newsActiveTab: NewsListTabs
  setNewsActiveTab: (tab: NewsListTabs) => void
}

const useNewsStore = create<NewsState>()((set) => ({
  news: [],
  setNews: (newsArray: News[]) => set(() => ({ news: newsArray })),
  newsActiveTab: 'AllNews',
  setNewsActiveTab: (tab: NewsListTabs) => set(() => ({ newsActiveTab: tab })),
}))

export default useNewsStore
