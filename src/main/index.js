import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import route from './main.route';
import MainController from './main.controller';

import './main.scss';

export default angular
  .module('main', [uirouter])
  .config(route)
  .controller('MainController', MainController)
  .name;
