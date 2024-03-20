import { ImageBackground, View, Image, Text } from 'react-native'
import { styles } from './styles'
import { Button } from '../../components/Botao'
import { IPage } from '../../../App'

export function Slide3({ setPage, page }: IPage) {
    const slide = require('../../assets/image 4.png')
    const delivery = require('../../assets/container 1.png')
    return (
        <ImageBackground style={styles.container} source={slide}>
            <View style={styles.fundo}>
                <View style={styles.estilo}>
                    <Image source={delivery} />
                    <Text style={styles.titulo}>Praticidade</Text>
                </View>
                <View style={styles.botoes}>
                    <Button cor={page == 1} onPressI={() => setPage(1)} />
                    <Button cor={page == 2} onPressI={() => setPage(2)} />
                    <Button cor={page == 3} onPressI={() => setPage(3)} />
                    <Button cor={page == 4} onPressI={() => setPage(4)} />
                </View>
            </View>
        </ImageBackground>
    )
}