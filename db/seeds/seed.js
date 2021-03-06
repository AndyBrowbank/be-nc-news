const {
  topicData,
  articleData,
  commentData,
  userData
} = require('../data/test-data');// had to change this to test-data otherwise error with dev-data

const { formatDates, formatComments, makeRefObj } = require('../utils/utils');

exports.seed = function(knex) {
  return knex.migrate
  .rollback()
  .then(()=>{
    return knex.migrate.latest();
  })
  .then(()=>{
  const topicsInsertions = knex('topics').insert(topicData);
  const usersInsertions = knex('users').insert(userData);

  return Promise.all([topicsInsertions, usersInsertions])
    .then(() => {
      return knex("articles")
      .insert(formatDates(articleData))
      .returning("*");
    })
      
    })
    .then(articleRows => {
      
      const articleRef = makeRefObj(articleRows);
      const formattedComments = formatComments(commentData, articleRef);
      return knex('comments').insert(formattedComments);
    });
};
