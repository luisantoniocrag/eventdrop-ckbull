import { Pool } from 'pg'
import config from "../config"

const pool = new Pool({
    user:'luisantoniocrag',
    host:'localhost',
    database:'luisantoniocrag',
    port:parseInt(config.db.port, 10)
});
  
  export default pool;