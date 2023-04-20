<template>
  <div >
    <form @submit="postData" method="post" align="center">
      <input type="text" name="author" placeholder="author" v-model="posts.author"><br> <br>
      <input type="text" name="title" placeholder="title" v-model="posts.title"><br> <br>
      <button type="submit">Post</button>
      <h1>{{ name }}</h1>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        posts:{
          title:null,
          author:null
        }
      }
    },
    methods: {
      postData(e) {
        console.warn(this.posts)
        e.preventDefault
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>