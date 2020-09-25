import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { MaterialCommunityIcons as MCI } from '@expo/vector-icons'
import styles from './SearchBar.styles'

type SearchBarProps = {
  onSearch: (generalSearch) => void
  sort?: string
  onSort?: () => void
}

const SearchBar = ({ onSearch, sort, onSort }: SearchBarProps): JSX.Element => {
  const [generalSearch, setGeneralSearch] = useState('')

  const handleTextChange = value => setGeneralSearch(value)
  const handlePress = () => onSearch(generalSearch)
  const handleOnSort = () => onSort()

  const sortIcon = sort === 'ASC'? 'sort-ascending' : 'sort-descending'

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={handleTextChange} />
      <MCI.Button
        name='magnify'
        iconStyle={styles.icon}
        onPress={handlePress}
      />
      {sort && (
        <View style={styles.sortIcon}>

        <MCI.Button
          name={sortIcon}
          iconStyle={styles.icon}
          onPress={handleOnSort}
          />
          </View>
      )}
    </View>
  )
}

export default SearchBar
