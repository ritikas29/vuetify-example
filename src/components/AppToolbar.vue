<template>
<div>
  <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
  <v-toolbar color="indigo" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">New</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
        <router-link to="/about"></router-link>
     <v-btn flat>About </v-btn>
     <router-link to ="/contact">
      <v-btn flat>Contact</v-btn>
      <router-link to="/login">
      <v-btn flat>Login   </v-btn>
      </router-link>
    </div>
  </v-toolbar>
  </div>
</template>
<script>
export default{
  name:'app',
  components:{

  }
}
</script>
<style>

</style>