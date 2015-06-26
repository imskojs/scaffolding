myApp
.directive('vw', [
'IndexModel', '$rootScope',
function (IndexModel, $rootScope){
    return {
        link: function (scope, element, attrs){
            IndexModel.vw = element.prop('offsetWidth')
            $rootScope.vw = IndexModel.vw
        }
    }
}])