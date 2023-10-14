import { create } from 'zustand'

type ExploreTab = 'Trending' | 'MyVerifications'

interface ExploreState {
  activeTab: ExploreTab
  setActiveTab: (tab: ExploreTab) => void
  searchText: string
  setSearchText: (searchText: string) => void
}

const useExploreStore = create<ExploreState>()((set) => ({
  activeTab: 'Trending',
  setActiveTab: (tab: ExploreTab) => set({ activeTab: tab }),
  searchText: '',
  setSearchText: (text: string) => set({ searchText: text }),
}))

export default useExploreStore
