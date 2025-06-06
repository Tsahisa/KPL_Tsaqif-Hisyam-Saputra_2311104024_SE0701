import java.util.ArrayList;
import java.util.List;

class PusatDataSingleton {
    // Property singleton
    private static PusatDataSingleton _instance;

    // Atribut DataTersimpan
    private List<String> DataTersimpan;

    // Konstruktor private
    private PusatDataSingleton() {
        DataTersimpan = new ArrayList<>();
    }

    // Method GetDataSingleton()
    public static PusatDataSingleton GetDataSingleton() {
        if (_instance == null) {
            _instance = new PusatDataSingleton();
        }
        return _instance;
    }

    // Method GetSemuaData()
    public List<String> GetSemuaData() {
        return DataTersimpan;
    }

    // Method PrintSemuaData()
    public void PrintSemuaData() {
        System.out.println("Daftar Data:");
        for (int i = 0; i < DataTersimpan.size(); i++) {
            System.out.println((i+1) + ". " + DataTersimpan.get(i));
        }
        System.out.println();
    }

    // Method AddSebuahData()
    public void AddSebuahData(String input) {
        DataTersimpan.add(input);
    }

    // Method HapusSebuahData()
    public void HapusSebuahData(int index) {
        if (index >= 0 && index < DataTersimpan.size()) {
            DataTersimpan.remove(index);
        } else {
            System.out.println("Index tidak valid!");
        }
    }
}