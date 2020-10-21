import PhonesList from '@/components/pages/PhonesList'
import PhonesGroup from '@/components/pages/PhonesGroup'

export default[
    {
        path:'/',
        component: PhonesList,
        meta:{
            title: "Phones"
        }
    },
    {
        path:'/phone-details',
        component: PhonesGroup,
        meta:{
            title:"Detail page"
        }
    }
]