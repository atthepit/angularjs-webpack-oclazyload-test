import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

const ModOne = {
  template: `
    <div>This is the module 1</div>`
};

function ModOneRoutes($stateProvider) {
  $stateProvider.state({
    name: 'mod1',
    url: '/mod1',
    component: 'modOne'
  });
}

const ModOneModule = angular
  .module('app.mod1', [uiRouter])
  .component('modOne', ModOne)
  .config(['$stateProvider', ModOneRoutes]);

export default ModOneModule;
