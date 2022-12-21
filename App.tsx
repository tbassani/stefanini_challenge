import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native'
import { Card } from './src/components/Card'

import client from './src/services/api'
import { ImgItem } from './src/types'

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    justifyContent: 'space-around',
  },
})

const App = () => {
  const [imgs, setImgs] = useState<ImgItem[]>([])
  useEffect(() => {
    const onLoad = async () => {
      const loadedImgs = await client.request()
      const imgArray: ImgItem[] = []
      loadedImgs.data.data.forEach(item => {
        //If it's an album, get the images inside
        if (item.is_album) {
          item.images.forEach(img => {
            //Make sure it's an image and not a gif or video
            if (img.type === 'image/jpeg' || img.type === 'image/png') {
              imgArray.push(img)
            }
          })
        } else {
          //If not an album, just get the image
          //Make sure it's an image and not a gif or video
          if (item.type === 'image/jpeg' || item.type === 'image/png')
            imgArray.push(item)
        }
      })

      setImgs(imgArray)
    }

    onLoad()
  }, [])

  const renderItem: ListRenderItem<ImgItem> = ({ item }) => {
    return <Card src={item.link} key={item.id} />
  }

  const listContent = (
    <FlatList
      data={imgs}
      renderItem={renderItem}
      numColumns={4}
      style={styles.listContainer}
      contentContainerStyle={styles.list}
      columnWrapperStyle={{
        justifyContent: 'space-between',
      }}
      removeClippedSubviews
    />
  )

  return <View style={{ flex: 1 }}>{listContent}</View>
}

export default App
