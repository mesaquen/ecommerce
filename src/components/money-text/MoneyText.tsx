import React from 'react'
import { Text } from 'react-native'
import NumberFormat from 'react-number-format'

type MoneyTextProps = {
  value: number
}

const MoneyText = ({
  value,
  ...props
}: MoneyTextProps): JSX.Element => {
  const renderText = text => <Text {...props}>{text}</Text>
  return (
    <NumberFormat
      displayType='text'
      value={value}
      thousandSeparator='.'
      decimalSeparator=','
      decimalScale={2}
      renderText={renderText}
      prefix="R$ "
      fixedDecimalScale
    />
  )
}

export default MoneyText
