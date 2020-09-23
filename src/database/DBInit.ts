import db from './DBConnection'

const DbInit = (): Promise<unknown> => {
  const SQL = [
    'DROP TABLE IF EXISTS product;',
    'DROP TABLE IF EXISTS images;',
    'DROP TABLE IF EXISTS rating;',

    'create table if not exists product (id text, title text, description text, price number, discount number);',
    'create table if not exists images (id text, url text, product_id text);',
    'create table if not exists rating (id text, score number, product_id text);',
    'create table if not exists gato(nome text);',

    `insert into gato(nome) values ('miau');`,
    `insert into gato(nome) values ('bichano');`,
  ]
  return new Promise((resolve, reject) =>
    db.transaction(
      transaction => {
        for (const sql of SQL) {
          transaction.executeSql(sql)
        }
      },
      error => {
        console.log('Error while running migrations', JSON.stringify(error))
        reject(error)
      },
      resolve,
    ),
  )
}

export default DbInit
