module.exports = {
  /*
  *
  * Get
  *
  */
  // Get user
  getUser: (req, res, knex) => {
    knex('users')
      .select()
      .then((rows) => {
        const which = Math.floor((Math.random() * 9) + 0);
        res.header('Content-Type', 'application/json').status(200).send(rows[which]);
      })
      .catch(err => res.status(500).send(err));
  },
};
