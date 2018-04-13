import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

function Mod2Routes($stateProvider) {
  $stateProvider.state({
    name: 'mod2',
    url: '/mod2',
    component: 'modTwo'
  });
}

const ModTwo = {
  template: `
    <div>This is the second module</div>`
};

const ModTwoModule = angular
  .module('app.mod2', [uiRouter])
  .component('modTwo', ModTwo)
  .config(['$stateProvider', Mod2Routes]);

export default ModTwoModule;
