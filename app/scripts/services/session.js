'use strict';

angular.module('simpleSdlcApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
