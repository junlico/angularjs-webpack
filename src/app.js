import angular from 'angular';
import './main/main.module';

const mainApp = angular.module('mainApp', ['mainModule']);

mainApp.controller('appController', $scope => {
  $scope.title = 'Hello Angular';
});
