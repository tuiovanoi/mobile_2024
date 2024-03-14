import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
export interface IBslider extends TouchableOpacityProps {
    onPressI: () => void
    cor: boolean
}
export function Button({ onPressI,cor }: IBslider) {
    return(
        <TouchableOpacity style={cor ? styles.bolaCor : styles.bola} onPress={onPressI}/>
    )
}