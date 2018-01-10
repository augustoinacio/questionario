(function(){
    "use strict";
    angular.module('app')
        .controller("questionController", function($scope, questionsFactory){
            $scope.message = 'teste de bind';

            var questoes = [];

            questionsFactory.getQuestions().then(function(questions){
                questoes = questions.data;
                console.log('Questoes: ' + JSON.stringify(questoes));    
                trataForm();                    
            });


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
            function trataForm(){
                var formulario = [1, 2, 3];
                var formularioFiltrado = filtroCampos(formulario, questoes);
                console.log('Questoes do form ' + JSON.stringify(formularioFiltrado));
                
            }

        })
})();