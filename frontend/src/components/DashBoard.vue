<template>
  <v-container fluid>
    <v-card color="#3853D8" height="150px" tile flat class="d-flex align-center justify-center" dark>
      <v-row>
        <v-col cols="12" sm="12">
          <h4 class="text-center">SYMBOOTH EVENTS</h4>
        </v-col>
        <v-col cols="12" sm="12">
          <v-breadcrumbs :items="items" class="justify-center mt-n7" dark>
            <template v-slot:divider>
              <v-icon color="#7C92FE">mdi-right-arrow</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
    </v-card>
    <v-card tile class="mx-16 mt-n10 card1" color="white">
      <v-row>
        <v-col cols="12" sm="8" class="pr-0">
          <v-card height="250px" tile flat color="#3890D8">
            <v-row>
              <v-col cols="12" sm="4" class="pl-8 pt-5">
                <v-btn color="black" dark class="withoutupercase" small tile>
                  new
                </v-btn>
                <h5 class="white--text mt-8">CBC Event</h5>
                <h3 class="white--text mt-5">OWASP TOP 10 VULNERABILITIES</h3>
                <router-link :to="{ path: '/eventspage/'+13 }"><v-btn rounded color="black" dark class="withoutupercase px-8 mt-10">
                  More Info
                </v-btn></router-link>
                
              </v-col>
              <v-col cols="12" sm="8">
                <img src="https://t4.ftcdn.net/jpg/01/98/83/09/360_F_198830916_gFI9RYVWj7iHiJgmb83j7xVtbNWLpcsL.jpg"
                  max-height="400" max-width="400" contain class="mt-n6">
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4" class="pl-0">
          <v-card height="250px" tile flat color="#6857E1">
            <v-row>
              <v-col cols="12" sm="6" class="pl-8 pt-5">
                <v-btn color="black" dark class="withoutupercase" small tile>
                  Up Comming
                </v-btn>
                <h6 class="white--text mt-8">SIT, PUNE</h6>
                <h3 class="white--text mt-5">REVERS 2K23 Biggest Event in SIT</h3>
                <router-link :to="{ path: '/eventspage/'+14 }"><v-btn rounded color="black" dark class="withoutupercase px-8 mt-3">
                  More Info
                </v-btn></router-link>
              </v-col>
              <v-col cols="12" sm="6">
                <img
                  src="https://media.licdn.com/dms/image/C4D0BAQHCBG1QUjYMhw/company-logo_200_200/0/1671427011603?e=2147483647&v=beta&t=ocjmvOIdVajZA_MxQVPEFwKm8zcP79BElrVjtngKHHI"
                  max-height="400" max-width="420" contain class="mt-n2">
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        
        <v-col cols="12" class="imgHover">
          <v-row class="fill-height" align="center" justify="center">
            <template v-for="(clothe, i) in clothes" :key="i">
              <v-col cols="12" md="4">
                <v-hover v-slot="{isHovering, props}">
                  <v-card :elevation="isHovering ? 12: 2" :class="{'on-hover' : isHovering}" v-bind="props">
                    <router-link :to="{ path: '/eventspage/'+clothe.id }"><v-img :src="clothe.image" height="225px" cover></v-img></router-link>
                    <v-card-title>{{ clothe.title }}</v-card-title>
                    <v-card-subtitle>
                    Organizer : {{clothe.class}} <br /> {{clothe.class}}
                    </v-card-subtitle>
                    <v-card-text>
                    Event : {{ clothe.desc }}
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </template>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
  
<script>
export default {
  data: () => ({
    page: 1,
    open: ['Filters'],
    admins: [
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
    cruds: [
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete'],
    ],
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/",
      },
      {
        text: "User",
        disabled: false,
        href: "/UserPage",
      },
      {
        text: "Contact",
        disabled: false,
        href: "/ContactUs",
      },
    ],
    clothes: [
        {
          id: 1,
          class: "pa-0",
          sold: "-20%",
          image: "1.jpg",
          title: "Nuclear Horizon",
          price: "$ 145.00",
          desc: "Hello this event is going to be one of the awesome events"
        },
        {
          id: 2,
          class: "pa-0",
          sold: "-30%",
          image: "2.jpg",
          title: "Reside musics and standup layoff",
          price: "$ 599.00",
          desc: "Hello this event is going to be one of the awesome events"
        },
        {
          id: 3,
          class: "py-0 pl-0",
          sold: "-17%",
          image: "3.jpg",
          title: "SymBooth Launch",
          price: "$ 190.00",
          desc: "Hello this event is going to be one of the awesome events"
        },
  
        {
          id: 4,
          class: "pa-0",
          sold: "-22%",
          image: "4.jpg",
          title: "CBC Event",
          price: "$ 220.00",
          desc: "Hello this event is going to be one of the awesome events"
        },
        {
          id: 5,
          class: "pa-0",
          sold: "-18%",
          image: "5.jpg",
          title: "Music Footscape Magista Flyknit",
          price: "$ 235.00",
          desc: "Hello this event is going to be one of the awesome events"
        },
        {
          id: 6,
          class: "py-0 pl-0",
          sold: "-40%",
          image: "6.jpg",
          title: "Air Zoom Huarache 2k4",
          price: "$ 190.00",
          desc: "Hello this event is going to be one of the awesome events"
        },
  
        {
          id: 7,
          class: "pa-0",
          sold: "-13%",
          image: "7.jpg",
          title: "Tech Horizon",
          price: "$ 230.00",
          desc: "Hello this event is going to be one of the awesome events"
        },
        {
          id: 8,
          class: "pa-0",
          sold: "-15%",
          image: "8.jpg",
          title: "AIML Techfest",
          price: "$ 185.00",
          desc: "Hello this event is going to be one of the awesome events"
        },
        {
          id: 9,
          class: "py-0 pl-0",
          sold: "-10%",
          image: "9.jpg",
          title: "LeBron Premium ",
          price: "$ 265.00",
          desc: "Hello this event is going to be one of the awesome events"
        },
        {
          id: 10,
          class: "pa-0",
          sold: "-19%",
          image: "10.jpg",
          title: "Retro Hight Nouveau",
          price: "$ 190.00",
          desc: "Hello this event is going to be one of the awesome events"
        },
        {
          id: 11,
          class: "pa-0",
          sold: "-16%",
          image: "11.jpg",
          title: "Air Presto",
          price: "$ 175.00",
          desc: "Hello this event is going to be one of the awesome events"
        },
        {
          id: 12,
          class: "py-0 pl-0",
          sold: "-10%",
          image: "12.jpg",
          title: "Premium AS iD",
          price: "$ 245.00",
          desc: "Hello this event is going to be one of the awesome events"
        },
      ]
  }),
};
</script>
  
<style>
.container {
  padding: 0px !important;
}

.v-btn.withoutupercase {
  text-decoration: none;
}

.v-chip.v-size--default {
  border-radius: 50px !important;
  font-size: 14px !important;
  height: 40px !important;
  width: 40px !important;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.card1 {
  z-index: 10;
}

.card2 {
  z-index: 1;
}
</style>