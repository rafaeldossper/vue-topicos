<template>
  <div>
      <p>Nova anotacao: <input type="text" v-model="anotacao"/><button @click="novaAnotacao">salvar</button></p>
      <p><button @click="Listar">Listar</button></p>
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
  name: 'anotacaoView',
  data() {
      return {
  anotacao:'',
      textos :[]
      }
  },
  computed: {
      ...mapState(['token'])
  },
  methods: {
      Listar(){
          axios.get('anotacao')
              .then(res => {
              console.log(res)
              this.textos = res.data
              })
              .catch(error => console.log(error))
      },
      novaAnotacao() {
          axios.post('anotacao',
              {
                  texto: this.anotacao,
              })
              
              .then(response => {
                  console.log(response);
                  this.Listar();
              })

      }
  }
}
</script>
