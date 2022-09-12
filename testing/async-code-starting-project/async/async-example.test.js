import {it, expect} from "vitest"
import {generateToken, generateTokenPromise} from "./async-example"


it("should generate a token value", (done) => {
const testUserEmail = "ehmusman@gmail.com"
generateToken(testUserEmail, (err, token) => {
    try {
        expect(token).toBeDefined()
        // expect(token).toBe(2)
        done()
    } catch (error) {
        done(error)
    }
})
})

it("should generate a token value", () => {
    const testUserEmail = "ehmusman@gmail.com"
    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined()
})

it("should generate a token value", async () => {
    const testUserEmail = "ehmusman@gmail.com"

    const result = await generateTokenPromise(testUserEmail)

    expect(result).toBeDefined()
})