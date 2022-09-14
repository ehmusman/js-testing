import {describe,it, expect, vi} from "vitest"

import {generateReportData} from "./data"

describe('generateReportData()', () => { 
    it("should execute log function if provided", () => {
        const logger = vi.fn()
        generateReportData(logger)

        expect(logger).toHaveBeenCalled()
        // expect(logger).toBeCalledTimes(2) // to check if the function is called twice
    })
 })