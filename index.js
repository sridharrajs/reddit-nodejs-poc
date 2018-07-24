'use strict';

const snoowrap = require('snoowrap');

const reddit = new snoowrap({
  userAgent: 'web:com.example.server:v0.0.1 (by /u/sridharrajs)',
  accessToken: '<your access token>'
});

function search(term) {
  reddit.search({
    query: term,
    subreddit: 'all',
    sort: 'hot',
    time: 'day'
  }).then((listing) => {
    for (let post of listing) {
      console.log({
        id: post.id,
        name: post.name,
        selftext: post.selftext,
        url: post.url,
        domain: post.domain,
        title: post.title,
        is_video: post.is_video,
        created_utc: post.created_utc,
        subreddit_name_prefixed: post.subreddit_name_prefixed
      });
    }
    console.log(listing.length)
  });
}


function getAll() {
  //few subreddits technology, sports, worldnews

  reddit.getSubreddit('worldnews').getHot().then(posts => {
    for (let post of posts) {
      console.log({
        id: post.id,
        name: post.name,
        selftext: post.selftext,
        url: post.url,
        domain: post.domain,
        title: post.title,
        is_video: post.is_video,
        created_utc: post.created_utc,
        subreddit_name_prefixed: post.subreddit_name_prefixed
      });
    }
    console.log(' total posts', posts.length);
  });
}