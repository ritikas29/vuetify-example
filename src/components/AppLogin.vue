<template>
  <v-form v-model="valid">
    <v-container>
      <v-alert
      :value="alert"
      type="warning" color="lime"
    >
      Please fill details properly
    </v-alert>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn class="success" color="green" type="submit" v-on:click="submit()">Submit</v-btn>
  </v-form>
</template>
<script>
  export default {
    data(){
      return{
          firstname:null,
          lastname:null,
          email:null,
          alert:false
      }
    },
    methods: {
      submit() {
        if(!this.firstname && !this.lastname && !this.email) {
          this.alert= true
        }
        console.log(`firstname is $(this.firstname) and lastname is $(this.lastname) and email is $(this.email)`)
      }
    }

  }
</script>