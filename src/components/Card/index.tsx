import React from 'react'
import { ImageProps, StyleSheet, View } from 'react-native'

import FastImage from 'react-native-fast-image'

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: '20%',
    height: '20%',
    alignItems: 'center',
  },
  img: {
    height: 80,
    width: 80,
  },
})

interface CardProps {
  src: string
}

export const Card: React.FC<CardProps> = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <FastImage style={styles.img} source={{ uri: props.src }} />
    </View>
  )
}
