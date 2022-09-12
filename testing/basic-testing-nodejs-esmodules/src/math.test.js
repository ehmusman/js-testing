import { it, expect } from "vitest"
import { add } from "./math"

it("Should summarize all number values in an array", () => {
    // arrange
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const expectedResult = numbers.reduce((a, b) => a + b, 0)

    // act
    const result = add(numbers)

    //Assert
    expect(result).toBe(expectedResult)
})

it("Should yield NaN if at least one invalid number is provides", () => {
    const numbers = ['invalid', 1, 2]
    const result = add(numbers)

    expect(result).toBeNaN()
})

it("Should yield a correct sum if an array of numeric string value is provided", () => {
    const numbers = ['1', '2']
    const result = add(numbers)
    const expectedResult = numbers.reduce((a, b) => +a + +b, 0)
    expect(result).toBe(expectedResult)
})

it('should yield 0 if an empty array is provides', () => {
    const numbers = []
    const result = add(numbers)
    expect(result).toBe(0)
})

it('should throw an error if no value is passed to the function', () => {
    // point to be noted, in javascript are not returned, but these are throwned.
    // so to catch these we can use trycarch in test cases. like

    // try {
    //     const result = add()
    // } catch (error) {
    //     expect(error).toBeDefined()
    // }

    // we also have another approach
    const resultFn = () => {
        add()
    }
    expect(resultFn).toThrow() // we can also add not() after expect to inverse the result
    // expect(resultFn).not().toThrow()

})

it('should throw an error if provided multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;
    const resultFn = () => {
        add(num1, num2)
    }
    expect(resultFn).toThrow(/is not iterable/)
})