
import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    id:1,
    title: 'Barbie Voyage poupée' ,
    price :'70 D.T',
    description : "Le coffret Voyage inspiré de Barbie Dreamhouse Adventures inclut un chien, une valise et plus de 10 accessoires La valise rose de Barbie est équipée d'une poignée rétractable, et elle s'ouvre et se ferme pour que les enfants puissent s'amuser à la remplir et à la vider Avec ce jouet Barbie",
    photo :'https://www.abracadabraonline.store/images/thumbs/0007416_barbie-voyage-poupee.jpeg',
    category:"jouets"
},
{
    id:2,
    title: 'Poupée Anniversaire-Nenuco' ,
    price :'65 D.T',
    description : "Poupée Célèbre l’anniversaire de Nenuco avec tes amis. Ce bébé est vêtu d’un T-shirt, d’une jolie jupe et d’une petite couronne pour célébrer son anniversaire",
    photo :'https://ptitange.tn/wp-content/uploads/2021/05/poupee-nenuco.jpeg',
    category:"jouets"
},
{
  id:3,
  title: 'Les univers' ,
  price :'50 D.T',
  description : "Poupée Célèbre l’anniversaire de Nenuco avec tes amis. Ce bébé est vêtu d’un T-shirt, d’une jolie jupe et d’une petite couronne pour célébrer son anniversaire",
  photo :'https://www.famille-epanouie.fr/wp-content/uploads/2015/12/61t4eoXMYKL._SL1098_1-660x330.jpg',
  category:"jouets"
}]

export const JouetsSlice = createSlice({
    name: 'jouets',
    initialState,
    reducers: {
      addJouet: (state,action) => {
     state.push(action.payload)
      },
      deleteJouet: (state,action) => {
        return state.filter ((el)=>el.id !== action.payload.id)
      },
     updateJouet: (state, action) => {
        return  state.map (el=> el.id === action.payload.id  ? action.payload : el)   }
      },
    },

)

export const { addJouet,deleteJouet,updateJouet  } = JouetsSlice.actions

export default JouetsSlice.reducer

