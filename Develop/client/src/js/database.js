import { openDB } from 'idb';
import { MongoClient } from 'mongodb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  export const putDb = async (content) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('myDatabase');
        const collection = db.collection('myCollection');
        await collection.insertOne(content);
        client.close();
    } catch (err) {
        console.error(err);
    }
};

export const getDb = async () => {
  try {
      const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
      const db = client.db('myDatabase');
      const collection = db.collection('myCollection');
      const docs = await collection.find({}).toArray();
      client.close();
      return docs;
  } catch (err) {
      console.error(err);
  }
};

initdb();
