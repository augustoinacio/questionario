(function () {
    "use strict";
    angular.module('app')
        .controller("questionController", function ($scope, questionsFactory) {
           
            var formulario = [1, 2, 3, 4];
           
            var questoes = questionsFactory.getQuestions().then(function (questoes) {
                var carga = questoes.data;
                $scope.questoes = filtroCampos(formulario, carga);
            });    
            
            $scope.respostas = [{
                codigoFormulario : 0,
                codigoQuestao : 0,
                string : ''
            }];

            function filtroCampos(formulario, questoes){
                var questoesDoForm = [];
                angular.forEach(questoes, function(item){
                    angular.forEach(formulario, function(itemForm){
                        if(itemForm === item.codigo){
                            questoesDoForm.push(item);
                        }
                    });
                });
                return questoesDoForm;
            }

        });
})();