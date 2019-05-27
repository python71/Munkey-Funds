const bcrypt = require('bcryptjs');

var authHelpers = {
    checkPassword: function (inputPassword) {
        console.log('Check Password hit')
        return bcrypt.compareSync(inputPassword, this.password)
      },
        hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
        }
}

module.exports = authHelpers;