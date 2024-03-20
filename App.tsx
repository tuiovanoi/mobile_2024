import { Slide1, Slide2, Slide3, Slide4 } from "./src/screens"
import { Dispatch, SetStateAction, useState, } from "react";
import { Text } from "react-native";
export interface IPage{
  page: number,
  setPage: Dispatch<SetStateAction<number>>
}
export default function App() {
  const [page, setPage] = useState(1)
  if(page == 1){
    return (
      <Slide1 page={page} setPage={setPage}/>
    );
  }else if(page == 2){
    return (
      <Slide2 page={page} setPage={setPage}/>
    )
  }else if(page == 3){
    return (
      <Slide3 page={page} setPage={setPage}/>
    )
  }else if(page == 4){
    return (
      <Slide4 page={page} setPage={setPage}/>
    )
  }
}
