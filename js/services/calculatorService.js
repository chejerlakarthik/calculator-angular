calculatorApp.service('calculatorService', calculatorService);

function calculatorService() {
    var twoOperandOpers = ['ADD', 'SUB', 'MUL', 'DIV'];
    var oneOperandOpers = ['SQUARE', 'CUBE', 'SQUARE_ROOT'];
    var noSelection = ['---'];
    this.getAllOperations = function () {
        return noSelection.concat(twoOperandOpers, oneOperandOpers);
    }
    this.getSingleOperandOperations = function () {
        return angular.copy(oneOperandOpers);
    }
    this.executeOperation = function (operationName) {
        return function (operands) {
            return window[operationName](operands);
        }
    }
}

function ADD(operands) {
    var result = operands[0] + operands[1];
    var responseObj = {};
    if (isNaN(result)) {
        responseObj['status'] = -1;
        responseObj['message'] = 'Invalid inputs';
    }
    else {
        responseObj['result'] = result;
        responseObj['resultLabel'] = 'Sum :';
        responseObj['status'] = 0;
        responseObj['message'] = 'Success';
    }
    return responseObj;
}

function SUB(operands) {
    var result = operands[0] - operands[1];
    var responseObj = {};
    if (isNaN(result)) {
        responseObj['status'] = -1;
        responseObj['message'] = 'Invalid inputs';
    }
    else {
        responseObj['result'] = result;
        responseObj['resultLabel'] = 'Difference :';
        responseObj['status'] = 0;
        responseObj['message'] = 'Success';
    }
    return responseObj;
}

function MUL(operands) {
    var result = operands[0] * operands[1];
    var responseObj = {};
    if (isNaN(result)) {
        responseObj['status'] = -1;
        responseObj['message'] = 'Invalid inputs';
    }
    else {
        responseObj['result'] = result;
        responseObj['resultLabel'] = 'Product :';
        responseObj['status'] = 0;
        responseObj['message'] = 'Success';
    }
    return responseObj;
}

function DIV(operands) {
    var result = operands[0] / operands[1];
    var responseObj = {};
    if (isNaN(result)) {
        responseObj['status'] = -1;
        responseObj['message'] = 'Invalid inputs';
    }
    else {
        responseObj['result'] = result;
        responseObj['resultLabel'] = 'Quotient :';
        responseObj['status'] = 0;
        responseObj['message'] = 'Success';
    }
    return responseObj;
}

function SQUARE(operands) {
    var result = operands[0] * operands[0];
    var responseObj = {};
    if (isNaN(result)) {
        responseObj['status'] = -1;
        responseObj['message'] = 'Invalid inputs';
    }
    else {
        responseObj['result'] = result;
        responseObj['resultLabel'] = 'Squared Value :';
        responseObj['status'] = 0;
        responseObj['message'] = 'Success';
    }
    return responseObj;
}

function CUBE(operands) {
    var result = operands[0] * operands[0] * operands[0];
    var responseObj = {};
    if (isNaN(result)) {
        responseObj['status'] = -1;
        responseObj['message'] = 'Invalid inputs';
    }
    else {
        responseObj['result'] = result;
        responseObj['resultLabel'] = 'Cubed Value :';
        responseObj['status'] = 0;
        responseObj['message'] = 'Success';
    }
    return responseObj;
}

function SQUARE_ROOT(operands) {
    var result = Math.sqrt(operands[0]);
    var responseObj = {};
    if (operands[0] === -1){
        responseObj['status'] = -1;
        responseObj['message'] = 'Input cannot be -1 for square root operation';
    }
    else if (isNaN(result)) {
        responseObj['status'] = -1;
        responseObj['message'] = 'Invalid inputs';
    }
    else {
        responseObj['result'] = result;
        responseObj['resultLabel'] = 'Square Root :';
        responseObj['status'] = 0;
        responseObj['message'] = 'Success';
    }
    return responseObj;
}