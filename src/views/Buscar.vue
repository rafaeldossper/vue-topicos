<template>
    <div>
        <p>Pesquise: <input type="text" v-model="busca"/><button @click="Buscar">Buscar</button></p>
    </div>
    <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Texto</th>
            <th>Usuário</th>
          </tr>
        </thead>
    <tbody>
        <tr v-for="texto in textos" :key="texto.id">
          <td>{{ texto.id }}|</td>
          <td>{{ texto.texto }}|</td>
          <td>{{ texto.usuario.nome}}</td>
        </tr>
      </tbody>
      </table>
  </template>

  <script>
  import axios from 'axios'
  import {mapState} from 'vuex'
  
  export default {
    name: 'buscarView',
    data() {
        return {
    busca:'',
        textos :[]
        }
    },
    computed: {
        ...mapState(['token'])
    },
    methods: {
        Buscar(){
            axios.get('anotacao/' + this.busca)
                .then(res => {
                console.log(res)
                this.textos = res.data
                })
                .catch(error => console.log(error))
        }
    }
  }
  </script>