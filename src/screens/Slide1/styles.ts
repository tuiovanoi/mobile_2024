import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    fundo:{
        flex: 1,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        alignItems: 'center',
        justifyContent: 'center'

    },
    titulo:{
        fontSize: 50,
    },
    
    botoes:{
        flexDirection: "row",
        justifyContent: "space-around", 
        alignItems: "center",
        width:350,
        paddingBottom:30


    },

    estilo:{
        flex: 1,
        justifyContent: 'center',
    }
   
})