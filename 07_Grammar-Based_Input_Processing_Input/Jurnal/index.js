import DataMahasiswa from "./src/dataMahasiswa.js";
import AnggotaTim from "./src/AnggotaTim.js";
import GlossaryItem from "./src/glossaryitem.js";

async function main() {
//   await DataMahasiswa.ReadJSON();
//   await AnggotaTim.ReadJSON();
  await GlossaryItem.ReadJSON();
}

main();