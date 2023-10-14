import { create } from 'zustand'

type HomeTab = 'Link' | 'Text'

interface HomeState {
  activeTab: HomeTab
  setActiveTab: (tab: HomeTab) => void
  linkText: string
  setLinkText: (linkText: string) => void
  titleText: string
  setTitleText: (titleText: string) => void
  descriptionText: string
  setDescriptionText: (descriptionText: string) => void
}

const useHomeStore = create<HomeState>()((set) => ({
  activeTab: 'Link',
  setActiveTab: (tab: HomeTab) =>
    set({ activeTab: tab, linkText: '', titleText: '', descriptionText: '' }),
  linkText: '',
  setLinkText: (text: string) => set({ linkText: text }),
  titleText: '',
  setTitleText: (text: string) => set({ titleText: text }),
  descriptionText: '',
  setDescriptionText: (text: string) => set({ descriptionText: text }),
}))

export default useHomeStore
