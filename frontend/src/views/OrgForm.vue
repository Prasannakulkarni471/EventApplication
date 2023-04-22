<template>
  <div class="whole-page">
    <div class="form-container">
      <h3>Please fill in the following details</h3>
      <form @submit.prevent="submitForm">
        
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" v-model="formData.phone" />
        </div>
        <div class="form-group">
          <label for="event-region">Event Region</label>
          <input type="text" id="event-region" v-model="formData.eventRegion" />
        </div>
        <div class="form-group">
          <label for="event-city">Event City</label>
          <input type="text" id="event-city" v-model="formData.eventCity" />
        </div>
        <div class="form-group">
          <label for="event-desc">Event Description</label>
          <input class="form-group-desc" type="text" id="event-desc" height="300" v-model="formData.eventdesc" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          phone: '',
          eventRegion: '',
          eventCity: '',
          eventdesc:''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log('Form data:', this.formData);
        // You can send the form data to a backend API for processing
      }
    }
  };
  </script>
  
  <style scoped>

.whole-page {
    background: linear-gradient(#395487, #243b55);
    height: 100%;
}

h3 {
    font-size: 21px;
    position: relative;
    left: 37px;
    color: white;
    top: 81px;
    

}

.form-container {
    max-width: 400px;
    margin: 0 auto;
   
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 128px;


  }
  
  .form-group {
    display: flex;
    flex-direction: column;

  }
  .form-group-desc{
    display: flex;
    flex-direction: column;
    height:200px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: white;
  }
  
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: white;
  }
  
  button[type="submit"] {
    /* padding: 0.5rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer; */
    
    width: 133px;
    height: 46px;
    margin: 19px 174px;
    border-radius: 10px;
    cursor: pointer;
    background: #03e9f4;
    box-shadow: inset 0 0 0 #393131;
    transition: ease-out 0.8s;
    outline: none;
    position: relative;
    right: 172px;
  }
  
  button[type="submit"]:hover {
    /* background-color: #06d8e3; */
    /* color: #03d1dc; */
    box-shadow: inset 300px 0 0 0 #03e9f4;

  }
  </style>
  