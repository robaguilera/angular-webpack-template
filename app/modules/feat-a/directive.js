'use strict';
module.exports = function(app) {
  app.directive('featA', function() {
    require('./feata.scss');
    return {
      template: require('./testa.html'),
      restrict: 'A',
    };
  });
};
