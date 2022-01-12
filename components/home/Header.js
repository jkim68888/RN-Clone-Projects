import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Message from '../../assets/message.svg'

const Header = () => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Image style={styles.logo} source={require('../../assets/header_logo.png')} />
    </TouchableOpacity>
    <View style={styles.iconsContainer}>
      <TouchableOpacity>
        <Image style={styles.icon} source={require('../../assets/plus.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.icon} source={require('../../assets/heart.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Message width="30" height="30" />
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 7,
    resizeMode: 'contain',
  },
})

export default Header
