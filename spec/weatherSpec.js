// describe('airport', function() {
//
//   var airport;
//   var plane;

describe('weather', function() {

  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

describe('stormy', function() {
  it('is stormy when 5',function() {
    spyOn(Math, 'random').and.returnValue(0.8)
    expect(weather.stormy()).toBeTruthy();
  });

  it('is clear when not 5',function() {
    spyOn(Math, 'random').and.returnValue(0.1)
    expect(weather.stormy()).toBeFalsy();
  });
});
});
