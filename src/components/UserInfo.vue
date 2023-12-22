<script>
export default {
    props:{
        currentUser:{
            type: Object,
            required:true
        }
    },
    setup() {
 
    },
}
</script>

<template>
     <div class="about">
      <h3>Детали пользователя:</h3>
      <div>{{ currentUser.name }}</div>
      <div>{{ currentUser.email }}</div>
      <div>{{ currentUser.phone }}</div>
  </div>
</template>

<style>
.about{
  border:1px solid green;
  max-height: 300px;
  height: 100vh;
  max-width: 200px;
  width:100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap:10px;
  box-shadow:2px 2px 2px green;
  margin-bottom: 10px;
}
</style>