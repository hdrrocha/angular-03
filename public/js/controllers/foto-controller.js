angular.module('alurapic')
    .controller('FotoController', function($scope, $http) {

        $scope.foto = {};
        $scope.mensagem = '';

        $scope.submeter = function() {
            console.log($scope.foto)
             if ($scope.formulario.$valid) {
             //salva uma foto se fosse get no lugar de post seria devolver
                 $http.post('/v1/fotos', $scope.foto)
                     .success(function() {
             //lmpou os campos da foto
                         $scope.foto = {};
                         $scope.mensagem = 'Foto cadastrada com sucesso';
                     })
                     .error(function(erro) {
                         console.log(erro);
                         $scope.mensagem = 'Não foi possível cadastrar a foto';
                     })
             }
        };
    });