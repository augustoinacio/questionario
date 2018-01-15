(function(){
    "use strict";

    function linkDemo(){
        return {
            scope : {

            },
            
        }
    }

    angular.module('app')
        .directive('linkDemo', linkDemo)
})();