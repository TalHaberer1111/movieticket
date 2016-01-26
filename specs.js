describe('Ticket', function() {
  it("will take user input for movie, time, and age and store it to an object", function() {
    var testTicket = new Ticket("Kung Fu Panda 3", "12:00", "16");
    expect(testTicket.movie).to.equal("Kung Fu Panda 3");
    expect(testTicket.time).to.equal("12:00");
    expect(testTicket.age).to.equal("16");
  });
});

describe('ageCheck', function() {
  it("will check to see if the age is under 12", function() {
    expect(ageCheck("8")).to.equal("youth");
  });
});

describe('timeCheck', function() {
  it("will check to see if the time is a matinee or regular priced time", function() {
    expect(timeCheck("5:00")).to.equal("regularPriced");
  });
});

describe('priceEvaluation', function() {
  it("will calculate and return price of ticket based on age and time", function() {
    expect(priceEvaluation("youth", "matinee")).to.equal("6.00")
  });
});
