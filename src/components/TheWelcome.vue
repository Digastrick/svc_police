<script >
import { computed  ,onMounted} from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore(); 
    onMounted(() => {
      return store.dispatch('fetchUsers');
    });
    const users = computed(() => store.state.users.users);

    return {
      users,

    };
  }
};
</script>

<template>
<ul class="user-list">
  <li 
  v-for="user in users"
   :key="user.id"
   class="user-list_item"
   >
   <router-link :to ="{name: 'user', params: { id: user.id}}" >{{ user.name}}</router-link></li>
</ul>

</template>
<style>
a{
  text-decoration: none;
  color:green;
}
a:hover{
transition: 0.5s;
background-color: greenyellow;
color:black;
}
.user-list{
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-list_item{
  cursor: pointer;
}
</style>