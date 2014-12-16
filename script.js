// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        // We will create an seo variable on the scope and decide which fields we want to populate
        $scope.seo = {
            pageTitle : 'AngularJS SEO Tutorial',
            pageDescription : ''
        };        
    });

    scotchApp.controller('aboutController', function($scope) {
            $scope.message = 'Look! I am an about page.';
        // For this tutorial, we will simply access the $scope.seo variable from the main controller and fill it with content.
        // Additionally you can create a service to update the SEO variables - but that's for another tutorial.
        $scope.$parent.seo = {
            pageTitle : 'AngularJS SEO Tutorial',
            pageDescripton: 'Welcome to our tutorial on getting your AngularJS websites and apps indexed by Google.'
        };        
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
