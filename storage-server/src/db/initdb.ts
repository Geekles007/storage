import {pool} from "./database";
import {migrate} from "postgres-migrations";
import path from "path";

// Connect to database using pool instance and run migrations
const initDB = {
    runMigrations: async (): Promise<void> => {
        const client = await pool.connect();
        try {
            await migrate({client}, path.resolve(__dirname, 'migrations/sql'));
        } catch (e) {
            console.error("Migration execution failed", e);
        } finally {
            client.release()
        }
    }
}

export default initDB;
