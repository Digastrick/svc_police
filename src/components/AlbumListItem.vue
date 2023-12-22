<script>
import Slider from './Slider.vue';
import {  onMounted ,ref } from 'vue';
import axios from 'axios';
export default {
    props: {
      albums: {
        type: Promise
      }
    },
    components:{
        Slider,
   
    },
    setup(props) {
      const photos = ref()
      let getPhoto= ref([])
      const receivingIdAlbums = ref([])
      let spliseIdAlbums = []
      onMounted(async() => {
        await props.albums.then((result) => {
        result.forEach((item) => {
        receivingIdAlbums.value.push(item.id);
  }); 
  while (receivingIdAlbums.value.length > 0) {
    const element = receivingIdAlbums.value.splice(0, 1); 
    spliseIdAlbums.push(element);
  }
  for(let spliseIdAlbum of spliseIdAlbums){
          for(let number of spliseIdAlbum){
              axios.get(`http://localhost:5173/photos`,
      {
        params:{
            _limit:5,
            albumId: number
        }
      }
      )
      .then(response => {
        getPhoto.value.push(response.data)
      })
          }
        }
        })
      })
        return {
          photos,
          getPhoto
        } 
    },
}
</script>

<template>
    <slider :photos="getPhoto[0]" />
    <slider :photos="getPhoto[1]" />
    <slider :photos="getPhoto[2]" />
    <slider :photos="getPhoto[3]" />
    <slider :photos="getPhoto[4]" />
    <slider :photos="getPhoto[5]" />
    <slider :photos="getPhoto[6]" />
    <slider :photos="getPhoto[7]" />
    <slider :photos="getPhoto[8]" />
    <slider :photos="getPhoto[9]" />
</template>