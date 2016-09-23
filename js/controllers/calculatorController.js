var calculatorApp = angular.module('calculatorApp', []);
calculatorApp.controller('calculatorCtrl', function ($scope, calculatorService) {
    $scope.operations = calculatorService.getAllOperations();
    $scope.singleOperandOperations = calculatorService.getSingleOperandOperations();
    console.log($scope.operations.length);
    $scope.error = '';
    $scope.selOper = $scope.operations[0];
    $scope.showDetails = false;
    // Function that executes when an operation is selected from drop-down
    $scope.changeSelection = function (operation) {
        $scope.selOper = operation;
        if ($scope.oneOperandOper()) {
            $scope.operandOneLabel = 'Input Value';
        }
        else {
            $scope.operandOneLabel = 'Operand One :';
        }
    };
    // Function that executes on clicking Submit button
    $scope.performOperation = function () {
        $scope.error = '';
        if ($scope.selOper === $scope.operations[0]) {
            $scope.error = 'Please select an operation first!';
        }
        else if ($scope.operandOne === '' || $scope.operandTwo === '') {
            $scope.error = 'Invalid Inputs';
            if (!($scope.oneOperandOper() && $scope.operandOne === '')) {
                $scope.error = '';
            }
        }
        else if (($scope.operandOne == '' || $scope.operandTwo == '') && !$scope.oneOperandOper()) {
            $scope.error = 'Invalid inputs';
        }
        if ($scope.selOper !== $scope.operations[0]) {
            var first = parseFloat($scope.operandOne);
            var second = parseFloat($scope.operandTwo);
            var operands = [first, second];
            var response = calculatorService.executeOperation($scope.selOper)(operands);
            if (response.status === 0) {
                $scope.result = response.result;
                $scope.resultLabel = response.resultLabel;
            }
            else {
                $scope.error = response.message;
            }
        }
    };
    // Form reset
    $scope.clear = function () {
            $scope.error = '';
            $scope.operandOne = '';
            $scope.operandTwo = '';
            $scope.selOper = $scope.operations[0];
            $scope.result = '';
            $scope.operandOneLabel = 'Operand One :';
            $scope.resultLabel = 'Result :';
        }
        // Hide second operand field
    $scope.oneOperandOper = function () {
            return ($scope.singleOperandOperations.indexOf($scope.selOper) != -1);
        }
        // Do not allow non-numeric characters as inputs. .(dot) is allowed.
    $(document).ready(function () {
        $('.number').numeric;
    });
    $scope.toggleDetails = function () {
        console.log('Toggling Show details');
        return !$scope.showDetails;
    }
    $scope.doubleClicked = function () {
        window.alert('Single click is sufficient to reset the page');
    }
});
