const Reader = require("./../../lib/utils/Reader");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

// Test suite

describe("Test suite for FizzbuzzService", () => {

    test("Get the tricks depending on their score", () => {
        const explorers = Reader.readJsonFile("test/services/testFile.json");
        
        // Woopa1 has score of 15 (multiple of 3 and 5)
        let Woopa1Explorer = FizzbuzzService.applyValidationInExplorer(explorers[0]);
        expect(Woopa1Explorer.trick).toBe("FIZZBUZZ");

        // Woopa2 has score of 1 (not a multiple of 3 nor of 5)
        let Woopa2Explorer = FizzbuzzService.applyValidationInExplorer(explorers[1]);
        expect(Woopa2Explorer.trick).toBe(1);

        // Woopa3 has score of 5 (multiple of 5)
        let Woopa3Explorer = FizzbuzzService.applyValidationInExplorer(explorers[2]);
        expect(Woopa3Explorer.trick).toBe("BUZZ");

        // Woopa4 has score of 9 (multiple of 3)
        let Woopa4Explorer = FizzbuzzService.applyValidationInExplorer(explorers[3]);
        expect(Woopa4Explorer.trick).toBe("FIZZ");

    });
});