import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { MaterialCommunityIcons as MCI } from '@expo/vector-icons'
import styles from './EmptyState.styles'

const EmptyState = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <MCI style={styles.icon} name='alert-circle' size={48} />
      <Text style={styles.text}>Nada para ser exibido</Text>
    </SafeAreaView>
  )
}

export default EmptyState
