'use strict';

angular.module('workInClassFontendApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<login></login>'
      });
  });
