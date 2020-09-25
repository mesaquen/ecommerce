import React from 'react'
import { Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './StarRating.styles'

type StarRatingProps = {
  rating: number
  reviews?: number
  compact?: boolean
  color?: string
}

const StarRating = ({
  rating,
  reviews,
  compact,
  color,
}: StarRatingProps): JSX.Element => {
  const size = compact ? 16 : 24
  const generateStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      const name = i <= rating ? 'star' : 'star-outline'
      stars.push(name)
    }
    return stars.map((icon, index) => {
      return (
        <MaterialCommunityIcons
          name={icon}
          key={`${icon}-${index}`}
          size={size}
          color={color}
        />
      )
    })
  }
  const starIcons = generateStars()
  return (
    <View style={styles.container}>
      {!compact && rating && (
        <Text style={[styles.rating, styles.spaceRight]}>{rating}</Text>
      )}
      <View style={[styles.starContainer, styles.spaceRight]}>{starIcons}</View>
      {reviews > 0 && <Text style={styles.reviewNumber}>({reviews})</Text>}
    </View>
  )
}

StarRating.defaultProps = {
  color: 'gold',
}

export default StarRating
