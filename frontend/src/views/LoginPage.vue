<template>
<div class="center">
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >Sign in to SymBooth</h1>
                        
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"

                            v-model="email"
                            

                            prepend-icon="mdi-email"
                            type="text"
                            color="teal accent-3"
                            :rules="[v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'Email must be valid']"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"

                            v-model="password"
                            
                            prepend-icon="mdi-lock"
                            type="password"
                            color="teal accent-3"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Forgot your password ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="teal accent-3" dark @click="login()">SIGN IN</v-btn>
                        <div v-if="errorMessage">{{ errorMessage }}</div>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                        <h5
                          class="text-center"
                        >Enter your personal details and start journey with us</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5
                          class="text-center"
                        >To Keep connected with us please login with your personnel info</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">Sign in</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">Create Account</h1>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <v-form>
                          <v-text-field
                            label="Name"
                            name="Name"
                            v-model="username"
                            prepend-icon="mdi-account"
                            type="text"
                            color="teal accent-3"
                            :rules="[rules.required]"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            v-model="email"
                            :rules="[rules.required, v => /.+@.+\..+/.test(v) || 'Email must be valid']"
                            prepend-icon="email"
                            type="text"
                            color="teal accent-3"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            v-model="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="teal accent-3"
                            :rules="[rules.required, rules.minLength, rules.password]"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="teal accent-3" dark @click="signup()">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'
export default {
  data: () => ({
    rules: {
      required: (v) => !!v || 'This field is required',
      minLength: (v) => v.length >= 8 || 'Minimum length is 8 characters',
      maxLength: (v) => v.length <= 20 || 'Maximum length is 20 characters',
      password:  (v) => /.*[@#$%^&+=!.].*/.test(v) || 'Password must contain at least one special character (@#$%^&+=!)'
  
    },
    step: 1,
    username:"",
    password: "",
    email: "",
    errorMessage: ''
  }),
  props: {
    source: String
  },
  methods: {
    async signup(){
      await axios.post("http://localhost:5000/insert", {name: this.username, password: this.password, email: this.email})
      this.$router.push('/eventspage')
    },
    async login() {
      try {
        const response = await axios.post("http://localhost:5000/login", {
          email: this.email,
          password: this.password
        })
        const token = response.data.token;
        localStorage.setItem("token", token);
        this.$router.push("/eventspage"); // Redirect to the events page
      } catch (error) {
    if (error.response && error.response.status === 400) {
      this.errorMessage = "Incorrect username/password. Please try again.";
    }
      else {
      this.errorMessage = "An error occurred while logging in. Please try again later.";
    }
    console.log(this.errorMessage);
  }
    },


  },
};
</script>

<style lang="scss" scoped>

.center {
  position: relative;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 50px;
  padding-right: 50px;
  padding-left: 50px;  
}
</style>