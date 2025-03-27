const multiply = function mult(a, b) {
    if (a === 0 || b === 0) {
        return 0
    }
    if (b < 0) {
        return -1 * mult(a, -1 * b);
    }

    if (b === 1) {
        return a;
    } else {
        return a + mult(a, b - 1)
    }
}

console.log(
    //тест на умножение двух положительных
    multiply(3, 5),
    //умножение одного отрицательного на в качестве а или b
    multiply(-3, 5),
    multiply(3, -5),
    //умножение двух отрицательных
    multiply(-3, -5),
    //умножение одного числа на ноль
    multiply(-3, 0),
    multiply(0, -5),
    // умножение двух нулей
    multiply(0, 0)
)