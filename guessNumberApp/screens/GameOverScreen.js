import React from 'react'
import { View, Image, StyleSheet, Text, Dimensions, useWindowDimensions } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({roundsNum, userNumber, onStartNewGame}) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if(width < 380){
        imageSize = 150;
    }

    if(height < 400){
        imageSize = 80
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize/2
    };

    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text>
                Your Phone needed <Text style={styles.highlight}>{roundsNum}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen

// const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        // width: deviceWidth<380 ? 150 : 300,
        // height: deviceWidth<380 ? 150 : 300,
        // borderRadius: deviceWidth<380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summary: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontWeight: 'bold',
        color: Colors.primary500
    }
})