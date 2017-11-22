(function() {
  'use strict';

  angular
    .module('Gbuddy')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

  

})();
