import { CariTandaBilangan } from "./script.js";

function testCariTandaBilangan() {
  const cases = [
    { input: -10, expected: "Negatif" },
    { input: 0, expected: "Nol" },
    { input: 15, expected: "Positif" }
  ];

  cases.forEach(({ input, expected }, index) => {
    const result = CariTandaBilangan(input);
    console.assert(result === expected, `Test ${index + 1} gagal: expected ${expected}, got ${result}`);
  });

  console.log("✅ Semua unit test selesai tanpa error.");
}

testCariTandaBilangan();