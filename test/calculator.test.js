const Calculator = require('../src/utils/calculator');

// Simple test runner
function runTests() {
    const calculator = new Calculator();
    let tests = 0;
    let passed = 0;

    function test(description, actual, expected) {
        tests++;
        if (actual === expected) {
            console.log(`✓ ${description}`);
            passed++;
        } else {
            console.log(`✗ ${description} - Expected: ${expected}, Got: ${actual}`);
        }
    }

    function testError(description, fn, expectedErrorMessage) {
        tests++;
        try {
            fn();
            console.log(`✗ ${description} - Expected error but none was thrown`);
        } catch (error) {
            if (error.message === expectedErrorMessage) {
                console.log(`✓ ${description}`);
                passed++;
            } else {
                console.log(`✗ ${description} - Expected error: "${expectedErrorMessage}", Got: "${error.message}"`);
            }
        }
    }

    console.log('Running Calculator tests...\n');

    // Test add method
    test('add(2, 3) should return 5', calculator.add(2, 3), 5);
    test('add(-1, 1) should return 0', calculator.add(-1, 1), 0);
    test('add(0, 0) should return 0', calculator.add(0, 0), 0);
    test('add(10.5, 2.3) should return 12.8', calculator.add(10.5, 2.3), 12.8);

    // Test subtract method
    test('subtract(5, 3) should return 2', calculator.subtract(5, 3), 2);
    test('subtract(1, 1) should return 0', calculator.subtract(1, 1), 0);
    test('subtract(0, 5) should return -5', calculator.subtract(0, 5), -5);
    test('subtract(10.5, 2.3) should return 8.2', calculator.subtract(10.5, 2.3), 8.2);

    // Test multiply method
    test('multiply(4, 3) should return 12', calculator.multiply(4, 3), 12);
    test('multiply(-2, 3) should return -6', calculator.multiply(-2, 3), -6);
    test('multiply(0, 5) should return 0', calculator.multiply(0, 5), 0);
    test('multiply(2.5, 4) should return 10', calculator.multiply(2.5, 4), 10);

    // Test divide method
    test('divide(10, 2) should return 5', calculator.divide(10, 2), 5);
    test('divide(7, 2) should return 3.5', calculator.divide(7, 2), 3.5);
    test('divide(-6, 3) should return -2', calculator.divide(-6, 3), -2);
    test('divide(0, 5) should return 0', calculator.divide(0, 5), 0);

    // Test divide by zero error
    testError('divide(5, 0) should throw error', 
        () => calculator.divide(5, 0), 
        'Division by zero is not allowed');

    console.log(`\nTest Results: ${passed}/${tests} tests passed`);
    
    if (passed === tests) {
        console.log('🎉 All tests passed!');
        process.exit(0);
    } else {
        console.log('❌ Some tests failed');
        process.exit(1);
    }
}

runTests();