import { Pool, PoolConfig } from 'pg'
import config from "../config"

const postgresPassword = config.db.postgres.password || ''

const poolConfig: PoolConfig = {
  user:config.db.postgres.user,
  host:config.db.postgres.host,
  database:config.db.postgres.database,
  port:parseInt(config.db.port, 10)
}

if(!!postgresPassword) poolConfig["password"] = postgresPassword

const pool = new Pool(poolConfig);

export default pool;
