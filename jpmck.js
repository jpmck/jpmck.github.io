var app = angular.module('bbApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

    .when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  })

  .when('/projects', {
    templateUrl: 'projects.html',
    controller: 'ProjectsController'
  })

  .when('/contact', {
    templateUrl: 'contact.html',
    controller: 'ContactController'
  })

  .otherwise({
    redirectTo: '/'
  });
});
