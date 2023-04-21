<template >
  <v-footer dark padless>
    <v-card flat tile class="black white--text py-12 px-5" width="100%">
      <v-row>
        <v-col cols="12" sm="4">
          <v-card-text class="white--text pt-0">
            <h3>List Your Show</h3>
            <p> Got a Show, Event, Activity or great experience? <br />
              Partner with us & get listed on SYMBOOTH EVENTS</p>
            <br />
            <v-btn color="grey">Contack Today</v-btn>
          </v-card-text>
          <v-card-text class="grey--text pt-0">
            For organizing your personalised evnet at your college ?
            Just Fill Up some details and publish your event at our site,
            And let others know about it and book it!
          </v-card-text>
          <v-toolbar flat color="transparent">
            <h5>Guides</h5>
            <h5 class="ml-4">Terms of Use</h5>
            <h5 class="ml-4">Privacy Policy</h5>
          </v-toolbar>
          <v-card-text class="grey--text"> &#169; 2021 -2022 </v-card-text>
        </v-col>
        <v-col cols="12" sm="2">
          <v-card-text class="white--text pt-0">
            <h3>Get Help</h3>
          </v-card-text>
          <v-card-text class="grey--text"> Order Status </v-card-text>
          <v-card-text class="grey--text mt-n4">
            Shipping and Delivery
          </v-card-text>
          <v-card-text class="grey--text mt-n4"> Payment Options </v-card-text>
          <v-card-text class="grey--text mt-n4"> Contact US </v-card-text>
        </v-col>
        <v-col cols="12" sm="2">
          <v-card-text class="white--text pt-0">
            <h3>About US</h3>
          </v-card-text>
          <v-card-text class="grey--text"> Careers </v-card-text>
          <v-card-text class="grey--text mt-n4"> Sustainability </v-card-text>
          <v-card-text class="grey--text mt-n4"> Service </v-card-text>
          <v-card-text class="grey--text mt-n4">
            CA Supply Chains Act
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="4">

          <v-card-text class="grey--text mt-14"> Payment Methods: </v-card-text>

          <v-toolbar flat color="transparent">

            <v-card-text align="center">
              <v-btn v-for="icon in picons" :key="icon" class="mx-4 white--text" icon>
                <v-icon size="24px">
                  {{ icon }}

                </v-icon>
              </v-btn>
            </v-card-text>
          </v-toolbar>
        </v-col>
      </v-row>
      <v-row>
        <v-card-text align="center">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">
              {{ icon }}

            </v-icon>
          </v-btn>
        </v-card-text>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    picons: ["mdi-cash", "mdi-credit-card", "mdi-google","mdi-account"]
  }),
  myStyle: {
    backgroundColor: "grey"
  }
};
</script>

<style>
.hire {
  width: 100%;
  height: 300px;
  padding-top: 300px;
  background-color: #e9e9e9;
  margin-top: 0px;
}
</style>