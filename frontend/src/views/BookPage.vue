<template>
    <div class="container">
  <div class="row header">
    <h1>Book Event &nbsp;</h1>
    <h3>Fill out the form below!</h3>
  </div>
  <div class="row body">
    <form @submit.prevent="submitForm">
      <ul>
        
        <li>
          <p class="left">
            <label for="first_name">First name</label>
            <input type="text" name="first_name" placeholder="John" v-model="formData.firstName" />
          </p>
          <p class="pull-right">
            <label for="last_name">Last name</label>
            <input type="text" name="last_name" placeholder="Smith" v-model="formData.lastName"/>      
          </p>
        </li>
        
        <li>
          <p>
            <label for="email">Email <span class="req">*</span></label>
            <input type="email" name="email" placeholder="john.smith@gmail.com" v-model="formData.email"/>
          </p>
        </li>        
        <li><div class="divider"></div></li>
        <li>
          <label for="comments">Comments</label>
          <textarea cols="46" rows="3" name="comments" v-model="formData.comments"></textarea>
        </li>
        
        <li>
          <input type="hidden" name="event_id" v-model="formData.eventId" />
          <input class="btn btn-submit" type="submit" value="Submit" />

          <label v-if="confirmMessage">{{ confirmMessage }}</label>
        <label v-if="timer">{{ timer }}</label>
        </li>
        
      </ul>
    </form>  
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        comments: '',

      },
      confirmMessage: '',
        timer: ''
    }
  },

  methods: {
    async submitForm() {
      try {
        console.log(this.formData.eventId)
        const response = await axios.post('http://localhost:5000/register-event', this.formData);
        console.log(response);

        this.confirmMessage = "Event Booking has been done successfuly! \n Redirecting to events page...";

        // Reset form data on successful submission
        this.formData = {
          firstName: '',
          lastName: '',
          email: '',
          comments: ''
        };
        

        let countDown = 5
        const timer = setInterval(() => {
      countDown--;
      console.log(countDown);
      this.timer = countDown;
      if (countDown === 0) {
        clearInterval(timer);
        this.$router.push('/eventspage');
      }
    }, 1000);

      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="scss" scoped>


// Font imports

@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);

// Color vars

$white: #fff;
$grey: #ccc;
$dark_grey: #555;
$blue: #4f6fad;
$pink: #ee9cb4;

// Mixins

@mixin lato-book { font-family: 'Lato', sans-serif; font-weight: 300; }
@mixin lato-reg { font-family: 'Lato', sans-serif; font-weight: 400; }
@mixin lato-bold { font-family: 'Lato', sans-serif; font-weight: 700; }
@mixin btn($color) {
  background-color: $color;
  border-bottom-color: darken($color, 15%);
  &:hover {
      background-color: lighten($color, 5%);
    }
}

// Functions

@function pxtoem($target, $context){
  @return ($target/$context)+0em;
}

//

body {
  background-color: lighten($grey, 10%);
  font-size: 100%;
  @include lato-reg;
}

.container {  
  max-width: 510px;
  min-width: 324px;
  margin: 50px auto 0px;
  background-color: $white;
  border: 1px solid lighten($grey, 1%); 
  border-bottom: 3px solid $grey;
}
.row {
  width: 100%;
  margin: 0 0 1em 0;
  padding: 0 2.5em;
  &.header {
    padding: 1.5em 2.5em;
    border-bottom: 1px solid $grey; 
    // Yaha pe bg image change karna
    background: url("https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/gallery_promo_image/InVision_Shaklee_Global_Live.jpg?itok=huOoiSZJ") left -80px;
    color: $white;
  }
  &.body {
    padding: .5em 2.5em 1em;
  }
}
.pull-right {
  float: left; 
}
h1 {
  @include lato-book;
  display: inline-block;
  font-weight: 100;
  font-size: 3.8125em;
  border-bottom: 1px solid hsla(100%, 100%, 100%, 0.3);
  margin: 0 0 0.1em 0;
  padding: 0 0 0.4em 0;
}
h3 {
  @include lato-reg;
  font-size: pxtoem(20, 16);
  margin: 1em 0 0.4em 0;
}
.btn {
  font-size: pxtoem(17, 16);
  display: inline-block;
  padding: 0.74em 1.5em;
  margin: 1.5em 0 0;
  color: $white;
  border-width: 0 0 0 0;
  border-bottom: 5px solid;
  text-transform: uppercase;
  @include btn(darken($grey, 10%));
  @include lato-book;
  &.btn-submit {
    @include btn($blue);
  }
}

form {
  max-width: 100%;
  display: block;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      margin: 0 0 0.25em 0; 
      clear: both;
      display: inline-block;
      width: 100%;
      &:last-child {
          margin: 0;    
        }
        p {
          margin: 0;
          padding: 0;
          float: left;
          &.right {
            float: right;
          }
        }     
        .divider {
          margin: 0.5em 0 0.5em 0;
          border: 0;
          height: 1px;
          width: 100%;
          display: block;
          background-color: $blue;
          background-image: linear-gradient(to right, $pink, $blue);
        }
        .req {
          color: $pink; 
        }
    }
  }
  label {
    display: block;
    margin: 0 0 0.5em 0;
    color: $blue;
    font-size: pxtoem(16, 16);
  }
  input {
    margin: 0 0 0.5em 0;
    border: 1px solid $grey;
    padding: 6px 10px;
    color: $dark_grey;
    font-size: pxtoem(16, 16);
  }
  textarea {
    border: 1px solid $grey;
    padding: 6px 10px;
    width: 100%;
    color: $dark_grey;
  }
  small {
    color: $blue;
    margin: 0 0 0 0.5em;
  }
}

// Media Queries

@media only screen and (max-width:480px) {
  .pull-right {
    float: none; 
  }
  input {
    width: 100%; 
  }
  label {
    width: 100%;
    display: inline-block;

    clear: both;
  }
  li, p {
   width: 100%; 
  }
  input.btn {
   margin: 1.5em 0 0.5em; 
  }
  h1 {
   font-size: pxtoem(36, 16); 
  }
  h3 {
    font-size: pxtoem(18, 16)
  }
  li small {
   display: none; 
  }
}

</style>