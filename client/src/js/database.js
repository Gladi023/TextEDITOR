// import the idb package
const idb = require('idb');

// open the database connection
const dbPromise = idb.open('jate', 1, upgradeDB => {
    upgradeDB.createObjectStore('jate');
});

const addData = async (data) => {
    // add data to the object store
    try {
        const db = await dbPromise;
        const tx = db.transaction('jate', 'readwrite');
        const store = tx.objectStore('jate');
        store.add(data);
        await tx.complete;
    } catch (error) {
        console.log(error);
    }
}

const getData = async (id) => {
    // retrieve data from the object store
    try {
        const db = await dbPromise;
        const tx = db.transaction('jate', 'readonly');
        const store = tx.objectStore('jate');
        return store.get(id);
    } catch (error) {
        console.log(error);
    }
}

const updateData = async (id, data) => {
    // update data in the object store
    try {
        const db = await dbPromise;
        const tx = db.transaction('jate', 'readwrite');
        const store = tx.objectStore('jate');
        store.put(id);
        await tx.complete;
    } catch (error) {
        console.log(error);
    }
}

const deleteData = async (id) => {
    // delete data from the object store
    try {
        const db = await dbPromise;
        const tx = db.transaction('jate', 'readwrite');
        const store = tx.objectStore('jate');
        store.delete(data, id);
        await tx.complete;
    } catch (error) {
      console.log(error);
    }
  }