import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import oclazyload from 'oclazyload';

const App = {
  template: `
    <ui-view>
      <div>Hello world!</div>
    </ui-view>
    <a ui-sref="mod1">Mod1</a>
    <a ui-sref="mod2">Mod2</a>
  `
};

function appRoutes($locationProvider, $uiRouter) {
  $locationProvider.html5Mode(true);

  const $stateRegistry = $uiRouter.stateRegistry;

  $stateRegistry.register({
    name: 'mod1.**',
    url: '/mod1',
    lazyLoad($transition$) {
      return import('./Mod1').then(Mod1 => {
        $transition$
          .injector()
          .get('$ocLazyLoad')
          .load(Mod1.default);
      });
    }
  });

  $stateRegistry.register({
    name: 'mod2.**',
    url: '/mod2',
    lazyLoad($transition$) {
      return import('./Mod2').then(Mod2 => {
        $transition$
          .injector()
          .get('$ocLazyLoad')
          .load(Mod2.default);
      });
    }
  });
}

const AppModule = angular
  .module('app', [uiRouter, oclazyload])
  .component('app', App)
  .config(['$locationProvider', '$uiRouterProvider', appRoutes]);

export default AppModule;
