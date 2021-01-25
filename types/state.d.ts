import { Art } from '~/types/entity'

export interface RootState {
  version: string
}

export interface ArtState {
  isLoading: boolean
  items: Art[]
}
