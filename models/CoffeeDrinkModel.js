import React, { Component } from 'react';
import SQLite from 'react-native-sqlite-storage';

// SQLite.debug(true);
SQLite.enablePromise(true);

const database_name = "CaffeineHL.db";

export default class CoffeeDrink {

    static init() {
        let db;
        return new Promise((resolve) => {
            console.log("Plugin integrity check ... ");
            SQLite.echoTest()
                .then(() => {
                    console.log("Integrity check passed ...")
                    console.log("Opening database ... ");
                    SQLite.openDatabase(
                        database_name
                    )
                        .then(DB => {
                            db = DB;
                            console.log("Database open");

                            // Create tables if not created

                            db.executeSql(
                                "CREATE TABLE IF NOT EXISTS CoffeeDrink(" +
                                "id INTEGER PRIMARY KEY," +
                                "name TEXT NOT NULL," +
                                "serving_size FLOAT NOT NULL," +
                                "half_life FLOAT NOT NULL," + // In hours
                                "caffeine_serving FLOAT NOT NULL," +
                                "decay_constant FLOAT);"
                            ).then(() => {
                                console.log("DB ready");
                                resolve(db);
                            }).catch(err => {
                                console.log("Error: " + str(err));
                            })
                        }).catch(err => {
                            console.log(err)
                    })
                }).catch(err => {
                    console.log(err)
            })
        })
    }

}
