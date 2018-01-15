(function(){
    "use strict";
    angular.module('app')
        .directive('teste', function(){
            return {
                scope : '=',
                template : '<label>{{questao.texto}}</label> '+
                           '<span ng-show={{questao.obrigatorio}} class="required">*</span><br>' +
                           '<input type="questao.type"></input>'
            }

        });
})();