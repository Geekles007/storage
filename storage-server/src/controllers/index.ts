import { Request, Response } from 'express';
import { pool } from '../db/database';
import { QueryResult } from 'pg';

export const getProducts = async (req: Request, res: Response): Promise<Response> => {

    let page = parseInt(req.query?.page as string ?? 1);
    let size = parseInt(req.query?.size as string ?? 5);
    let orderBy = req.query?.orderBy as string ?? "id";
    let order = req.query?.order as string ?? "asc";
    let search = req.query?.name as string ?? "";
    let date = req.query?.date as string ?? "";
    let qMin = parseInt(req.query?.qMin as string ?? 0);
    let qMax = parseInt(req.query?.qMax as string ?? 0);
    let dMin = parseInt(req.query?.dMin as string ?? 0);
    let dMax = parseInt(req.query?.dMax as string ?? 0);

    try {
        // build query filtering
        const addons = `
                        WHERE name ILIKE '%${search}%'
                        ${qMin && qMin > 0 ? `AND quantity >= ${qMin}` : ""}
                        ${qMax && qMax > 0 ? `AND quantity <= ${qMax}` : ""}
                        ${dMin && dMin > 0 ? `AND distance >= ${dMin}` : ""}
                        ${dMax && dMax > 0 ? `AND distance <= ${dMax}` : ""}
                        ${date ? `AND date = '${date}'` : ""}`;
        const query = `SELECT * 
                        FROM products 
                        ${addons}
                        ORDER BY ${orderBy} ${order} 
                        LIMIT ${size} 
                        OFFSET ${(page - 1) * size}`;

        console.log(query);

        const response: QueryResult = await pool.query(query);
        const resCount: QueryResult = await
            pool.query(`SELECT COUNT(*)
                        FROM products 
                        ${addons}`);
        return res.status(200).json({
            page: page,
            size: size,
            pageCount: Math.ceil(resCount.rows[0].count / size),
            data: response.rows
        });
    } catch (e) {
        return res.status(500).json({
            error: e,
            message: "Something went wrong"
        });
    }
};
