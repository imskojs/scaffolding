myApp
.controller('MainController', [
    
'$ionicSideMenuDelegate', 'MainModel', '$state', '$timeout', 'UserData',
'$ionicNavBarDelegate',

function($ionicSideMenuDelegate, MainModel, $state, $timeout, UserData,
$ionicNavBarDelegate
){

    var Main = this;
//==========================================================================
//              MOCK
//==========================================================================
    Main.user = UserData;
//// MOCK END

    Main.toggleSideMenu = function (){
        $ionicSideMenuDelegate.toggleLeft();
    }

    Main.sideMenuLists = MainModel.sideMenuLists;

    Main.menuSelectHandler = function (state){
        $ionicSideMenuDelegate.toggleLeft(false);
        $timeout(function (){
            $state.go(state)
        }, 100)
    }

// END
}]);