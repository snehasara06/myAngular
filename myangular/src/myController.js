
angular.module('myApp')



    .controller('myController', function($scope, myService) {



        $scope.items = [];



        $scope.currentItem = {};







        // Get all items from the REST API



        myService.getItems().then(function(response) {



            $scope.items = response.data;



        });







        $scope.saveItem = function() {



            if ($scope.currentItem.id) {



                // Update existing item



                myService.updateItem($scope.currentItem).then(function(response) {



                    // Handle response as needed



                });



            } else {



                // Add new item



                myService.addItem($scope.currentItem).then(function(response) {



                    // Handle response as needed



                    $scope.items.push(response.data);



                });



            }







            // Clear the form



            $scope.currentItem = {};



        };







        $scope.editItem = function(item) {



            // Set the current item for editing



            $scope.currentItem = angular.copy(item);



        };







        $scope.deleteItem = function(item) {



            myService.deleteItem(item).then(function(response) {



                // Handle response as needed



                var index = $scope.items.indexOf(item);



                $scope.items.splice(index, 1);



            });



        };



    });







