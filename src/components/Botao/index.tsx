import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

export function Button(rest: TouchableOpacityProps){
    return(
        <TouchableOpacity style = {styles.bola} {...rest} />
    )
}