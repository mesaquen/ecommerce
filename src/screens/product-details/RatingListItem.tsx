import React from 'react'
import { View, Text } from 'react-native'
import StarRating from '../../components/star-rating/StarRating'
import styles from './RatingListItem.styles'

type RatingListItemProps = {
  score: number
  comment: string
}

const RatingListItem = ({
  score,
  comment,
  ...props
}: RatingListItemProps): JSX.Element => {
  return (
    <View style={styles.container} {...props}>
      <StarRating rating={score} compact />
      <Text style={styles.comment}>{comment}</Text>
    </View>
  )
}

export default RatingListItem
