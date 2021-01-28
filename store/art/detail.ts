import { ArtDetailState } from '~/types/state'
import { Art } from '~/types/entity'
import { entityProvider } from '~/util/entityProvider'

export const state = (): ArtDetailState => ({
  isLoading: false,
  art: entityProvider.getEmptyArt(),
})

export const mutations = {
  setIsLoading(state: ArtDetailState, isLoading: boolean) {
    state.isLoading = isLoading
  },
  setArt(state: ArtDetailState, art: Art) {
    state.art = art
  },
}

export const actions = {
  async fetch({ commit, rootState }, id: number): Promise<void> {
    if (typeof id === 'string') {
      id = parseInt(id)
    }

    let arts: Art[] = rootState.art.items

    if (arts.length === 0) {
      commit('setIsLoading', true)
      const result = await (this as any).$axios
        .get(`${process.env.API_URL}`)
        .catch((e) => {
          console.log(e)
        })
      commit('setIsLoading', false)

      arts = result.data.map((item: any) => {
        return entityProvider.getArt(item)
      })
    }
    if (arts.length > 0) {
      const _arts: Art[] = arts.filter((art: Art) => {
        return art.id === id
      })
      if (_arts.length > 0) {
        commit('setArt', _arts[0])
      }
    }
  },
  clear({ commit }) {
    commit('setIsLoading', false)
    commit('setArt', entityProvider.getEmptyArt())
  },
}
