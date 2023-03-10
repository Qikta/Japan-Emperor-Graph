import { Driver } from "neo4j-driver/types/driver";
import neo4j from "neo4j-driver";

export const createDriver = async (): Promise<Driver> =>
    await neo4j.driver(
        process.env.NEXT_PUBLIC_APP_NEO4J_URL || '',
        neo4j.auth.basic(
            process.env.NEXT_PUBLIC_APP_NEO4J_USER || '',
            process.env.NEXT_PUBLIC_APP_NEO4J_PW || ''
        )
    )