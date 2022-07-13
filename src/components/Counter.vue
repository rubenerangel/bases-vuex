<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.counter.count }}</h2>
  <h2>Count computed: {{ countComputed }}</h2>

  <button @click="increment">+ 1</button>
  <button @click="incrementBy">+ 5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">Random</button>


  <h1>mapSate</h1>
  <h2>mapSate: {{ count }}</h2>

  <h1>lastMutation</h1>
  <h2>lastMutation: {{ lastMutation }}</h2>

  <h1>Getter</h1>
  <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  methods: {
    increment() {
      this.$store.commit('counter/increment')
    },
    incrementBy() {
      this.$store.commit('counter/incrementBy', 5)
      // this.randomico()
    },
    // incrementRandomInt() {
    //   this.$store.dispatch('incrementRandomInt' )
    // }
    ...mapActions('counter', ['incrementRandomInt'])
    // ...mapActions(counter, {
    //   randomico: 'incrementRandomInt'
    // })
  },
  // computed: mapState(['count'])
  computed: {
    countComputed() {
      return this.$store.state.counter.count
    },
    ...mapState('counter', ['count', 'lastMutation', 'isLoading']),
    // ...mapState({
    //   count: state =>state.count,
    //   lastMutation: state =>state.lastMutation
    // }),
  }
}
</script>
