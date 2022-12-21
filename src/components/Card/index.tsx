import React from 'react'
import { Image, ImageProps, StyleSheet, View } from 'react-native'

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

interface CardProps extends ImageProps {
  src: string
}

export const Card: React.FC<CardProps> = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: props.src }} />
    </View>
  )
}
