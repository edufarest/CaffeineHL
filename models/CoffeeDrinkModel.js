import React, {Component} from 'react';
import SQLite from 'react-native-sqlite-storage';

// SQLite.debug(true);
SQLite.enablePromise(true);

const database_name = 'CaffeineHL.db';
const table_name = 'CoffeeDrink';
let db;

export default class CoffeeDrink {
    constructor() {
        this.init();
    }

    init() {
        return new Promise(resolve => {
            console.log('Plugin integrity check ... ');
            SQLite.echoTest()
                .then(() => {
                    console.log('Integrity check passed ...');
                    console.log('Opening database ... ');
                    SQLite.openDatabase(database_name)
                        .then(DB => {
                            db = DB;
                            console.log('Database open');

                            // Create tables if not created

                            db.executeSql(
                                `CREATE TABLE IF NOT EXISTS ${table_name}(` +
                                    'id INTEGER PRIMARY KEY,' +
                                    'name TEXT NOT NULL,' +
                                    'serving_size FLOAT NOT NULL,' +
                                    'caffeine_serving FLOAT NOT NULL);',
                            )
                                .then(() => {
                                    console.log('DB ready');
                                    resolve(db);
                                })
                                .catch(err => {
                                    console.log('Error: ' + String(err));
                                });
                        })
                        .catch(err => {
                            console.log(err);
                        });
                })
                .catch(err => {
                    console.log(err);
                });
        });
    }

    openDB() {
        SQLite.DEBUG(true);
        SQLite.enablePromise(true);
        let dbInstance;


        return SQLite.openDatabase({
            name: database_name
        })
            .then(db => {
               dbInstance = db;

               console.log("DB open");
            })
            .then(() => {
                this.db = dbInstance;
                return dbInstance;
            })
    }

    getDatabase() {
        if (this.db !== undefined) {
            return Promise.resolve(this.db)
        } else {
            return this.openDB();
        }
    }

    createDrink(name, serving_size, caffeine_serving) {
        console.log('Creating drink: ' + name);

        return this.getDatabase()
            .then(db => {
                db.executeSql(
                    `INSERT INTO ${table_name} (name, serving_size, caffeine_serving) VALUES (?, ?, ?)`,
                    [name, serving_size, caffeine_serving],
                )
            })
    }

    listDrinks(callback) {
        console.log('Getting Drinks');

        return this.getDatabase().then(db => {
            db.executeSql(`SELECT * FROM ${table_name}`)
                .then(res => {
                    let drinks = [];


                    if  (!res || res.length < 1) {
                        console.log("Couldn't find res");
                        return;
                    }

                    res = res[0];
                    
                    console.log("Results: ");
                    console.log(res);

                    for (let i = 0; i < res.rows.length; i++) {
                        drinks.push(res.rows.item(i));
                    }

                    console.log(drinks);

                    if (callback) {
                        callback(drinks);
                    } else {
                        return drinks;
                    }
                });
        }).catch(err => {
            console.log(err)
        })
    }

    deleteDrink(id) {
        console.log('Deleting drink ' + id);
        if (!db) {
            this.init();
        }
        return db.executeSql(`DELETE FROM ${table_name} WHERE id=${id}`);
    }
}
