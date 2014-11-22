'use strict';

describe('Directive: stepIndicator', function () {

  // load the directive's module
  beforeEach(module('angularComponentsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<step-indicator></step-indicator>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stepIndicator directive');
  }));
});
