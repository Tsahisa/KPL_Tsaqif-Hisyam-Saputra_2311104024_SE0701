import java.util.ArrayList;
import java.util.List;

/**
 * Kelas ConcreteSubject yang menyimpan data dan notifikasi observer.
 */
public class ConcreteSubject implements Subject {
    private List<Observer> observerList = new ArrayList<>(); // Daftar observer
    private String message; // Pesan yang akan dikirim ke observer

    @Override
    public void attach(Observer observer) {
        observerList.add(observer);
    }

    @Override
    public void detach(Observer observer) {
        observerList.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observerList) {
            observer.update(message);
        }
    }

    /**
     * Method untuk mengubah pesan dan langsung memberi notifikasi ke observer.
     * @param message Pesan baru yang akan dikirimkan.
     */
    public void setMessage(String message) {
        this.message = message;
        notifyObservers();
    }
}