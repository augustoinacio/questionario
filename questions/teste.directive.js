(function () {
    "use strict";

    var teste = function () {

        var link = function (scope, elem, attrs){
            var tipoQuestao = verificaTipo(scope.questao);
        }
        
        function template() {
            return verificaTipo();            
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
            
            function simpleQuestion(){
                var div = '<div>', finalizaDiv = '</div>';
                div+=iniciaLabel;
                div+=questao.texto;
            }

            function dateQuestion(){

            }

            function numberQuestion(){

            }

            function yesOrNoQuestion(options){

            }
        }

        var iniciaLabel = '<label>', 
            finalizaLabel = '</label>', 
            span = '<span>*</span>', 
            input='<input></input>';
        
        
        return {
            scope: '=',
            template: template()            
        }

    }
    angular.module('app')
        .directive('teste', teste);
})();