import { DBPool } from "D:\VOTWeb\project\backend\src\controllers\DBConnector.mjs";

export const createPost = async (title, content, username) => {
    const sql = "INSERT INTO posts (title, content, username) VALUES (?, ?, ?)";
    try {
        await DBPool.execute(sql, [title, content, username]);
        return 200;
    } catch (err) {
        console.error(err);
        return 500; 
    }
};

export const getPosts = async () => {
    const sql = "SELECT * FROM posts";
    try {
        const [rows] = await DBPool.query(sql);
        return rows;
    } catch (err) {
        console.error(err);
        return [];
    }
};
