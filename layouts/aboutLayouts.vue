<template>
  <div>
    <Header type = '2'/>
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  export default {
    components :{
      Footer,
      Header
    }
  }
</script>


<style>



</style>
