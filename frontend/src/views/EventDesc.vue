<template>
    <v-app
    id="home"
    :style="{ background: $vuetify.theme.themes.dark.background }"
    >
        <v-container fluid>
            <v-row>
                <v-col cols="6">
                    <v-img :src="books.image" contain max-height="500"></v-img>
                </v-col>
                <v-col cols="6">
                    <h5 class="red--text text--darken-4 top">Hello We are SymBooth</h5>
                    <h1 class="white--text">{{books.title}}</h1>
                    <p class="grey--text">
                        We showcase your personalised events on our user-friendly platform <br />
                        Where your mates can see & also can pre-book those precious <br>momentious events
                        <br />  
                        
                    </p>
                    <router-link :to="{ path: '/bookpage' }"><v-btn tile color="#0fdc80" class="text-white" dark> Book Event </v-btn></router-link>
                </v-col>
                
                <v-col cols="12" class="padd">
                    <div class="first" id="project">
                        <v-row>
                            <v-col cols="12">
                                <div class="child bgColor1">
                                    <v-icon color="#0fdc80" x-large class="ml-3">mdi-palette-swatch</v-icon>
                                    <h3 style="color:white;" class="white--text ml-3 mt-4">UI Design</h3>
                                    <p style="color:lightgrey;" class="grey--text ml-3 mt-6">
                                        Symbiosis Institue of Technology <br />Design Team
                                        Elit.
                                    </p>
                                    
                                </div>
                                <div class="child bgColor2">
                                    <v-icon color="" x-large class="ml-3" dark>mdi-shopping</v-icon>
                                    <h3 style="color:white;" class="white--text ml-3 mt-4">Product Design</h3>
                                    <p  class="grey--text ml-3 mt-6">
                                        Symbiosis Institue of Technology <br />Production Team
                                        Elit.
                                    </p>
                                    
                                </div>
                                <div class="child bgColor2">
                                    <v-icon color="" x-large class="ml-3" dark>mdi-shopping</v-icon>
                                    <h3 style="color:white;" class="white--text ml-3 mt-4">Organizer</h3>
                                    <p  class="grey--text ml-3 mt-6">
                                        Symbiosis Institue of Technology <br />Flexi Team
                                        Elit.
                                    </p>
                                    
                                </div>
                                <div class="child bgColor1">
                                    <v-icon color="#0fdc80" x-large class="ml-3">mdi-book-open-page-variant</v-icon>
                                    <h3 style="color:white;" class="white--text ml-3 mt-4">Branding</h3>
                                    <p style="color:lightgrey;" class="grey--text ml-3 mt-6">
                                        Symbiosis Institue of Technology <br />Advertisement Team
                                        Elit.
                                    </p>
                                    
                                </div>
                            </v-col>
                            <v-col cols="12" class="mt-10">
                                <div class="child1">
                                    <h1 style="color:#0fdc80;" class="red--text text--darken-4 mt-4 number">{{ books.book }}</h1>
                                    <h3 style="color:white;" class="white--text mt-4">Number of BOOKINGS and still Increasing <br>HURRY UP!!</h3>
                                </div>
                                <div class="child2 mRight">
                                    <v-row>
                                        <v-col cols="12" class="childcol">
                                            <div class="child2 mButton padding bgColor1">
                                                <h1 style="color:#0fdc80;" class="red--text text--darken-4">{{books.price}}</h1>
                                                <p style="color:lightgrey;" class="grey--text">Price</p>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" class="childcol">
                                            <div class="child2 padding bgColor1">
                                                <h1 style="color:#0fdc80;" class="red--text text--darken-4">{{books.sold}}</h1>
                                                <p style="color:lightgrey;" class="grey--text">Discount</p>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div class="child2">
                                    <v-row>
                                        <v-col cols="12" class="childcol">
                                            <div class="child2 mButton padding bgColor1">
                                                <h2 style="color:#0fdc80;" class="red--text text--darken-4">{{books.data}}</h2>
                                                <p style="color:lightgrey;" class="grey--text">Date of Event</p>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" class="childcol">
                                            <div class="child2 padding bgColor1">
                                                <h2 style="color:#0fdc80;" class="red--text text--darken-4">8 PM onwards</h2>
                                                <p style="color:lightgrey;" class="grey--text">Timing</p>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
                <v-col md="3" offset-md="3" id="about">
                    <h4 class="white--text">SIMILAR EVENTS</h4>
                    <p class="grey--text">Completed under FLEXI subject</p>
                </v-col>
                <v-col md="3" class="text-end">
                    <router-link :to="{ path: '/EventsPage' }"><v-btn tile color="#0fdc80" class="text-black" dark> View All </v-btn></router-link>
                </v-col>
                <v-col md="3" offset-md="3">
                    <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
                        <v-img src="../data/3.png" contain max-height=""></v-img>
                    </v-card>
                </v-col>
                <v-col md="3">
                    <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
                        <v-img src="../data/2.png" contain max-height=""></v-img>
                    </v-card>
                </v-col>
                <v-col md="3" offset-md="3">
                    <br />
                    <router-link :to="{ path: '/EventsPage/3' }"><v-btn color="#0fdc80" dark text class="text-white">
                        know more
                        <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn></router-link>
                </v-col>
                <v-col md="3">
                    <br />
                    <router-link :to="{ path: '/EventsPage/2' }"><v-btn color="#0fdc80" dark text class="text-white">
                        know more
                        <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn></router-link>
                </v-col>
                <v-col md="3" offset-md="3">
                    <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
                        <v-img src="../data/4.png" contain max-height=""></v-img>
                    </v-card>
                </v-col>
                <v-col md="3">
                    <v-card class="pa-2 py-12" outlined tile height="250px" color="#1E1E1E">
                        <v-img src="../data/5.png" contain max-height=""></v-img>
                    </v-card>
                </v-col>
                <v-col md="3" offset-md="3">
                    <br />

                    <router-link :to="{ path: '/EventsPage/4' }"><v-btn color="#0fdc80" dark text  class="text-white">
                        know more
                        <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn> </router-link>
                </v-col>
                <v-col md="3">
                    <br />
                    <router-link :to="{ path: '/EventsPage/5' }"><v-btn color="#0fdc80" dark text class="text-white">
                        know more
                        <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn></router-link>
                </v-col>
                <v-col cols="12" class="padd topInverse">
                    <div class="second">
                        <div class="secondchild1" id="contact">
                            <v-row>
                                <v-col cols="7">
                                    <h1 style="color:white;">
                                        Let's work together on<br />your next project
                                    </h1>
                                    <p style="color:lightgrey;">
                                        Fill up your basic information & about your EVENT
                                        Gear up your EVENTS with us! <br />
                                    </p>
                                </v-col>
                                <v-col cols="5">
                                    <v-btn tile color="#0fdc80" dark class="mt-16">
                                        Contact
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                    <v-toolbar class="topTolbar" color="lightgrey" dark flat>
                        <div style="
                        position: absolute;
                        margin-left: auto;
                        margin-right: auto;
                        left: 0;
                        right: 0;
                        text-align: center;
                      ">
                            <router-link :to="{ path: '/' }"><v-btn text class="text-black">Home</v-btn></router-link>
                            
                            <router-link :to="{ path: '/' }"><v-btn text class="text-black" @click="scroll('about')" >About</v-btn></router-link>
                        </div>
                    </v-toolbar>
                </v-col>
            </v-row>
        </v-container>
        <FooterBar />
</v-app>
</template>

<script>

import FooterBar from '../components/FooterBar'
import booksList from '../data/book.json'
    export default {
        data: () => ({
            id: 0,
            books: {}
    }),
    components: {
      FooterBar
    },
    mounted () {
            this.id= this.$route.params.id;
            if(this.id !=0){
                this.books = booksList.find(rec => rec._id == this.id)
            }
        },
    }
</script>

<style lang="scss" scoped>
.top {
  margin-top: 180px;
}
.topInverse {
  margin-top: -250px;
}
.topTolbar {
  margin-top: 100px;
  text-align: center;
}
.first {
  width: 100%;
  height: 610px;
  background: linear-gradient(
    to right,
    #181818,
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}
.second {
  width: 100%;
  height: 400px;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
}
.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1 {
  background-color: #3c3737;
}
.bgColor2 {
  background-color: #0fdc80;
}
.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}
.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
</style>