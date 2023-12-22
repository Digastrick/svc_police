<script>
import axios from 'axios';

export const AlbumModule = {
  namespaced: false,
  state:() =>({
    albums:[],
    visionAlbums:false
      }),
  mutations:{
    SET_ALBUMS(state,albums){
      state.albums = albums;
    },
    RESET_ALBUMS(state) {
    state.albums = []
  },
  SET_VISION(state,visionAlbums){
    state.visionAlbums = !state.visionAlbums
  }
  },
  actions:{
    fetchAlbums({commit},id){
      return axios.get(`http://localhost:5173/albums?userId=${id}`)
      .then(albums => {
        commit('SET_ALBUMS', albums.data)
      })
      .catch(error => {
        console.error('Failed to fetch albums', error)
      })
    },
    resetAlbums({ commit }) {
    commit('RESET_ALBUMS')
  },
  visionAlbumsFunc({commit}){
    commit('SET_VISION')
  }
  }
}
</script>