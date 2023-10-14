import { ModelCardProps } from '@types'
import { create } from 'zustand'

import { mockModels } from '../../mocks/mockModels'

interface ModelState {
  models: Array<ModelCardProps>
  addedModels: Array<ModelCardProps>
  addModel: (model: ModelCardProps) => void
  removeModel: (id: string) => void
  resetAddedModels: () => void
}

const useModelStore = create<ModelState>()((set) => ({
  models: mockModels,
  addedModels: [],
  addModel: (model: ModelCardProps) =>
    set((state) => ({ addedModels: [...state.addedModels, model] })),
  removeModel: (id: string) =>
    set((state) => ({
      addedModels: state.addedModels.filter((model) => model.id !== id),
    })),
  resetAddedModels: () => set({ addedModels: [] }),
}))

export default useModelStore
