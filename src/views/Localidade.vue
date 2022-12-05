<template>
    <div id="localidade">
        <p>Nova Localidade:</p>
        <p>Latitude: <input type="text" v-model="latitude"/></p>
        <p>Longitude: <input type="text" v-model="longitude"/></p>
        <p>Descrição: <input type="text" v-model="descricao"/></p>
        <p>{{status}}</p>
        <button @click="novaLocalidade">Ok</button>
        <p>Buscar por Descrição: <input type="text" v-model="busca"/><button @click="Buscar">Buscar</button></p>
        <p><button @click="Listar">Listar</button></p>
        
    </div>
    <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Descrição</th>
          </tr>
        </thead>
    <tbody>
        <tr v-for="localidade in localidades" :key="localidade.id">
          <td>{{ localidade.id }}|</td>
          <td>{{ localidade.latitude }}|</td>
          <td>{{ localidade.longitude }}|</td>
          <td>{{ localidade.descricao}}</td>
        </tr>
      </tbody>
      </table>
  </template>
  
  <script>
  import axios from 'axios'
  import {mapState} from 'vuex'
  
  
  export default {
    name: 'anotacaoView',
    
    data() {
        return {
            
    localidades :[],
    latitude:'',
    longitude:'',
    descricao:'',
    busca: ''
        }
    },
    computed: {
        ...mapState(['token'])
    },
    methods: {
        Listar(){
            axios.get('localidade')
                .then(res => {
                console.log(res)
                this.localidades = res.data
                })
                .catch(error => console.log(error))
        },
        novaLocalidade() {
            axios.post('localidade',
                {
                    latitude: this.latitude,
                    longitude: this.longitude,
                    descricao: this.descricao
                })
                
                .then(response => {
                    console.log(response);
                    this.Listar();
                })
  
        },
        Buscar(){
          axios.get('localidade/' + this.busca)
              .then(res => {
              console.log(res)
              this.localidades = res.data
              })
              .catch(error => console.log(error))
      }
    },
    created() {
        this.Listar();
    }
  }
  </script>
  