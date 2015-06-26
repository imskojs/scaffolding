myApp
.controller('ListController', [

'ListModel', '$state',

function (ListModel, $state){
    var List = this;

    // Link model
    List.lists = ListModel.lists;

    // 
    List.itemHandler = function (item){
        $state.go('main.listDetail', {id: item.id});
        console.log(item);
    }
}]);