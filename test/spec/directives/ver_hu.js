'use strict';

describe('Directive: verHu', function () {

  // load the directive's module
  beforeEach(module('tuleapClienteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ver-hu></ver-hu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the verHu directive');
  }));
});
