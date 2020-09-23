import * as SQLite from 'expo-sqlite'

const NAME = 'ecommerce.db'
const VERSION = '2'

const db = SQLite.openDatabase(NAME, VERSION);

export default db