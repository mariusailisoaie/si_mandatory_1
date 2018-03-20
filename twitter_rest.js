const Twit = require('twit');

const T = new Twit({
    consumer_key:         'Oyml9D4Ajdnhw0PwtJ49t4Af4',
    consumer_secret:      'WjxB0QPUtB8p2EmPm3hC2Oey7HvSrxVzcS5jqJwxRvs7Dao81u',
    access_token:         '976127491151679490-Z6eYq8uN6hTi6QCyPGTo8JRbjFOcm7k',
    access_token_secret:  'YIqqyta7VGpuCPNJRnBPmUX9wnVxesbGrInkWFGDrD1YC',
    // timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  })

T.get('search/tweets', { q: 'romania since:2011-07-11', count: 1 }, function(err, data, response) {
    console.log(data);
});