import db from '../../database/DBConnection'

export const getSomething = () => {
  return new Promise((resolve, reject) =>
    db.transaction(
      transaction => {
        transaction.executeSql(`select * from gato`, [], (_, { rows }) => {
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
