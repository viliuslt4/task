<template>
  <div>
    <div class="container">
      <div class="row">

        <div class="col-12 col-md-4" v-for="(phone, index) in phonesGroupList" :key="index">
          <h1>{{phone.brand}}</h1>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PhonesGroup',
  computed:{
    ...mapState([
      'mainBrand',
      'phonesGroupList'
    ]), 
  },
  mounted(){
    if(this.mainBrand === ''){
      this.$router.push('/');
    } else{
      this.$store.dispatch('loadPhonesGroup')
    }
  },
}
</script>
