'use strict';

describe('Calculator Service', function () {

    var service;

    beforeEach(function () {
        service = new CalculatorService();
    });


//init test should display '0'
    it('should display 0 when loaded', function () {
        expect(service.getDisplay()).toEqual('0');
    });
//init test should display '0'
    it('should display 0 when loaded', function () {
        service.enterDigit('zero');
        expect(service.getDisplay()).toEqual('0');
    });
//init test should display '1'
    it('should display 1 when loaded', function () {
        service.enterDigit('one');
        expect(service.getDisplay()).toEqual('1');
    });
//init test should display '2'
    it('should display 2 when loaded', function () {
        service.enterDigit('two');
        expect(service.getDisplay()).toEqual('2');
    });
//init test should display '3'
    it('should display 3 when loaded', function () {
        service.enterDigit('three');
        expect(service.getDisplay()).toEqual('3');
    });
//init test should display '4'
    it('should display 4 when loaded', function () {
        service.enterDigit('four');
        expect(service.getDisplay()).toEqual('4');
    });
//init test should display '5'
    it('should display 5 when loaded', function () {
        service.enterDigit('five');
        expect(service.getDisplay()).toEqual('5');
    });    
//init test should display '6'
    it('should display 6 when loaded', function () {
        service.enterDigit('six');
        expect(service.getDisplay()).toEqual('6');
    });
//init test should display '7'
    it('should display 7 when loaded', function () {
        service.enterDigit('seven');
        expect(service.getDisplay()).toEqual('7');
    });
//init test should display '8'
    it('should display 8 when loaded', function () {
        service.enterDigit('eight');
        expect(service.getDisplay()).toEqual('8');
    });
//init test should display '9'
    it('should display 9 when loaded', function () {
        service.enterDigit('nine');
        expect(service.getDisplay()).toEqual('9');
    });

//simple '+' test
    it('should display 3 when loaded', function () {
        service.enterDigit('one');
        service.enterOperation('+');
        service.enterDigit('two');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('3');
    });
//simple '-' test
    it('should display 3 when loaded', function () {
        service.enterDigit('one');
        service.enterOperation('-');
        service.enterDigit('two');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('-1');
    });
//simple '*' test
    it('should display 3 when loaded', function () {
        service.enterDigit('six');
        service.enterOperation('*');
        service.enterDigit('two');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('12');
    });
//simple '/' test
    it('should display 3 when loaded', function () {
        service.enterDigit('two');
        service.enterOperation('/');
        service.enterDigit('three');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('0.6666666666666666');
    });
//simple '/' by 0 test
    it('should display 3 when loaded', function () {
        service.enterDigit('one');
        service.enterOperation('/');
        service.enterDigit('zero');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('Infinity');
    });

    // //this test case will always fail
    // it('should display 12345 when loaded', function () {
    //     expect(service.getDisplay()).toEqual('12345');
    // });

//enter multiple digies test 
    it('should display 12345 when loaded', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterDigit('three');
        service.enterDigit('four');
        service.enterDigit('five');
        expect(service.getDisplay()).toEqual('12345');
    });

//very big number test 
    it('should display 12345 when loaded', function () {
        service.enterDigit('nine');
        service.enterDigit('zero');
        service.enterDigit('zero');
        service.enterDigit('seven');
        service.enterDigit('one');
        service.enterDigit('nine');
        service.enterDigit('nine');
        service.enterDigit('two');
        service.enterDigit('five');
        service.enterDigit('four');
        service.enterDigit('seven');
        service.enterDigit('four');
        service.enterDigit('zero');
        service.enterDigit('nine');
        service.enterDigit('nine');
        service.enterDigit('one');
        service.enterOperation('+');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterDigit('two');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('11229421476963212');
    });

//enterClear test 
    it('should display 12345 when loaded', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterDigit('three');
        service.enterDigit('four');
        service.enterDigit('five');
        expect(service.getDisplay()).toEqual('12345');
        service.enterClear();
        expect(service.getDisplay()).toEqual('0');
    });


//bigger number '+' test 
    it('should display 12345 when loaded', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterDigit('three');
        service.enterDigit('four');
        service.enterDigit('five');
        service.enterDigit('six');
        service.enterDigit('seven');
        service.enterDigit('eight');
        service.enterDigit('nine');
        expect(service.getDisplay()).toEqual('123456789');
        service.enterOperation('+');
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterDigit('three');
        service.enterDigit('four');
        service.enterDigit('five');
        service.enterDigit('six');
        service.enterDigit('seven');
        service.enterDigit('eight');
        service.enterDigit('nine');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('246913578');
    });

//bigger number '-' test 
    it('should display 12345 when loaded', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterDigit('three');
        service.enterDigit('four');
        service.enterDigit('five');
        service.enterDigit('six');
        service.enterDigit('seven');
        service.enterDigit('eight');
        service.enterDigit('nine');
        expect(service.getDisplay()).toEqual('123456789');
        service.enterOperation('-');
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterDigit('three');
        service.enterDigit('four');
        service.enterDigit('five');
        service.enterDigit('six');
        service.enterDigit('seven');
        service.enterDigit('eight');
        service.enterDigit('nine');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('0');
    });

//bigger number '*' test 
    it('should display 12345 when loaded', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterDigit('three');
        service.enterDigit('four');
        service.enterDigit('five');
        service.enterDigit('six');
        service.enterDigit('seven');
        service.enterDigit('eight');
        service.enterDigit('nine');
        expect(service.getDisplay()).toEqual('123456789');
        service.enterOperation('*');
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterDigit('three');
        service.enterDigit('four');
        service.enterDigit('five');
        service.enterDigit('six');
        service.enterDigit('seven');
        service.enterDigit('eight');
        service.enterDigit('nine');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('15241578750190520');
    });

//bigger number '/' test 
    it('should display 12345 when loaded', function () {
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterDigit('three');
        service.enterDigit('four');
        service.enterDigit('five');
        service.enterDigit('six');
        service.enterDigit('seven');
        service.enterDigit('eight');
        service.enterDigit('nine');
        expect(service.getDisplay()).toEqual('123456789');
        service.enterOperation('/');
        service.enterDigit('one');
        service.enterDigit('two');
        service.enterDigit('three');
        service.enterDigit('four');
        service.enterDigit('five');
        service.enterDigit('six');
        service.enterDigit('seven');
        service.enterDigit('eight');
        service.enterDigit('nine');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('1');
    });

//multiple number with operation display test 
    it('should display 12345 when loaded', function () {
        service.enterDigit('six');
        expect(service.getDisplay()).toEqual('6');
        service.enterOperation('+');
        expect(service.getDisplay()).toEqual('6');
        service.enterDigit('seven');
        expect(service.getDisplay()).toEqual('7');
        service.enterOperation('+');
        expect(service.getDisplay()).toEqual('7');
        service.enterDigit('eight');
        expect(service.getDisplay()).toEqual('8');
        service.enterOperation('+');
        expect(service.getDisplay()).toEqual('8');
        service.enterDigit('nine');
        expect(service.getDisplay()).toEqual('9');
        service.enterEquals();
        expect(service.getDisplay()).toEqual('30');
    });











});

