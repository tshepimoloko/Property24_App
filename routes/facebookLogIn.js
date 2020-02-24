// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebookLogIn', passport.authenticate('facebookLogIn'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.


app.get('/auth/facebook/callback', //permision
  passport.authenticate('facebookLogIn', { successRedirect: '/',
                                      failureRedirect: '/login' }));

app.get('/auth/facebook',
  passport.authenticate('facebookLogIn', { scope: ['read_stream', 'publish_actions'] })
);