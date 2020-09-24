import { SQLResultSetRowList } from 'expo-sqlite'
import db from '../../database/DBConnection'

type Paginable = {
  page: number
}

type ProductResults = Paginable & SQLResultSetRowList

export const getProducts = (
  where?: string,
  orderBy?: string,
  page = 0,
  limit = 10,
): Promise<ProductResults> => {
  return new Promise((resolve, reject) =>
    db.transaction(
      transaction => {
        const whereClause = where ? `WHERE ${where}` : null
        transaction.executeSql(
          `SELECT p.*, round(avg(r.score), 1) as rating, count(r.score) as reviews
          FROM product p
          LEFT JOIN rating r ON r.product_id = p.id
          ${whereClause || ''}
          GROUP BY p.id
          ${orderBy || ''}
          LIMIT ${page * limit}, ${limit}
         `,
          [],
          (_, { rows }) => {
            resolve({...rows, page})
          },
          sqlError => {
            console.log(sqlError)
            reject(sqlError)
            return false
          },
        )
      },
      transactionError => {
        console.log(transactionError)
        reject(transactionError)
      },
    ),
  )
}
