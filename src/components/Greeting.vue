<template>
  <div>
    <input type="text" v-model="name" />
    <h4>{{ greeting }}</h4>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: ''
    }
  },
  computed: {
    greeting: function() {
      return `Hello, ${this.name}!`
    }
  }

}
</script>