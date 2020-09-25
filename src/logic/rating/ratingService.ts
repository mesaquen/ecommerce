import db from '../../database/DBConnection'

type Rating = {
  id: string
  score: number
  comment: string
}

export const getRatingByProductId = (productId: string): Promise<Rating[]> => {
  return new Promise((resolve, reject) => {
    db.transaction(
      transaction => {
        transaction.executeSql(
          'SELECT id, score, comment FROM rating WHERE product_id = ?',
          [productId],
          (_, { rows }) => {
            const data = []
            for (let i = 0; i < rows.length; i++) {
              data.push(rows.item(i))
            }
            resolve(data)
          },
          sqlError => {
            reject(sqlError)
            return false
          },
        )
      },
      transactionError => reject(transactionError),
    )
  })
}
