<script>
import { createStore } from 'vuex';
import {PostModule} from './PostModule.vue'
import{AlbumModule} from './AlbumModule.vue'
import { UserModule } from './UserModule.vue';
import { UsersModule } from './UsersModule.vue';


export const store = createStore({

  modules: {
    posts:PostModule,
    albums:AlbumModule,
    currentUser:UserModule,
    users:UsersModule,
  }
});
</script>