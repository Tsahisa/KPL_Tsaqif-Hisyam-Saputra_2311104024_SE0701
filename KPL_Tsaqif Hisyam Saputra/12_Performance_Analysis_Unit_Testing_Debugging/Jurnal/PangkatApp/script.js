function CariNilaiPangkat(a, b) {
  if (b === 0) {
    return 1;
  }
  if (b < 0) {
    return -1;
  }
  if (b > 10 || a > 100) {
    return -2;
  }

  let hasil = 1;
  try {
    for (let i = 0; i < b; i++) {
      hasil = hasil * a;
      if (hasil > Number.MAX_SAFE_INTEGER) { return -3;
      }
    }
  } catch (error) {
    return -3;
  }

  return hasil;
}

function hitungPangkat() {
  const a = parseInt(document.getElementById("inputA").value);
  const b = parseInt(document.getElementById("inputB").value);
  const hasil = CariNilaiPangkat(a, b);
  document.getElementById("output").textContent = hasil;
}

module.exports = { CariNilaiPangkat };