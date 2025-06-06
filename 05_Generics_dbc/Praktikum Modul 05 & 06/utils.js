// Fungsi assertion untuk defensive programming
// Digunakan untuk memastikan kondisi tertentu sebelum eksekusi kode
function assert(condition, message) {
    if (!condition) {
        throw new Error(`Assertion failed: ${message}`);
    }
}

// Fungsi memastikan bahwa nilai yang diterima adalah angka yang valid
function ensureNumber(value, variableName) {
    if (typeof value !== "number" || Number.isNaN(value)) {
        throw new Error(`Type Error: ${variableName} harus berupa angka yang valid.`);
    }
    return value;
}

// Ekspor fungsi agar bisa digunakan di file lain
export { assert, ensureNumber };
