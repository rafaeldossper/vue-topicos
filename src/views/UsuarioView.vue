<template>
    <div id="usuario">
        <ul>
            <li v-for="(usuario, index) in usuarios" :key="index">{{usuario.nome}}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'

export default {
    name: 'usuarioView',
    data() {
        return {
            usuarios: [{nome: 'Teste'}, {nome: 'Teste2'}]
        }
    },
    computed: {
        ...mapState(['token'])
    },
    methods: {
        atualizar() {
            axios.get('usuario',
                { 
                    headers: {
                        Authorization: this.token
                    }
                })
                .then(res => {
                    this.usuarios = res.data;
                })
                .catch(error => { console.log(error) });
        }
    },
    created() {
        this.atualizar();
    }
}
</script>
