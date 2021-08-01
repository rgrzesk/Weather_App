

<template>
  <div>
  
 <base-error :showErr="isErr === true " problem="Error" @close="closeError">
  <a>{{error}}</a>
 </base-error>


    <base-block class="topbl">
      <section>
        <label>Enter city name to check latest weather forecast: </label>
        <input
          type="text"
          id="search"
          v-model="inputCity"
          placeholder=" Search ..."
        />
        <button @click="getWeather()">Check</button>
      </section>
    </base-block>

    <transition name="mainanimation">
      <base-block v-if="typeof weather.main != 'undefined'" class="mainbl">
        <section>
          <div class="location">
            {{ weather.name }},{{ weather.sys.country }}
          </div>
          <div>
            <h1>
              {{ Math.round(weather.main.temp) }} &deg;C
            </h1>
          </div>
          <img v-bind:src="image"/>
          <div>{{ weather.weather[0].description }}</div>
        </section>
      </base-block>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weather: {},
      url_base: 'https://api.openweathermap.org/data/2.5/',
      apiKey: '693e2fc6b5ee1eb27f70d56242253ea2',

      inputCity: '',
      image: '',
      error:null,
      loading:false,
      isErr:false,
    };
  },
    methods: {
    getWeather() {
      if ( this.inputCity.trim()===""){
        this.isErr=true;
        this.error="Input is empty! Enter city name.";
        const error = new Error("Input is empty! Enter city name.");
        throw error;
        } else {
      console.log(
        `${this.url_base}weather?q=${this.inputCity}&units=metric&APPID=${this.apiKey}`
      );
      fetch(
        `${this.url_base}weather?q=${this.inputCity}&units=metric&APPID=${this.apiKey}`
      )
        .then((response) => {
            if(!response.ok){
                this.isErr= true;
                this.error="Something went wrong! This city doesn't exist.";
                const error = new Error("Something went wrong! This city doesn't exist.");
                throw error;
            }else{
          return response.json();
            }
        })
        .then(this.setResults);
        }
    },
    setResults(results) {
      this.weather = results;
      this.image = `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@4x.png`
      console.log(this.image);
      
    },
    
    closeError(){
      this.isErr= false;
      this.error = null;
    }
  },
};

</script>

<style scoped>
h1 {
  font-size: 50px;
  font-weight: 300;
}
img{
  margin:0px;
}

.topbl {
  background-color: lightblue;
}
.mainbl {
  min-height: 20rem;
  background-color: lightblue;
}

#search {
  margin: 5px;
  font-size: 12px;
  padding: 5px;
  background-color: rgba(209, 198, 198, 0.5);
  border: none;
  border-radius: 5px;
  transition: 0.5s;
}

.mainanimation-enter-active {
  animation: mainanimation 0.5s ease-out;
}

@keyframes mainanimation {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>