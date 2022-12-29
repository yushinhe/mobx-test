 import { createContext, useContext } from 'react'
import count from './count'
 class RootStore{
    count = count
 }

 const store = new RootStore()


 const Context= createContext(store)
 export default function useStore(){
    return useContext(Context)
 }