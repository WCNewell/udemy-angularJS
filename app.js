var myApp = angular.module('clarkApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider

    .state('home', {
        url: '/',
        templateUrl: 'pages.main.html',
        controller: 'mainController'
    })

    .state('second', {
        url: '/second',
        templateUrl: 'pages/second.html'
    })

});

myApp.directive('searchResult', function() {
    return {
        restrict: 'E', // restrict this directive to be an element only, 'A' would be for attribute only
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            personName: "@", // @ means text 
            personAddress: "@"
        },
        transclude: true,
        // the empty scope object creates "isolated scope" for this directive
        compile: function(elements, attributes) {

            console.log('Compiling...')
            console.log(elements)

            return {
                pre: function(scope, elements, attributres) {

                    console.log('Pre-linking...')
                    console.log(elements)

                }, // docs say to not use pre-link, only post-link

                post: function(scope, elements, attributes) {

                    console.log('Post-linking...')
                    console.log(elements)

                }
            }

        }
    }
})

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

    $scope.person = {
        name: 'Bobbicat Newell',
        address: '123 Kitty Lane'
    }
    
    // $scope.name = 'Main';

    // $log.main = 'Property from main'
    // $log.log($scope)

}]);

// myApp.service('nameService', function() {

//     var self = this;
//     this.name = 'Bobbicat Newell'

//     this.namelength = function() {

//         self.name.length
//     }
// })

// myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

//     $scope.num = $routeParams.num || 1;

//     $log.second = 'Property from second'
//     $log.log($scope)


// }]);