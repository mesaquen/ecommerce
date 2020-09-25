import { SQLResultSetRowList } from 'expo-sqlite'
import db from '../../database/DBConnection'

type Paginable = {
  rows: SQLResultSetRowList
  page: number
}

const BASE_PRODUCT_SQL = `SELECT p.*, round(avg(r.score), 1) as rating, count(r.score) as reviews
FROM product p
LEFT JOIN rating r ON r.product_id = p.id`

export const getProductById = (id: string): Promise<Paginable> => {
  return new Promise((resolve, reject) => {
    db.transaction(
      transaction => {
        transaction.executeSql(
          `${BASE_PRODUCT_SQL}
      WHERE p.id = ?`,
          [id],
          (_, { rows }) => {
            if (rows.length > 0) {
              resolve(rows.item(0))
            } else {
              resolve(null)
            }
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

export const getProducts = (
  whereTitle?: string,
  orderDirection?: string,
  page = 0,
  limit = 10,
): Promise<Paginable> => {
  return new Promise((resolve, reject) =>
    db.transaction(
      transaction => {
        const whereClause = whereTitle
          ? `WHERE p.title LIKE '%${whereTitle}%'`
          : null
        transaction.executeSql(
          `${BASE_PRODUCT_SQL}
          ${whereClause || ''}
          GROUP BY p.id
          ORDER BY p.price ${orderDirection || 'ASC'}
          LIMIT ${page * limit}, ${limit}
         `,
          [],
          (_, { rows }) => {
            resolve({ rows, page })
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
