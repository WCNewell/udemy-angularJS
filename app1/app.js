// MODULE
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
// All AngularJS services start with a '$'
// The '$scope' function below has been injected into the function below:

myApp.controller('mainController', function ($scope, $log, $filter, $resource) {

    console.log($resource)

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
    
});




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
