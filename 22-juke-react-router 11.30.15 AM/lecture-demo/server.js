const express = require('express');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);

app.use(express.static(`${__dirname}/public`));

const puppies = [{
  name: 'Taylor',
  image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
}, {
  name: 'Reggie',
  image: 'http://images.shape.mdpcdn.com/sites/shape.com/files/styles/slide/public/puppy-2_0.jpg'
}, {
  name: 'Christian',
  image: 'https://www.askideas.com/media/19/Papillon-Puppy-Looking.jpg'
}, {
  name: 'Jessie',
  image: 'http://www.101dogbreeds.com/wp-content/uploads/2015/10/Chi-Spaniel-Puppy-Pictures.jpg'
}, {
  name: 'Pandora',
  image: 'http://4.bp.blogspot.com/-3JeIxWBU7bY/UKjIt8lVpCI/AAAAAAAABx8/YM8piSOwczs/s1600/Schipperke-Puppy.jpg'
}];

app.get('/api/puppies', function (req, res) {
  res.json(puppies);
});

const port = 8080;
app.listen(port, function () {
  console.log('Groovy vibes broadcasting on port', port);
});
