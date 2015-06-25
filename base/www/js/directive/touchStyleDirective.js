//==========================================================================
//              Style for user selection.
//==========================================================================
myApp
.directive('touch', function (){
    return {
        restrict: 'A',
        link: function (scope, element, attr){
            element.on('touchstart', function (e) {
                element.css({
                    opacity: 0.5,
                })
                .addClass('touchBackground');

            })
            element.on('touchend dragstart', function (e) {
                element.css({
                    opacity: 1
                })
                .removeClass('touchBackground');
            })
        }
    }
})
.directive('choose', function (){
    return {
        restrict: 'AC',
        link: function (scope, element, attr) {
            scope.$on('unselect', function (){
                element.removeClass('selected')
            })
            element.on('touchend', function (){
                if(element.hasClass('selected') && attr.toggle){
                    element.parent().children().removeClass('selected')
                } else {
                    element.parent().children().removeClass('selected')
                    element.addClass('selected');
                }
            })
        }
    }
})
.directive('toggleOnEmit', function (){
    return {
        restrict: 'AC',
        link: function (scope, element, attr){
            if(attr.toggleOnEmit){
                scope.$on(attr.toggleOnEmit, function (){
                    if(element.hasClass('selected')){
                        element.removeClass('selected')
                    } else {
                        element.addClass('selected')
                    }
                });
            }
        }
    }
})
.directive('default', function (){
    return {
        restrict: 'AC',
        link: function (scope, element, attr) {
            if(attr.default === ''){
                scope.$on('default', function (){
                    element.parent().children().removeClass('selected');
                    element.addClass('selected');
                })
            }
        }
    }
})


//// FAILED MATERIAL DESIGN ATTEMPTED.
// .directive('touched', function () {
//  return {
//      restrict: 'A',
//      link: function(scope, element, attr) {

//          var parent, ink, d, x, y;

//          element.on('touchstart', function (event){
//              element.css({
//                  overflow: 'hidden',
//                  opacity:'0.5',
//              })
//              .addClass('relative');

//              if(element.find('ink').length === 0){
//                  element.prepend('<ink></ink>');
//              }
//              var ink = element.find('ink');
//              ink.removeClass('animate');
//              if(!ink.prop('offsetHeight') && !ink.prop('offsetWidth')){
//                  d =Math.max(element.prop('offsetWidth'), 
//                      element.prop('offsetHeight')
//                  );
//                  ink.css({height: d + "px", width: d + "px"});
//              }
//              x = event.layerX - ink.prop('offsetWidth')/2;
//              y = event.layerY - ink.prop('offsetHeight')/2;
//              ink.css({top: y + 'px', left: x + 'px'}).addClass('animate');
//          });

//          element.on('touchend', function (event){
//              element.css({
//                  opacity: 1
//              })
//          })
//      }
//  };
// })
