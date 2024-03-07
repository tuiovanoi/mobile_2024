import { Dispatch, SetStateAction, useState } from 'react'
import { Slide1 } from './src/screens/Slide1'
export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
 }
export default function App() {
  const [page, setPage] = useState(1)
  return (
    <Slide1 setPage={setPage}/>
  );
}