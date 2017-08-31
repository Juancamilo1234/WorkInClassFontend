'use strict';

angular.module('workInClassFontendApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        template: '<register></register>'
      });
  });
