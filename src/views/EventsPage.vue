<template>
  <div>
    <v-app-bar app color="black" dark flat class="px-12">
       <v-btn>
        <v-icon color="indigo" left class="mr-2">fas fa-signature</v-icon>SymBooth
       </v-btn> 
       <v-app-bar-title class="center">SymBooth Events</v-app-bar-title>
       <router-link :to="{ path: '/' }"><v-btn text >Home</v-btn></router-link>
       <router-link :to="{ path: '/LoginPage' }"><v-btn text class="text-white">LogIn</v-btn></router-link>
       <router-link :to="{ path: '/SignupPage' }"><v-btn text class="text-white" >SignUp</v-btn></router-link>
    </v-app-bar>
  </div>
  <div class="hire">
          <v-row>
            <v-col cols="12" sm="8">
              <h1 class="mt-9">Enter Your Institute</h1>
              <p class="text-grey">
                To list organised events or fests in your college/institute<br>
                Enter you institue name:
              </p>
            </v-col>
          </v-row>
        </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.center{
  text-align: center  
}
.hire {
  width: 100%;
  height: 200px;
  padding: 0 200px;
  background-color: #e9e9e9;
  margin-top: -24px;
}
</style>