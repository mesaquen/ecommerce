import db from '../../database/DBConnection'

export const getSomething = () => {
  return new Promise((resolve, reject) =>
    db.transaction(
      transaction => {
        transaction.executeSql(
          `SELECT p.*, round(avg(r.score), 1) as rating
          FROM product p
          LEFT JOIN rating r ON r.product_id = p.id
          GROUP BY p.id
         `, [], (_, { rows }) => {
          resolve(rows)
        }),
          sqlError => {
            console.log(sqlError)
            reject(sqlError)
          }
      },
      transactionError => {
        console.log(transactionError)
        reject(transactionError)
      },
    ),
  )
}
