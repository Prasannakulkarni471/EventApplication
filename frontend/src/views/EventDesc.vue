<template>
    <div >
        <v-col cols="12" sm="8" offset="2">
                <v-card  class="pre">
                  <v-img :src=books.image cover></v-img>
                  <v-card-title>We provide you the best</v-card-title>
                  <v-card-subtitle>
                    By our Group | 13 MAR 2023
                  </v-card-subtitle>
                  <v-card-text>
                    we are still working on it now.
                  </v-card-text>
                </v-card>
              </v-col>
    </div>
</template>

<script>
import booksList from '../data/book.json'
    export default {
        data: () => ({
            id: 0,
            books: {}
    }),
    mounted () {
            this.id= this.$route.params.id;
            if(this.id !=0){
                this.books = booksList.find(rec => rec._id == this.id)
            }
        },
    }
</script>

<style lang="scss" scoped>
.pre {
  width: 100%;
  height: 100%;
  text-align: center;
  
  background-color: #f5f5f5;
}
</style>