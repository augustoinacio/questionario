(function () {
    "use strict";
    angular.module('app')
        .factory("questionsFactory", function ($http) {
            return {
                getQuestions : getQuestions
            }

            function getQuestions() {
                return $http.get('../data/data.json');
            }
        });
})();