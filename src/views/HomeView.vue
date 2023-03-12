<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
        <div class="head">
            <v-row>
              <v-col cols="5">
                <div style="position: relative" class="mt-16">
                <h1 class="text-grey">Hello,welcome to</h1>
                <h1 class="text-white">Sym-Eve</h1>
                <span class="text-indigo">Demo-1</span><br />
                <v-btn title dark class="text-indigo mt-8" variant="outlined">Contact Us</v-btn>
              </div>
              </v-col>
              <v-col cols="2">
                <div style="position: absolute;z-index: 9999;bottom:0;margin-left: auto;margin-right: auto;left: 0;right: 0;text-align: center;">
                  <v-icon>fas fa-angle-double-down</v-icon>
                </div>
              </v-col>
              <v-col cols="5">
                <div style="position: relative;z-index: 9999;" class="mt-16">
                  <v-img src="i3.jpg" contain max-height="300"></v-img>
                </div>
              </v-col>
            </v-row>
        </div>
        <v-col cols="12" class="mt-16" id="about">
          <div>
            <v-row>
              <v-col cols="12" class="mt-16" id="about">
                <div class="egg">
                  <v-img src="i4.jpg" max-height="300"></v-img>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <h5 class="mt-16">About Us</h5>
                <div style="width: 120px">
                <v-slider v-model="slider2" color="indigo" label="track-color">
                </v-slider>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  name: 'HomeView',
  setup(){
    return { 
      slider2: 50,
    }
  },
  components: {
    NavBar
  },
});
</script>
<style scoped>
.v-container{
  padding: 16px 0;
}
.head{
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.head:before{
  content: " ";
  position: absolute;
  top:0;
  left: 0;
  height: 100%;
  width: 50%;
  background-image: url("https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80");
  transform: skew(0deg, 6deg);
}
.head:after{
  content: " ";
  position: absolute;
  top:0;
  right: 0;
  height: 100%;
  width: 50%;
  background-image: url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80");
  transform: skew(0deg, -6deg);
}
.egg{
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 200px;
  background-color: #5910d7;
  border-radius: 50% 50% 50% 50% / 60% 60% 60% 60%;
}
</style>