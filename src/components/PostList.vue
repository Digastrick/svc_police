<script>
import { useStore  } from 'vuex';
import { onBeforeRouteLeave} from 'vue-router';
export default {
    props: {
      posts: {
        type: Array,
        required:true
      }
    },
    setup(){
      onBeforeRouteLeave(()=> {
      const store = useStore(); 
      store.dispatch('resetPosts');
    })
    }
   
}
</script>

<template>
    <ul v-if="posts">
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
</template>