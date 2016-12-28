'use strict';

describe('Service: tuleapService', function () {

  // load the service's module
  beforeEach(module('tuleapClienteApp'));

  // instantiate service
  var tuleapService;
  beforeEach(inject(function (_tuleapService_) {
    tuleapService = _tuleapService_;
  }));

  it('should do something', function () {
    expect(!!tuleapService).toBe(true);
  });

});
