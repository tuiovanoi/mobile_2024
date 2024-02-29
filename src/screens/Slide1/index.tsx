import { ImageBackground, View, Image } from 'react-native'
import { styles } from './styles'


export function Slide1() {
    const slide = require('../../assets/slide1.png')
    const delivery = require('../../assets/delivery-truck 1.png')
    return (
        <ImageBackground style={styles.container} source={slide}>
            <View style={styles.fundo}>
                <Image source={delivery} />
            </View>
        </ImageBackground>
    )
}

