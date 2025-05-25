import readline from 'readline';
import BankTransferConfig from './BankTransferConfig.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const config = new BankTransferConfig().getConfig();
const lang = config.lang;

const question = lang === 'id'
  ? 'Masukkan jumlah uang yang akan di-transfer: '
  : 'Please insert the amount of money to transfer: ';

rl.question(question, (amountInput) => {
  const amount = parseInt(amountInput);
  const fee = amount <= config.transfer.threshold ? config.transfer.low_fee : config.transfer.high_fee;
  const total = amount + fee;

  if (lang === 'id') {
    console.log(`Biaya transfer = ${fee}`);
    console.log(`Total biaya = ${total}`);
  } else {
    console.log(`Transfer fee = ${fee}`);
    console.log(`Total amount = ${total}`);
  }

  const methodPrompt = lang === 'id' ? 'Pilih metode transfer:' : 'Select transfer method:';
  console.log(methodPrompt);
  config.methods.forEach((method, index) => {
    console.log(`${index + 1}. ${method}`);
  });

  rl.question('> ', () => {
    const confirmationPrompt = lang === 'id'
      ? `Ketik "${config.confirmation.id}" untuk mengkonfirmasi transaksi: `
      : `Please type "${config.confirmation.en}" to confirm the transaction: `;

    rl.question(confirmationPrompt, (confirmationInput) => {
      const validConfirmation = lang === 'id' ? config.confirmation.id : config.confirmation.en;
      if (confirmationInput.trim().toLowerCase() === validConfirmation.toLowerCase()) {
        console.log(lang === 'id' ? 'Proses transfer berhasil' : 'The transfer is completed');
      } else {
        console.log(lang === 'id' ? 'Transfer dibatalkan' : 'Transfer is cancelled');
      }
      rl.close();
    });
  });
});