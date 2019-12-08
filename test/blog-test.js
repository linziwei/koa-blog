var expect = require('chai').expect;
var apiModel = require('../lib/mysql.js')

describe('add User', function() {
  // 创建一个用户
  before((done) => {
    apiModel.insertData(['Biber', '123456', 'avator', 'time']).then(() => {
      done()
    });
  });
  after((done) => {
    apiModel.deleteUserData('Biber').then(() => {
      done()
    });
  })
  it('should return an Array contain {} when find by name="Biber"', (done) => {
    apiModel.findUserData('Biber').then((user) => {
      var data = JSON.parse(JSON.stringify(user));
      console.log(data)
      expect(data).to.have.lengthOf(1);
      done();
    }).catch((err) => {
      if (err) {
        return done(err)
      }
    })
  })
})





















