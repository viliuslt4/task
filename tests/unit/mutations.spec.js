import { mutations } from '@/store'
describe('Mutations', ()=>{
    it('Should set new brand in store', () =>{
        const newBrand = 'Samsung'
        const state = {
            mainBrand: ''
        }
        
        mutations.SET_MAIN_BRAND(state, newBrand)

        expect(state.mainBrand).toStrictEqual(newBrand)
    })
})