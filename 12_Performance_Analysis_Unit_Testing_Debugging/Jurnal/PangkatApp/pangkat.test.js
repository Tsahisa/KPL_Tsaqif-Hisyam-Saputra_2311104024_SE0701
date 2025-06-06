const { CariNilaiPangkat } = require('./script');

test('Pangkat 0', () => {
  expect(CariNilaiPangkat(5, 0)).toBe(1);
});

test('Pangkat negatif', () => {
  expect(CariNilaiPangkat(5, -2)).toBe(-1);
});

test('B lebih dari 10', () => {
  expect(CariNilaiPangkat(5, 11)).toBe(-2);
});

test('A lebih dari 100', () => {
  expect(CariNilaiPangkat(101, 2)).toBe(-2);
});

test('Hasil normal', () => {
  expect(CariNilaiPangkat(2, 3)).toBe(8);
});

test('Hasil overflow', () => {
  expect(CariNilaiPangkat(100, 9)).toBe(-3);
});