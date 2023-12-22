<script>
import { ref ,computed} from 'vue';
import { useStore } from 'vuex';
import { onBeforeRouteLeave } from 'vue-router';
export default {
    props: {
      photos: {
        type: Array,
        required:true
      }
    },
    setup(props) {
    const store = useStore()
    const currentSlideIndex = ref(0);
      const enter = ref(false);
      const leave = ref(false);
      const currentSlide = computed(() => {
        return props.photos[currentSlideIndex.value]
      })
      onBeforeRouteLeave(()=> {
    const store = useStore(); 
    store.dispatch('resetAlbums');
  })
      const nextSlide = () => {
      leave.value = true;
      setTimeout(() => {
        currentSlideIndex.value = (currentSlideIndex.value + 1) % props.photos.length;
        enter.value = true; 
        leave.value = false;
      }, 500);
    };
    const prevSlide = () => {
      leave.value = true;
      setTimeout(() => {
        currentSlideIndex.value =
          (currentSlideIndex.value - 1 + props.photos.length) % props.photos.length;
        enter.value = true;
        leave.value = false;
      }, 500);
    };
    const resetAnimation = () => {
      enter.value = false;
      leave.value = false;
    };
    return{
        currentSlide,
          nextSlide,
          prevSlide,
          enter,
          leave,
          resetAnimation,
    }
    }
}
</script>

<template>
    <ul v-if="photos" class="slider" >
        <li class="slider_button-wrapp">
      <span>
        <button class="slider_button">
      <img 
            src="../assets/arrow (1) 2.svg" 
            alt="arrowBackPhoto" 
            class="arrowPrev"
            @click="prevSlide"
            >
    </button>
      </span>
    </li>
        <transition name="slide"  @after-enter="resetAnimation" @after-leave="resetAnimation">
         <li class="slider-container" :key="currentSlide">
          <li v-for="photo in photos" :key="photo.id">
            <img 
          :key="photo.id"
          :src="currentSlide.url" 
          alt="photoAlbums"
          class="slide"
          :class="{ 'slide-enter': enter, 'slide-leave-to': leave }">
          </li>      
        </li>
        </transition>
        <li class="slider_button-wrapp">
          <span>
        <button class="slider_button">
      <img 
      src="../assets/arrow (1) 2.svg" 
      alt="arrowNextPhoto"
      class="arrowNext"
      @click="nextSlide">
    </button>
      </span>
        </li>
      </ul>
</template>

<style>
.slider{
  display: flex;
  max-width: 600px;
  max-height: 600px;
  width: 100%;
  padding:0;
}
.arrowNext{
  transform: rotate(180deg);
}
.slider_button{
  background-color: white;
  border:none;
  cursor: pointer;
}
.slider_button-wrapp{
  display: flex;
  align-items: center;
}
.slider_button:nth-of-type(2){
  transform: rotate(180deg);
}
.slider-container{
width:100%;
height: 100%;
overflow: hidden;
display: flex;
}
.slide{
  object-fit: cover;
  max-width: 80vw;
  max-height: 100vh;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter{
  transform: translateX(-100%);
}
@media(max-width:700px){
  .slider{
    max-width: 400px;
  }
}
</style>