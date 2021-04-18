const { TestScheduler } = require('@jest/core');
const login = require('../controllers/login')

describe("Login is defined" , function()  {
    it('loginis defined and working', function()  {
    expect(login).toBeDefined();
    });
});    

describe("Login is working", function() {
    it('confirmlogin is working', function() {
    expect(login.confirmlogin).toBeDefined();   
    });
});