<template>
    <div class="phonesList">
        <h1 class="pt-4 mb-4">{{phonesListInformation.headline}}</h1>
        <div class="container">
            <div class="row">

                <div class="col-12 col-md-4 phone-box mb-4" v-for="(phone, index) in phonesListInformation.options" :key="index">
                    
                    <div class="action-box" @click="redirectToGroup(phone.id)">
                        <img :src="phone.displayImageUrl"/>
                        <h3>{{phone.displayName}}</h3>
                    </div>

                    <button class="btn btn-primary" @click="DeleteThisPhone(index)" >Delete</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
    name: 'PhonesList',
    computed:{
        ...mapState([
            'phonesListInformation'
        ])
    },
    mounted(){
        this.$store.dispatch('loadPhonesList')
    },
    methods:{
            ...mapActions([
                'removePhoneFromList'
            ]),
            ...mapMutations([
                'SET_MAIN_BRAND'
            ]),
            DeleteThisPhone(phone){
                this.removePhoneFromList(phone)
            },
            redirectToGroup(brand){
                this.SET_MAIN_BRAND(brand)
                this.$router.push('/phone-details');
            } 
    }
}
</script>

<style>
    .phone-box{
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        justify-content: center;
    }
    .phone-box .action-box{
        width:100%;
        display:flex;
        justify-content: center;
        flex-wrap:wrap;
        cursor:pointer;
    }
    .action-box img{
        max-width:100%;
        height:auto;
    }
    .action-box h3{
        display:block;
        width:100%;
        text-align:center;
    }
    .phonesList h1{
        text-align:center;
    }
</style>
