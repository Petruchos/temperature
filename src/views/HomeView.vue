<template>
  <div class="home">
    <h1>Weather app</h1>
    <p>Know the weather in {{ city =="" ? "your city" : cityName }}</p>
    <input type="text" placeholder="Type the city" v-model="city">
    <button v-if="city != ''" @click="getWeather()">Get the weather</button>
    <button disabled v-else>Type the name of the city</button>
    <p class = "error">{{error}}</p>
    <p v-if="Object.keys(info).length != 0"> Temperature: {{info.main.temp}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import axios from 'axios'


@Component({
  components: {
  }
})


export default class HomeView extends Vue {
  city = ""
  error = ""
  info = {}

  getWeather(){
    if(this.city.trim().length < 2){
      this.error = "The name must contain at least 2 characters"
      return false;
    }
    else{
      this.error = ""
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=93594c5a585abbf29251dec69c8af377`)
          .then(res => (this.info = res.data))
    }

  }

  get cityName(){
    return "'" + this.city + "'"
  }

}
</script>
