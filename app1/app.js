// MODULE
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.handle= ''

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle)
    }
    
    // $scope.name = 'Clark'

    // $timeout(function() {

    // $scope.name = 'Everyone'

    // }, 3000)

}])

// Below is the minified verson of the above^^

// myApp.controller("mainController", ["$scope, $log", function (o, n) {
//     n.info(o)
// }]);


// CONTROLLERS
// All AngularJS services start with a '$'
// The '$scope' function below has been injected into the function below:

// myApp.controller('mainController', function ($scope, $log, $filter, $resource) {

//     console.log($resource)

    // $scope.name = 'John'
    // $scope.formattedname =  $filter('uppercase') ($scope.name)

    // $log.info($scope.name)
    // $log.info($scope.formattedname)

    
    // $log.log('Hello')
    // $log.info('This is some info')
    // $log.warn('Warning')
    // $log.debug('Some debug info')
    // $log.error('This is an error!')

    // var searchPeople = function(firstname, lastname, height, age, occupation) {

    //     return 'Jane Doe'
    // }

    // console.log(angular.injector().annotate(searchPeople))

    // $scope.name = 'Jane Doe';
    // $scope.occupation = 'Coder';

    // $scope.getname = function() {
    //     return 'John Doe'
    // }

    // console.log($scope)
    
// });

// var things = [1, '2', function() {
//     alert('Hello!')
// }]

// things[2]()

// console.log(things)


// Dependency injection = pass the object to the function instead of creating it inside the function:

// var Person = function(firstname, lastname) {
    
//     this.firstname = firstname;
//     this.lastname = lastname;
// }
 
// function logPerson(person) {
    
//     console.log(person)
// }

// var john = new Person('John', 'Doe')

// logPerson(john)
