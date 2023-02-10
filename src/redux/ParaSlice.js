import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
     id:1,
     title: 'Chicco sucette physio confort silicone ROSE 0-6m+' ,
     price :'10 D.T',
     description : 'Caractéristiques  : *Ergonomique et confortable.  *Tétine orthodontique et active, qui favorise activement le développement correct de la bouche du bébé. *Forme ergonomique: assure un maximum d espace pour le menton et le nez, facilitant les mouvements de respiration et d aspiration. ',
     photo :'https://www.tunisiepara.com/wp-content/uploads/2022/11/CHICCO-SUCETTE-PHYSIO-COMFORT-SILICONE-0-6M.jpg',
     category :"para"
},
{
  id:2,
  title: 'Biberon first choice' ,
  price :'26 D.T',
  description : 'Biberon nuk first choice 0-6m ',
  photo :'https://cosmetique.tn/13259-large_default/biberon-first-choice-en-verre-0-6-mois-240-ml-blanc-nuk.jpg',
  category :"para"
},

{
  id:3,
  title: 'Action cup 230 ml' ,
  price :'20 D.T',
  description : 'Action cup 230 ml avec paille 12 mois+ mauve -nuk ',
  photo :'https://www.nuk.fr/media/mf_webp/png/media/catalog/product/cache/28b69c73e7edb2653ec17a1a5281398a/n/u/nuk_action_cup_21_1_l.webp',
  category :"para"
},
{
  id:4,
  title: 'Shampoing Bébe Johnson' ,
  price :'20 D.T',
  description : 'Le shampoing pour bébés JOHNSON’S est aussi doux pour les yeux que l’eau pure',
  photo :'https://bebe.founa.com/sites/default/files/images_products/14675.jpghttps://cosmetique.tn/13259-large_default/biberon-first-choice-en-verre-0-6-mois-240-ml-blanc-nuk.jpg',
  category :"para"
}

]
  


export const paraSlice = createSlice({
  name: 'para',
  initialState,
  reducers: {
    addPara: (state,action) => {
   state.push(action.payload)
    },
    deletepara: (state,action) => {
     return state.filter ((el)=>el.id !== action.payload.id)
    },
   updatepara: (state, action) => {
    return  state.map (el=> el.id === action.payload.id  ? action.payload : el)   }
  },
})

// Action creators are generated for each case reducer function
export const { addPara,deletepara,updatepara  } = paraSlice.actions

export default paraSlice.reducer