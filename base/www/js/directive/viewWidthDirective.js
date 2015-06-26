myApp
.directive('vw', [
'IndexModel', '$rootScope', '$window',
function (IndexModel, $rootScope, $window){
    return {
        link: function (scope, element, attrs){
            
            IndexModel.vw = element.prop('offsetWidth')
            $rootScope.vw = IndexModel.vw;

            $window.addEventListener('resize', function (){
                $rootScope.$apply(function (){
                    IndexModel.vw = element.prop('offsetWidth')
                    $rootScope.vw = IndexModel.vw;
                })
            })
        }
    }
}]);