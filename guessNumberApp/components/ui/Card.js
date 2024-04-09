import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/colors'

function Card({children}) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: deviceWidth<380 ? 18 : 36,
        backgroundColor: Colors.primary800,
        elevation: 4, //box shadow for android
        shadowColor: 'black', // shadow are used for ios
        shadowOffset: { width:0 , height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 6
    },
})