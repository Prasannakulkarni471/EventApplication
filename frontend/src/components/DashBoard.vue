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
              <v-icon color="#7C92FE">fs-right-arrow</v-icon>
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
                <v-btn rounded color="#4C9CDB" dark class="withoutupercase px-8 mt-10">
                  More Info
                </v-btn>
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
                <v-btn rounded color="#8375E7" dark class="withoutupercase px-8 mt-3">
                  More Info
                </v-btn>
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
        <v-card class="mt-n6 pr-0" width="300">
          <v-list v-model:opened="open">
            <v-list-item prepend-icon="mdi-home" title="Customize your Filters"></v-list-item>

            <v-list-group value="Filters">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Filters"></v-list-item>
              </template>

              <v-list-group value="Dates">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="Dates"></v-list-item>
                </template>

                <v-list-item v-for="([title, icon], i) in admins" :key="i" :title="title" :prepend-icon="icon"
                  :value="title"></v-list-item>
              </v-list-group>

              <v-list-group value="Actions">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="Languages"></v-list-item>
                </template>

                <v-list-item v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title"
                  :prepend-icon="icon"></v-list-item>
              </v-list-group>
              <v-list-group value="Actions">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="categories"></v-list-item>
                </template>

                <v-list-item v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title"
                  :prepend-icon="icon"></v-list-item>
              </v-list-group>
              <v-list-group value="Actions">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="More Filter"></v-list-item>
                </template>

                <v-list-item v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title"
                  :prepend-icon="icon"></v-list-item>
              </v-list-group>
              <v-list-group value="Actions">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="Price"></v-list-item>
                </template>

                <v-list-item v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title"
                  :prepend-icon="icon"></v-list-item>
              </v-list-group>
            </v-list-group>
          </v-list>
        </v-card>
        <v-col cols="9" class="mt-n3">
          <v-row>
            <v-col cols="12" sm="4" v-for="(clothe, i) in clothes" :key="i" :class="clothe.class">
              <v-hover v-slot:default="{ hover }">
                <v-card height="300" align="center" flat outlined tile>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="black" small dark>{{ clothe.sold }}</v-btn>
                  </v-card-actions>
                  <router-link :to="{ path: '/EventDesc' }"><v-img :src="clothe.image" width="200" height="200" contain></v-img></router-link>
                  <v-card-text class="mt-n4">
                    <strong :class="hover ? 'red--text' : 'black--text'">{{
                      clothe.title
                    }}</strong>
                  </v-card-text>
                  <v-expand-transition>
                    <div v-if="hover" class="
                            d-flex
                            transition-fast-in-fast-out
                            blue
                            v-card--reveal
                            display-3
                            white--text
                          " style="height: 100%">
                      <v-btn rounded color="white">
                        <v-icon>mdi-cart-outlined</v-icon>
                        Buy
                      </v-btn>
                      <v-btn fab small color="white" class="ml-2">
                        <v-icon color="black">mdi-content-copy</v-icon>
                      </v-btn>
                      <v-btn fab small color="white" class="ml-2">
                        <v-icon color="black">mdi-heart-outline</v-icon>
                      </v-btn>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-hover>
            </v-col>
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
        href: "UserPage",
      },
      {
        text: "Contact",
        disabled: false,
        href: "ContactUs",
      },
    ],
    clothes: [
        {
          class: "pa-0",
          sold: "-20%",
          image: "1.png",
          title: "KD 8 EXT",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          sold: "-30%",
          image: "2.png",
          title: "Jordan Galaxy",
          price: "$ 599.00",
        },
        {
          class: "py-0 pl-0",
          sold: "-17%",
          image: "3.png",
          title: "Nike SB Trainerendor Leathe",
          price: "$ 190.00",
        },
  
        {
          class: "pa-0",
          sold: "-22%",
          image: "4.png",
          title: "Air Jordan Spike 40 iD",
          price: "$ 220.00",
        },
        {
          class: "pa-0",
          sold: "-18%",
          image: "5.png",
          title: "Nike Air Footscape Magista Flyknit",
          price: "$ 235.00",
        },
        {
          class: "py-0 pl-0",
          sold: "-40%",
          image: "6.png",
          title: "Nike Air Zoom Huarache 2k4",
          price: "$ 190.00",
        },
  
        {
          class: "pa-0",
          sold: "-13%",
          image: "7.png",
          title: "Jordan Horizon",
          price: "$ 230.00",
        },
        {
          class: "pa-0",
          sold: "-15%",
          image: "8.png",
          title: "Air Jordan xx9 Low",
          price: "$ 185.00",
        },
        {
          class: "py-0 pl-0",
          sold: "-10%",
          image: "9.png",
          title: "LeBron XIII Premium AS iD",
          price: "$ 265.00",
        },
        {
          class: "pa-0",
          sold: "-19%",
          image: "10.png",
          title: "Air Jordan 1 Retro Hight Nouveau",
          price: "$ 190.00",
        },
        {
          class: "pa-0",
          sold: "-16%",
          image: "11.png",
          title: "Nike Air Presto",
          price: "$ 175.00",
        },
        {
          class: "py-0 pl-0",
          sold: "-10%",
          image: "12.png",
          title: "KD 8 Premium AS iD",
          price: "$ 245.00",
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