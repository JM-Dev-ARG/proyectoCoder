import { StyleSheet } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';

const AvatarComp = () => {
    return (
        <Avatar.Image size={64}
            source={require('../../../assets/totoro.jpg')}
            style={styles.img} />
    )
}

export default AvatarComp

const styles = StyleSheet.create({
    img: {

        justifyContent: 'center',
        alignItems: 'center',
    }
})
