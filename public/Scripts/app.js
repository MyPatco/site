(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-41648493-14', 'auto');
ga('send', 'pageview');
window.addEventListener('error', function (e) {
  ga('send', 'event', 'Javascript Error', e.filename + ':  ' + e.lineno, e.message);
});
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBBAGFJskzj_mLUNwCBadFqXFMwexLXRLI",
  authDomain: "mypatco-41e7.firebaseapp.com",
  databaseURL: "https://mypatco-41e7.firebaseio.com",
  storageBucket: "mypatco-41e7.appspot.com",
};
firebase.initializeApp(config);
var app = angular.module('mypatcoApp', ['ngMaterial', 'ui.router', 'ngAnimate', 'firebase', 'ngMaterialTimePicker']);
app.config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('Home', {
      url: "/",
      templateUrl: "Home.html"
    })
    .state('Station', {
      url: "/Station/{id}",
      templateUrl: 'Station.html'
    }).state('Privacy', {
      url: "/Privacy",
      templateUrl: 'Privacy.html'
    }).state('Terms', {
      url: "/Terms",
      templateUrl: 'Terms.html'
    });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
  $mdThemingProvider.theme('default').primaryPalette('light-blue').accentPalette('blue-grey');

}).run(['$rootScope', '$state', function ($rootScope, $state) {

  $rootScope.$on('$stateChangeStart', function () {
    $rootScope.stateIsLoading = true;
  });

  $rootScope.$on('$stateChangeSuccess', function () {
    $rootScope.stateIsLoading = false;
  });

}]).controller('AppCtrl', function ($scope, $state, $mdSidenav, $mdDialog) {

  $scope.List = ["Lindenwold", "Ashland", "Woodcrest", "Haddonfield", "Westmount", "Collingswood", "Ferry Ave", "Broadway",
    "City Hall", "8th & Market St", "9-10th & Locust St", "12-13th & Locust St", "15-16th & Locust St"
  ];
  $scope.state = $state;

  $scope.isSidenavOpen = false;
  $scope.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.refresh = function () {
    $state.go($state.current, {}, {
      reload: true
    });
  };

  $scope.$on('$stateChangeSuccess', function () {
    $mdSidenav('left').close();
  });
  $scope.$on('$stateChangeError', function () {
    $mdSidenav('left').close();
  });

}).controller('StationCtrl', function ($scope, $state, $mdDialog, $mdMedia, $firebaseObject, $window) {
  // $scope.options = {
  //   mapTypeControl: false
  // };

  var ref = firebase.database().ref("api/values/GetTimes/" + $state.params.id);
  $scope.schedules = $firebaseObject(ref);

  $scope.listHeight = "height:" + ($window.innerHeight - 240) + "px;";
  angular.element($window).on('resize', function() {
    $scope.listHeight = "height:" + ($window.innerHeight - 240) + "px;";
    console.log( $scope.listHeight);
  }); 

  //TODO: need to scroll to element
  //http://stackoverflow.com/questions/29867862/how-to-get-current-time-in-a-format-hhmm-am-pm-in-javascript
  // $scope.topIndex = function () {
  //   angular.forEach($scope.rate['westbound'], function (value, key) {
  //     console.log(value);
  //     if (new Date.parse('hh:mm') > Date.parse('hh:mm') > true) {
  //       console.log(value);
  //       return value;
  //     }
  //   });
  // }

  // $scope.$watch('topIndex', angular.bind(this, function (topIndex) {
  //   topIndex = topIndex;
  // }));

 $scope.showInfo = function() {
      $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Station\'s Info')
        .ok('Close')
      );
    };



  $scope.showAdvanced = function (ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: function ($scope, $mdDialog) {
        $scope.hide = function () {
          $mdDialog.hide();
        };
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
        $scope.answer = function (answer) {
          $mdDialog.hide(answer);
        };
      },
      templateUrl: 'Update.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });
    $scope.$watch(function () {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function (wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.jsonId = {
    "@context": "http://schema.org",
    "@type": "TrainStation",
    "name": $state.params.id,
    "openingHours": ["Mo-Su 00:00-24:00"]
  };
}).directive('jsonld', ['$filter', '$sce', function ($filter, $sce) {
  return {
    restrict: 'E',
    template: function () {
      return '<script type="application/ld+json" ng-bind-html="onGetJson()"></script>';
    },
    scope: {
      json: '=json'
    },
    link: function (scope, element, attrs) {
      scope.onGetJson = function () {
        return $sce.trustAsHtml($filter('json')(scope.json));
      }
    },
    replace: true
  };
}]);