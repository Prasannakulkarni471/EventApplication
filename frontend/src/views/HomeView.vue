<template>
  <v-app id="home">
    <v-container fluid>

        <div class="head">
          
          <NavBar  />
            <v-row>
              <v-col cols="5">
                <div style="position: relative" class="mt-16">
                <h1 class="text-grey">Hello,welcome to</h1>
                <h1 class="text-white">SymBooth</h1>
                <span class="text-white">Final Demo</span><br />
              </div>
              </v-col>
              <v-col cols="2">
                <div style="position: absolute;z-index: 9999;bottom:0;margin-left: auto;margin-right: auto;left: 0;right: 0;text-align: center;">
                  <v-icon>fas fa-angle-double-down</v-icon>
                </div>
              </v-col>
              
            </v-row>
        </div>
        <v-row>
          <v-col>
            <h1> </h1>
            <h1> </h1>
            <br/>
            <br/>
          </v-col>
        </v-row>
        
        <v-col cols="12" class="imgHover">
          <v-row class="fill-height" align="center" justify="center">
            <template v-for="(item, i) in items" :key="i">
              <v-col cols="12" md="4">
                <v-hover v-slot="{isHovering, props}">
                  <v-card :elevation="isHovering ? 12: 2" :class="{'on-hover' : isHovering}" v-bind="props">
                    <router-link :to="{ path: '/eventspage/'+item.id }"><v-img :src="item.img" height="225px" cover></v-img></router-link>
                    <v-card-title>Event {{ i+1 }}</v-card-title>
                    <v-card-subtitle>
                    Organizer : {{item.organizer}} <br /> {{item.date}}
                    </v-card-subtitle>
                    <v-card-text>
                    Event : {{ item.text }}
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </template>
          </v-row>
        </v-col>
        <v-col cols="12" id="page">
          <div class="pre">
            <v-row>
              <v-col cols="12" sm="4">
                <v-card class="mw-auto" max-width="344" height="">
                  <v-img src="i1.jpg" height="200px" cover></v-img>
                  <v-card-title>We provide you the best</v-card-title>
                  <v-card-subtitle>
                    By our Group | 13 MAR 2023
                  </v-card-subtitle>
                  <v-card-text>
                    we are still working on it now.
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card class="mw-auto" max-width="344" height="">
                  <v-img src="i1.jpg" height="200px" cover></v-img>
                  <v-card-title>We provide you the best</v-card-title>
                  <v-card-subtitle>
                    By our Group | 13 MAR 2023
                  </v-card-subtitle>
                  <v-card-text>
                    we are still working on it now.
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card class="mw-auto" max-width="344" height="">
                  <v-img src="i1.jpg" height="200px" cover></v-img>
                  <v-card-title>We provide you the best</v-card-title>
                  <v-card-subtitle>
                    By our Group | 13 MAR 2023
                  </v-card-subtitle>
                  <v-card-text>
                    we are still working on it now.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" id="biog">
        <div class="hire">
          <v-row>
            <v-col cols="12" sm="8">
              <h1 class="mt-9">Wanna Join us on Picturous Events!!</h1>
              <p class="text-grey">
                For Joining with up fill your minor informations!! 
                Just Fill Up some details and head start to your services,
                And let others know about it and book it! 
              </p>
            </v-col>
            <v-col cols="12" sm="4">
              <router-link :to="{ path: '/LoginPage' }"><v-btn color="grey" class="mt-15">SignUP</v-btn></router-link>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" class="padd" id="portfolio">
        <div class="first" id="project">
          <v-row>
            <v-col cols="12" id="about">
              <div class="child">
                <v-btn
                  icon="mdi-laptop"
                  color="#FBDF7E"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">Web Design</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                  <br />consectetur adipis
                </p>
              </div>
              <div class="child">
                <v-btn
                  icon="mdi-cellphone"
                  color="#FBDF7E"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">App Design</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                  <br />consectetur adipis
                </p>
              </div>
              <div class="child">
                <v-btn
                  icon="mdi-camera"
                  color="#FBDF7E"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">Creative Design</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                  <br />consectetur adipis
                </p>
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-col>

      <v-col cols="12" sm="12" class="px-16" id="contact">
        <v-row>
          <v-col cols="12" sm="4">
            <div class="child">
              <h1>Contact info.</h1>
              <v-btn
                icon="mdi-home"
                color=""
                class="mt-10"
                variant="outlined"
              ></v-btn
              ><br />
              <span class="text-caption">Flexi, SIT, Pune </span
              ><br />
              <v-btn
                icon="mdi-phone"
                color=""
                class="mt-10"
                variant="outlined"
              ></v-btn
              ><br />
              <span class="text-caption">+91 88053 - 33613 </span> <br />
              <span class="text-caption">+91 00235 - 65212 </span> <br />
              <v-btn
                icon="mdi-mail"
                color=""
                class="mt-10"
                variant="outlined"
              ></v-btn
              ><br />
              <span class="text-caption">symboothtech@gmail.com </span> <br />
              <span class="text-caption">symboothinfo@gmail.com </span> <br />
            </div>
          </v-col>
          <v-col cols="12" sm="8">
            <h1 class="mt-8">Send your message</h1>
            <v-divider></v-divider>
            <span class="text-caption"
              >Anything you wanna ask, you can send your query here!!<br />
              Feel free to contact us, and suggest any suggestions if any.<br />
              Our Team will work on it as early as possible.</span
            >
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Name"
                  persistent-hint
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Phone No"
                  persistent-hint
                  variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-textarea
              label="Message"
              persistent-hint
              variant="outlined"
            ></v-textarea>
            <v-btn color="#FBDF7E" class="mt-2">Submit Now</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="hirefoot">
        <v-row >
      <FooterBar />
    </v-row>
    </v-col>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue'

import FooterBar from '../components/FooterBar.vue'
export default defineComponent({
  name: 'HomeView',
  setup(){
    return { 
      slider2: 50,
      items: [
        {
          id:1,img: "i3.jpg",text: "CyberSecurity Event",organizer: "SOCS", date: "13 Mar 2023",
        },
        {
          id:2,img: "i4.jpg",text: "TechFest",organizer: "Symbiosis Institue of Technology", date: "14 Mar 2023",
        },
        {
          id:3,img: "i5.jpg",text: "Reverb",organizer: "SIT, Pune", date: "16 Mar 2023",
        },
        {
          id:4,img: "i6.jpeg",text: "AIML Techfest",organizer: "SOCS", date: "13 Mar 2023",
        },
        {
          id:5,img: "i9.jpg",text: "CyberSecurity Event",organizer: "SIT, Pune", date: "16 Mar 2023",
        },
        {
          id:6,img: "i8.jpg",text: "CyberSecurity Event",organizer: "Symbiosis Institue of Technology", date: "14 Mar 2023",
        },
      ],
    }
  },
  components: {
    NavBar,
    FooterBar
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
  background-image: url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80");
  transform: skew(0deg, 0deg);
}
.head:after{
  content: " ";
  position: absolute;
  top:0;
  right: 0;
  height: 100%;
  width: 50%;
  background-image: url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80");
  transform: skew(0deg, 0deg);
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
.first {
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}
.imgHover {
  padding: 0 200px;
}
.pre {
  width: 100%;
  height: 380px;
  text-align: center;
  padding: 0 200px;
  background-color: #f5f5f5;
}
.hire {
  width: 100%;
  height: 200px;
  padding: 0 200px;
  background-color: #e9e9e9;
  margin-top: -24px;
}
.hirefoot{
  width: 100%;
  height: 500px;
  padding-top: 50px;
  padding-left: 10px;
  background-color: #e9e9e9;
  margin-top: 0px;
}
</style>