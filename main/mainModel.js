angular.module('myFitMate')
.factory('MainModel', [

function (){
    var MainModel = {
        sideMenuLists: [
            {state: 'main.home', text: '내 정보 수정하기'},
            {state: '', text: '담아온 것 모아보기'},
            {state: '', text: '적립금 확인'},
            {state: '', text: '예약 변경 및 취소'},
            {state: '', text: '이벤트 / 공지사항'},
            {state: '', text: '설정'}
        ]
    };

    return MainModel; 
}])