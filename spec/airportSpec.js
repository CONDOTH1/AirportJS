describe('airport', function() {

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane
    spyOn(Math, 'random').and.returnValue(0.1)
  });


describe('land', function() {
  it('instructs plane to land',function() {
    expect(airport.land(plane)).toEqual("clear to land");
  });
});

describe('takeoff', function() {
  it('instructs plane to land',function() {
    airport.land(plane);
    expect(airport.takeOff(plane)).toEqual("clear to take off");
  });
});

describe('terminal', function() {
  it('contains landed planes',function() {
    airport.land(plane);
    expect(airport.terminal).toContain(plane);
  });

  it('contains landed planes',function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.terminal).not.toContain(plane);
  });
});
});

// describe('terminal', function() {
//   it('contains landed planes',function() {
//     airport.land(plane);
//     expect(airport.terminal).not.toContain(plane);
//   });
// });
// });
