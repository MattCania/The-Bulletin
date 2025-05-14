import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import db from '../database.js'
import '../models/userAccounts.js';
import '../models/userProfiles.js';
import '../models/blogPosts.js';

dotenv.config();

export default async function initializeApp() {
	try {
		await createDatabaseIfNotExists();
		await db.authenticate();
		console.log('Database connection successful!');
		
		await db.sync({alter: true});
		console.log('All models were synchronized successfully.');
	} catch (err) {
		console.error('Error during database initialization:', err);
	}
}

async function createDatabaseIfNotExists () {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
  await connection.end();
};
