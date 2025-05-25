import fs from 'fs';

class BankTransferConfig {
  constructor() {
    this.configPath = './bank_transfer_config.json';
    this.defaultConfig = {
      lang: "en",
      transfer: {
        threshold: 25000000,
        low_fee: 6500,
        high_fee: 15000
      },
      methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
      confirmation: {
        en: "yes",
        id: "ya"
      }
    };
    this.config = this.loadConfig();
  }

  loadConfig() {
    try {
      const rawData = fs.readFileSync(this.configPath);
      return JSON.parse(rawData);
    } catch (error) {
      fs.writeFileSync(this.configPath, JSON.stringify(this.defaultConfig, null, 2));
      return this.defaultConfig;
    }
  }

  getConfig() {
    return this.config;
  }
}

export default BankTransferConfig;