'use strict';

describe('Component: RegisterComponent', function () {

  // load the controller's module
  beforeEach(module('workInClassFontendApp'));

  var RegisterComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    RegisterComponent = $componentController('register', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
