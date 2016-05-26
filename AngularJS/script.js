function test($scope) {
    $scope.adjectif = "super";
    $scope.nom = "Souza";

    $scope.utilisateur = {
        nom: "William",
        age: 21,
        ville: "São Paulo"
    }

    $scope.fruits = ["Banana", "Maça", "Kiwi", "Jambo"];

    $scope.showAlert = function () {
        alert("Oloco Bixo");
    }

    $scope.addFruit = function (fruit) {
        $scope.fruits.push(fruit);
    }

    $scope.$watch("toLog", function(value) {
    
        console.log("Valor: " + value);
    })
}
