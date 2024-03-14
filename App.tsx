import { Dispatch, SetStateAction, useState } from 'react'
import { Slide1, Slide2, Slide3, Slide4 } from './src/screens/Slide1'
export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
  page: number
 }
export default function App() {
  const [page, setPage] = useState(1)
  if(page == 1){
    <Slide1 page={page} setPage={setPage}
  }
  return (
    <Slide1 page={page} setPage={setPage}/>
  );
}
