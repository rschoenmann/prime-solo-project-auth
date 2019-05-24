const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('is authenticated?:', req.isAuthenticated());
    console.log('shelf req.user:', req.user);
    let queryText = `SELECT "user"."id" AS userID, "user"."username", "item".description, "item".image_url, "item".id AS itemID FROM "user"
        JOIN "item" ON "user".id = "item".user_id;`;
    pool.query(queryText)
    .then((results) => {
        console.log('results.row:', results.rows);
        res.send(results.rows)
    }).catch(error => {
        console.log('error in shelf GET:', error);
        res.sendStatus(500);
    });
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    if(req.isAuthenticated()) {
        console.log('Is authenticated?', req.isAuthenticated());
        console.log(req.body);
        let queryText = `INSERT INTO "item" ("description", "image_url") VALUES ($1, $2);`;
        let item = req.body;
        pool.query(queryText, [item.description, item.image_url])
        .then(() => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('Error in POST route.', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;