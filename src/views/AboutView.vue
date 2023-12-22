<template>
  <div class="pageAbout">
    <UserInfo v-if="currentUser"
    :currentUser="currentUser" />
    <div>
      <div class="button-wrapper">
    <button class="button-vision"
    @click="visionPostsFunction()" >список постов</button>
 
    <button class="button-vision"
    @click="visionAlbumsFunction()">список альбомов</button>
  </div>
    <AlbumList 
    v-if="isHiddenAlbums"
    :albums="albums"
    :key="currentUser.id"/>
    <PostList 
    v-if="isHiddenPosts"
    :posts="posts"
    :key="currentUser.id"
      />
  </div>
</div>
  </template>
  
  <script>
  import { computed  ,ref } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute ,useRouter, onBeforeRouteLeave} from 'vue-router';
  import PostList from '../components/PostList.vue'
  import AlbumList from '../components/AlbumList.vue'
  import UserInfo from '../components/UserInfo.vue';
  export default {
    components:{
      PostList,
      AlbumList,
      UserInfo
    },
  setup(){
    const store = useStore(); 
    const route = useRoute();
    const router = useRouter()
    let isHiddenAlbums = ref(false)
    let isHiddenPosts = ref(false)
    const pathAlbums = route.path.includes('/albums')
    const pathPosts = route.path.includes('/posts')
    const checkPostsRouter = () => {
      if(pathPosts == false){
        isHiddenPosts.value = false
      }else{
        isHiddenPosts = true
      }
    }
    const checkAlbumsRouter = () => {
      if(pathAlbums == false){
        isHiddenAlbums.value = false
      }else{
        isHiddenAlbums = true
      }
    }
    checkPostsRouter()
    checkAlbumsRouter()
    onBeforeRouteLeave(()=> {
      const store = useStore(); 
      store.dispatch('resetUser');
    })  
    const getUser = (id) => {
      id = route.params.id;
      store.dispatch('fetchUser',id);
    }
    getUser()
    const visionAlbumsFunction = () => {
     return  isHiddenAlbums.value = !isHiddenAlbums.value
    }
    const visionPostsFunction = () => {
     return  isHiddenPosts.value = !isHiddenPosts.value
    }
        const currentUser = computed(() => store.state.currentUser.currentUser);
        const getAlbumsList = async(id) => {
          id = route.params.id;
         return await store.dispatch('fetchAlbums',id);
          }
          const getPostList = async(id) => {
          id = route.params.id;
         return await store.dispatch('fetchPosts',id);
          }
          getPostList()
          const albums = computed(async() => {
          await getAlbumsList()
          return  store.state.albums.albums
            })
           const posts = computed(() => store.state.posts.posts)
  return {
        currentUser,
        posts,
        albums,
        visionAlbumsFunction,
        isHiddenAlbums,
        isHiddenPosts,
        visionPostsFunction
  }
  }
  }
  </script>
  
  <style>
  .pageAbout{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button-vision{
    max-height: 50px;
    height: 100%;
    max-width: 100px;
    width:100%;
    background-color: white;
    cursor:pointer;
    border:1px solid green
  }
  .button-vision:hover{
    background-color: greenyellow;
    color:black;
    box-shadow: 3px 3px 3px greenyellow ;
  }
  ul{
    list-style: none;
  }
  .button-wrapper{
    display: flex;
    justify-content: center;
  }
  </style>
  