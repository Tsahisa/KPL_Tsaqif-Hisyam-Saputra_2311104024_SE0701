import fs from "fs";

class CovidConfig {
  static configPath = "./covid_config.json";

  constructor() {
    this.config = {
      satuan_suhu: "celcius",
      batas_hari_deman: 14,
      pesan_ditolak: "Anda tidak diperbolehkan masuk ke dalam gedung ini",
      pesan_diterima: "Anda dipersilahkan untuk masuk ke dalam gedung ini"
    };

    this.loadConfig();
  }

  loadConfig() {
    if (fs.existsSync(CovidConfig.configPath)) {
      const rawData = fs.readFileSync(CovidConfig.configPath);
      this.config = JSON.parse(rawData);
    } else {
      fs.writeFileSync(CovidConfig.configPath, JSON.stringify(this.config, null, 2));
    }
  }

  simpanConfig() {
    fs.writeFileSync(CovidConfig.configPath, JSON.stringify(this.config, null, 2));
  }

  UbahSatuan() {
    this.config.satuan_suhu = this.config.satuan_suhu === "celcius" ? "fahrenheit" : "celcius";
    this.simpanConfig();
  }
}

export default CovidConfig;