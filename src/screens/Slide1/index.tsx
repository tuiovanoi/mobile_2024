import { ImageBackground, View, Image, Text } from 'react-native'
import { styles } from './styles'
import { Button } from '../../components/Botao'
import { IPage } from '../../../App'


export function Slide1({ setPage }: IPage) {
    const slide = require('../../assets/slide1.png')
    const delivery = require('../../assets/delivery-truck 1.png')
    return (
        <ImageBackground style={styles.container} source={slide}>
            <View style={styles.fundo}>
                <View style={styles.estilo}>
                    <Image source={delivery} />
                    <Text style={styles.titulo}>Eficiência</Text>
 
                </View>

                <View style={styles.botoes}>
                    <Button onPress={() => setPage(1)} />
                    <Button onPress={() => setPage(2)} />
                </View>
            </View>
        </ImageBackground>
    )
}

