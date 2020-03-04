import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './app.config';
import main from './main';

(function() {
  'use strict';

  angular.module('app', [uirouter, main]).config(routing);
})();
