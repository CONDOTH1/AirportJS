describe('Plane', function() {

  var plane;

  beforeEach(function(){
    plane = new Plane();
    spyOn(Math, 'random').and.returnValue(0.8)
  });

describe('flying', function() {
  it('expects plane to be flying',function() {
    expect(plane.flying).toBeTruthy();
  });
});
});
