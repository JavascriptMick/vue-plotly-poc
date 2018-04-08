<template>
  <div class="users">
    <h1>users</h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="enter name">
      <br/>
      <input type="text" v-model="newUser.email" placeholder="enter email">
      <br/>
      <button type="submit">Submit</button>
    </form>
    <ul>
      <li v-for="user in users">
        <input type="checkbox" v-model="user.contacted">
        <span v-bind:class="{contacted: user.contacted}">

        name:{{user.name}} email:{{user.email}} <button v-on:click="deleteUser(user)">x</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'users',
    data() {
      return {
        users: [
        ],
        newUser: {}


      }
    },
    methods: {
      addUser: function(e) {
        e.preventDefault();
        this.users.push({name: this.newUser.name, email: this.newUser.email, contacted: false})
        console.log('add user');
      },
      deleteUser: function(user) {
        this.users.splice(this.users.indexOf(user), 1)
      }

    },
    created: function() {
      this.$http.get('http://jsonplaceholder.typicode.com/users').then(function(response) {
        this.users = response.data;
      })
    }
  }
</script>

<style scoped>
  .contacted{
    text-decoration: line-through;
    color: red
  }
</style>


