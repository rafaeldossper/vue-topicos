<template>
  <div >
      <p>Pesquise: <input type="text" v-model="busca"/><button @click="Buscar">Buscar</button></p>
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
  name: 'descricaoView',
  data() {
      return {
  busca:'',
  localidades :[]
      }
  },
  computed: {
      ...mapState(['token'])
  },
  methods: {
      Buscar(){
          axios.get('localidade/' + this.busca)
              .then(res => {
              console.log(res)
              this.localidades = res.data
              })
              .catch(error => console.log(error))
      }
  }
}
</script>