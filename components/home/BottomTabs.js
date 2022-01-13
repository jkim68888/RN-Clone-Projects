import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Home from '../../assets/home.svg'
import HomeActive from '../../assets/home_active.svg'
import Search from '../../assets/search.svg'
import SearchActive from '../../assets/search_active.svg'
import Video from '../../assets/video.svg'
import VideoActive from '../../assets/video_active.svg'
import Shop from '../../assets/shop.svg'
import ShopActive from '../../assets/shop_active.svg'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { USERS } from '../../data/users'

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState('HomeActive')

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setActiveTab('HomeActive')}>
          {activeTab === 'HomeActive' ? <HomeActive width={30} height={30} /> : <Home width={30} height={30} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('SearchActive')}>
          {activeTab === 'SearchActive' ? <SearchActive width={30} height={30} /> : <Search width={30} height={30} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('VideoActive')}>
          {activeTab === 'VideoActive' ? <VideoActive width={30} height={30} /> : <Video width={30} height={30} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('ShopActive')}>
          {activeTab === 'ShopActive' ? <ShopActive width={30} height={30} /> : <Shop width={30} height={30} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('ProfileActive')}>
          <Image
            style={activeTab === 'ProfileActive' ? styles.activeProfileImage : styles.profileImage}
            source={{ uri: 'https://cdn.icon-icons.com/icons2/582/PNG/512/woman_icon-icons.com_55031.png' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '3%',
    zIndex: 999,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
  },
  activeProfileImage: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#ff8501',
    borderRadius: 30,
  },
})

export default BottomTabs
