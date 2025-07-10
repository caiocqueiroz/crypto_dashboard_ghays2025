// Calculator class with basic arithmetic operations
class Calculator {
    /**
     * Add two numbers
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} Sum of a and b
     */
    add(a, b) {
        return a + b;
    }

    /**
     * Subtract second number from first number
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} Difference of a and b
     */
    subtract(a, b) {
        return a - b;
    }

    /**
     * Multiply two numbers
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} Product of a and b
     */
    multiply(a, b) {
        return a * b;
    }

    /**
     * Divide first number by second number
     * @param {number} a - First number (dividend)
     * @param {number} b - Second number (divisor)
     * @returns {number} Quotient of a and b
     * @throws {Error} When dividing by zero
     */
    divide(a, b) {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }
}

module.exports = Calculator;