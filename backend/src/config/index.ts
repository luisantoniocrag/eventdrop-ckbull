import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || "development"

const envFound = dotenv.config()
if (envFound.error) throw Error(".env file not found")

export default {
    port: process.env.PORT,
    ckbbull_api_url: "https://console.ckbull.app",
    ckbull_key: String(process.env.CKBULL_API_KEY),
    ckbull_secret: String(process.env.CKBULL_API_SECRET),
    api: {
        prefix: '/api',
    },
    db: {
        port: process.env.DB_PORT
    },
    jwt_secret: String(process.env.JWT_SECRET),
    ckb: {
        rpc_url: "https://testnet.ckb.dev",
        indexer_url: "https://testnet.ckb.dev/indexer"
    }
}
