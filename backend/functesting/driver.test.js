const { TestScheduler } = require('@jest/core');
const driver = require('../controllers/driver')

describe("Driver is defined" , function()  {
    it('driver is defined and working', function()  {
    expect(driver).toBeDefined();
    });
});    

describe("Login is defined", function() {
    it('dlogin is defined', function() {
    expect(driver.dlogin).toBeDefined();   
    });
});

describe("Pending rides is working", function() {
    it('pending is working', function() {
    expect(driver.pending).toBeDefined();   
    });
});
