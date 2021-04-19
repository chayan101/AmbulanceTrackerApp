const { TestScheduler } = require('@jest/core');
const auth = require('../controllers/auth')

describe("Auth is defined" , function()  {
    it('auth is working', function()  {
    expect(auth).toBeDefined();
    });
});

describe("Registering new students" , function()  {
    it('register is defined', function()  {
    expect(auth.register).toBeDefined();
    });

    it('csv is working', function() {
    expect(auth.csv).toBeDefined();    
    });

    it('datainsert is working', function() {
    expect(auth.datainsert).toBeDefined();    
    });
});

describe("Login is defined", function() {
    it('aalogin is defined', function() {
    expect(auth.alogin).toBeDefined(); 
    });
});  

