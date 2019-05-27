const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy
const db = require("../models");
const helpers = require("../helpers/auth");
const strategy = new LocalStrategy(
	{
        usernameField: 'email' // not necessary, DEFAULT
	},
	function(email, password, done) {
        console.log("checking DBls for user", email)
		db.User.findOne({where: { email: email }}).then((user, err) => {
            console.log(user)
            console.log('EMAIL: ', email)
            console.log('PASS: ', password)
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.validPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
            }
            console.log('Passed LocalStrategy')
			return done(null, user, { message: 'Passed LocalStrategy' })
		})
	}
)

module.exports = strategy