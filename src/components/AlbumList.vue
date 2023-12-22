<script>
import AlbumListItem from './AlbumListItem.vue'; 

export default {
    props: {
      albums: {
        type: Promise
      }
    },
    components:{
      AlbumListItem
    },
    computed:{

    },
    setup(props){
     return{
      
     }
    }
}
</script>

<template>
     <ul class="listPosts">
    <li><h3>Список альбомов пользователя</h3></li>
   
    <album-list-item :albums="albums"  />

  </ul>
  
</template>
<style>


</style>