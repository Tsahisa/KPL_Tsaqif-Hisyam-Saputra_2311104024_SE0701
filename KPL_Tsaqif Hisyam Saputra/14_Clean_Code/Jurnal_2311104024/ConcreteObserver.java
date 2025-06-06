/**
 * Kelas ConcreteObserver yang menerima notifikasi dari subject.
 */
public class ConcreteObserver implements Observer {
    private String observerName; // Nama observer

    /**
     * Konstruktor ConcreteObserver.
     * @param observerName Nama observer.
     */
    public ConcreteObserver(String observerName) {
        this.observerName = observerName;
    }

    @Override
    public void update(String message) {
        System.out.println(observerName + " menerima pesan: " + message);
    }
}