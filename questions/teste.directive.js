(function () {
    "use strict";

    var teste = function () {

        var link = function (scope, elem, attrs){
            //console.log(elem);
            //console.log(scope);
            //console.log(attrs);
            console.log(scope.questao);
            var tipoQuestao = verificaTipo(scope.questao);
            console.log(tipoQuestao);
        }
        
        function template() {
            return '<label>{{questao.texto}}</label>'+
            '<span ng-show={{questao.obrigatorio}} class="required">*</span><br>'+
            '<input type="questao.type"></input>';            
        }

        function verificaTipo(questao){
            if(questao.type === 'text'){
                return '<label>{{questao.texto}}</label>'+
                '<span ng-show={{questao.obrigatorio}} class="required">*</span><br>'+
                '<input type="questao.type"></input>';
            }
            if(questao.type === 'boolean'){
                return '<label>{{questao.texto}}'+
                '<span ng-show={{questao.obrigatorio}} class="required">*</span><br>'+
                '<input type="radio">Sim</label>';
            }   
            if(questao.type === 'date'){
                return '<label>{{questao.texto}}</label>'+
                '<span ng-show={{questao.obrigatorio}} class="required">*</span><br>'+
                '<input type="date"></input>';
            }           
        }
        
        return {
            scope: '=',
            template: template(),
            link : link
        }

    }
    angular.module('app')
        .directive('teste', teste);
})();