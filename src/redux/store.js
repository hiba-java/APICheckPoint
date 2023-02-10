import { configureStore } from '@reduxjs/toolkit'

import parareducer from "./ParaSlice"
import Jouetsreducer from './JouetsSlice'
import Vetementreducer from './VetementsSlice'

export const store = configureStore({
  reducer: {
    para : parareducer ,
    jouets : Jouetsreducer,
    vet :Vetementreducer ,
  },
})