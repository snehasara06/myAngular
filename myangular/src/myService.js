app.service('myService', function($http) {



    this.getItems = function() {



        return $http.get('http://localhost:8080/api/bookmarks/findall');



    };







    this.addItem = function(item) {



        return $http.post('http://localhost:3000/products', item);



    };







    this.updateItem = function(item) {



        return $http.put('http://localhost:3000/products/' + item.id, item);



    };







    this.deleteItem = function(item) {



        return $http.delete('http://localhost:3000/products/' + item.id);



    };



});