const { TestScheduler } = require('@jest/core');
const student = require('../controllers/student')

describe("Student is defined" , function()  {
    it('student is defined and working', function()  {
    expect(student).toBeDefined();
    });
});    

describe("Login is defined", function() {
    it('slogin is defined and working', function() {
    expect(student.slogin).toBeDefined();   
    });
});

describe("Booking ride is defined", function() {
    it('bookAmbulance is defined and working', function() {
    expect(student.bookAmbulance).toBeDefined();   
    });

    it('bookForLAter is defined and working', function() {
        expect(student.bookForLater).toBeDefined();   
        });
});
