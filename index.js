const app = require('./app').createApp();
const model = require('./model');

const User = model.createModel('User');
User.findById(1, (err, user) => {
  if (err) {
    console.error(err);
  }
  else {
    console.log('the value of the user: ');
    console.log(user);
    
  }
});

app.get('/users', (req, res) => {
});


app.listen(3000);
