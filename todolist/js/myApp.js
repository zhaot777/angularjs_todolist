
var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($filter) {
    this.data=[];
    var input_content = document.getElementById("item_content");
    this.search_data = [];

    this.addItem = function() {
        var itemContent = input_content.value.toString();
        var listItem = {"name":itemContent, "status":"Doing"};
        this.data.push(listItem);
        input_content.value="";
    };

    this.changeStatus = function(item) {
        item.status = 'Done';
    };

    this.deleteItem = function(item) {
        this.data.splice(item, 1);
    };

    this.query = {};
    
    this.searchItem = function() {
        this.search_data = this.data;
        this.search_data = $filter('filter')(this.data, {'name' : this.query.name});
    };
});