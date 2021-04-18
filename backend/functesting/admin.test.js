const { TestScheduler } = require('@jest/core');
const admin = require('../controllers/admin')

describe("Register new faculty or driver" , function()  {
    it('Admin is defined and working', function()  {
    expect(admin).toBeDefined();
    });

    it('registerAuth is Working', function() {
    expect(admin.registerAuth).toBeDefined();   
    });

    it('registerDriver is Working', function() {
        expect(admin.registerDriver).toBeDefined();   
        });
});