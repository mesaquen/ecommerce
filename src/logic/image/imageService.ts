import db from '../../database/DBConnection'
type Image = {
  id: string
  url: number
}

export const getImagesByProductId = (productId: string): Promise<Image[]> => {
  return new Promise((resolve, reject) => {
    db.transaction(
      transaction => {
        transaction.executeSql(
          'SELECT id, url FROM image WHERE product_id = ?',
          [productId],
          (_, { rows }) => {
            const data = []
            
            for (let index = 0; index < rows.length; index++) {
              data.push(rows.item(index))
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
