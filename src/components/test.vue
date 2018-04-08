<template>
  <div class="test">
    <input type="text" v-model="title"><br/>
    <h1>{{title}}</h1>
    <p v-if="showName">{{user.first_name}}</p>
    <p v-else>Nobody</p>

    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <button v-on:click="greet('helo world dog')">say greeting</button>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit"><br/>
    <hr />
    <label>First Name:</label><input type="text" v-model="user.first_name"><br/>
    <label>Last Name:</label><input type="text" v-model="user.last_name"><br/>
    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'test',
    props: {
      msg: {
        default: 'Foobar',
        type: String
      }
    },
    data() {
      return {
        title: 'hello world',
        user: {
          first_name: 'john',
          last_name: 'Doe'
        },
        showName: true,
        items: [
          {title: 'item one'},
          {title: 'item two'},
          {title: 'item three'}
        ]
      }
    },
    methods: {
      greet: function(msg) {
        alert(msg);
      },
      pressKey: function(e) {
        console.log(e.target.value);
      },
      enterHit: function(e) {
        console.log('you hit enter');
      }
    },
    computed: {
      fullName: function(){
        return this.user.first_name + ' ' + this.user.last_name;
      }
    }
  }
</script>

<style scoped>

</style>


