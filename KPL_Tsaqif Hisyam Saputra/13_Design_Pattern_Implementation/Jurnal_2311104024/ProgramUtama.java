public class ProgramUtama {
    public static void main(String[] args) {
        // A. Buat dua variabel data1 dan data2
        PusatDataSingleton data1 = PusatDataSingleton.GetDataSingleton();
        PusatDataSingleton data2 = PusatDataSingleton.GetDataSingleton();

        // B. Tambahkan beberapa data ke data1
        data1.AddSebuahData("Tsaqif Hisyam");
        data1.AddSebuahData("Christian Felix");
        data1.AddSebuahData("Zulfa Mustafa");
        data1.AddSebuahData("Asisten: Kaka");

        // C. Print semua data dari data2
        data2.PrintSemuaData();

        // D. Hapus asisten praktikum (misal index ke-3 = data ke-4)
        data2.HapusSebuahData(3);

        // E. Print semua data dari data1 setelah dihapus
        data1.PrintSemuaData();

        // F. Tampilkan jumlah data di data1 dan data2
        System.out.println("Jumlah data di data1: " + data1.GetSemuaData().size());
        System.out.println("Jumlah data di data2: " + data2.GetSemuaData().size());
    }
}