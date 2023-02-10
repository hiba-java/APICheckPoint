import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
     id:1,
     title: 'Nouveau-né bébé fille vêtements' ,
     price :'85 D.T',
     description : 'Haute qualité: le coffret barboteuse bébé fille côtelé de coton apporte des sentiments confortables ',
     photo :'https://m.media-amazon.com/images/I/71XorvtAnoL._AC_UL1500_.jpg',
     category:"vetements"
},
{
  id:2,
  title: 'Sweat et pantalon jogger' ,
  price :'55 D.T',
  description : 'Ensemble composé d’un sweat et d’un pantalon jogger en molleton à motif imprimé ',
  photo :'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4c%2F82%2F4c82cbde2f5fa8dc20d3b693621595a0bd0539a5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5BKids_babygirl_multipacks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
  category:"vetements"
},
{
  id:3,
  title: 'Combinaison en Djean Mickey ' ,
  price :'85 D.T',
  description : 'Combinaison en Djean Mickey ',
  photo :'https://i.pinimg.com/474x/ec/1c/03/ec1c0341978f98fe30c18ed305be09d8.jpgg',
  category:"vetements"
}]
  


export const vetementSlice = createSlice({
  name: 'para',
  initialState,
  reducers: {
    addVetement: (state,action) => {
   state.push(action.payload)
    },
    deleteVetement: (state,action) => {
      return state.filter ((el)=>el.id !== action.payload.id)
    },
   updateVetement: (state, action) => {
    return  state.map (el=> el.id === action.payload.id  ? action.payload : el)  
    },
  },
})

// Action creators are generated for each case reducer function
export const {  addVetement,deleteVetement,updateVetement  } = vetementSlice.actions

export default vetementSlice.reducer