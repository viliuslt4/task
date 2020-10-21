import vuex from 'vuex'
import axios from 'axios'
import Vue from 'vue'

Vue.use(vuex)

export const state = {
    phonesListInformation:{},
    phonesGroupList: [],
    mainBrand: ''
}

export const actions = {
    loadPhonesList({commit}){
        axios
        .get('https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/brands.json')
        .then(data =>{
            commit('SET_PHONES_LIST', data.data)
        })
    },
    loadPhonesGroup({commit}){
        axios
        .get('https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/phones.json')
        .then(data =>{
            commit('SET_PHONES_GROUP_LIST', data.data)
        })
    },
    removePhoneFromList:(context, phone) =>{
        context.commit('DELETE_PHONE_FROM_LIST', phone);
    }
}

export const mutations = {
    SET_PHONES_LIST: (state, data) =>{
        state.phonesListInformation = data
    },
    DELETE_PHONE_FROM_LIST: (state, phone) =>{
        state.phonesListInformation.options.splice(phone, 1)
    },
    SET_MAIN_BRAND:(state, brand) =>{
        state.mainBrand = brand
    },
    SET_PHONES_GROUP_LIST:(state, phonesGroup) =>{
        state.phonesGroupList = phonesGroup.filter(x => x.brand === state.mainBrand)
    }
}

export default new vuex.Store({
    state,
    actions,
    mutations
})