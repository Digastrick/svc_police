<script>
import axios from 'axios';

export const UserModule = {
    state:() =>({
        currentUser:null
  }),
  mutations:{
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    RESET_USER(state) {
    state.currentUser = null
  }
  },
  actions:{
    fetchUser({ commit }, id) {
      return axios.get(`http://localhost:5173/users/${id}`)
      .then(user => {
        commit('SET_CURRENT_USER',user.data);
      })
        .catch(error => {
          console.error('Failed to fetch user:', error);
        });
    },
    resetUser({ commit }) {
    commit('RESET_USER')
  }
  }
}
</script>