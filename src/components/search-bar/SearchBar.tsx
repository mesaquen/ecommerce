import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { MaterialCommunityIcons as MCI } from '@expo/vector-icons'
import styles from './SearchBar.styles'

type SearchBarProps = {
    onSearch: (generalSearch) => void
}

const SearchBar = ({onSearch}: SearchBarProps): JSX.Element => {
    const [generalSearch, setGeneralSearch] = useState('')

    const handleTextChange = (value) => setGeneralSearch(value)
    const handlePress = () => onSearch(generalSearch)

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={handleTextChange}/>
      <MCI.Button
        name='magnify'
        iconStyle={styles.icon}
        onPress={handlePress}
      />
    </View>
  )
}

export default SearchBar
