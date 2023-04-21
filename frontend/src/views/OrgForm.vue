<template>
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
        <button type="submit">Submit</button>
      </form>
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
          eventCity: ''
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

h3 {
    font-size: 21px;
    position: relative;
    left: 37px;
}

.form-container {
    max-width: 400px;
    margin: 0 auto;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 28px;


  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button[type="submit"] {
    padding: 0.5rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  </style>
  