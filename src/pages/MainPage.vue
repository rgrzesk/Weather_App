<template>
<div>
    <base-block class="topbl">
<section>
    <label>Enter city name to check latest weather forecast: </label>
    <input type='text' id="search" 
    v-model="inputcity" 
    placeholder=" Search ...">
    <button @click="getWeather()">Check</button>
</section>
    </base-block >

<transition name="mainanimation">
    <base-block v-if=" typeof weather.main != 'undefined' " class="mainbl">
    <section> 
        <div class = "location">{{weather.name}},{{weather.sys.country}}</div>
        <div>
            <h1>
            {{ Math.round(weather.main.temp) }}
            </h1>
        </div>
        <div src></div>
        <div>{{ weather.weather[0].description }} </div>
</section>
</base-block>
</transition>
</div>
</template>

<script>

export default{
    data(){
        return{
        weather: {
        },
        url_base:'https://api.openweathermap.org/data/2.5/',
        apiKey:'693e2fc6b5ee1eb27f70d56242253ea2',
        inputcity:'',
        };
    },
    methods:{
        getWeather(){
            console.log(`${this.url_base}weather?q=${this.inputcity}&units=metric&APPID=${this.apiKey}`);
            fetch(`${this.url_base}weather?q=${this.inputcity}&units=metric&APPID=${this.apiKey}`)
            .then(response =>{
                return response.json();
            }).then(this.setResults);
        },
        setResults(results){
            this.weather=results;
        }
    },

};
</script>

<style scoped>

h1{
    font-size:50px;
    font-weight:300;
}
.topbl{
    background-color:lightblue ;
}
.mainbl{
    min-height:20rem;
    background-color:lightblue ;
    

}
    
#search{
    margin:5px;
    font-size:12px;
    padding:5px;
    background-color: rgba(209, 198, 198, 0.5);
    border:none;
    border-radius: 5px;
    transition:0.5s;
}

.mainanimation-enter-active{
animation: mainanimation 0.5s ease-out;
}


@keyframes mainanimation{
  from{
    opacity:0;
    transform: scale(0.8);
  }
  to{
 opacity:1;
 transform: scale(1);
  }
}
</style>