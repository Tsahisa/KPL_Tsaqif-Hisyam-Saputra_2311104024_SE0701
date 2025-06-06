/**
 * Program utama untuk menjalankan contoh Observer pattern.
 */
public class ProgramObserver {
    public static void main(String[] args) {
        // Membuat objek ConcreteSubject
        ConcreteSubject subject = new ConcreteSubject();

        // Membuat observer dan mendaftarkannya ke subject
        Observer observerA = new ConcreteObserver("Observer A");
        Observer observerB = new ConcreteObserver("Observer B");

        subject.attach(observerA);
        subject.attach(observerB);

        // Mengubah pesan di subject, observer otomatis menerima notifikasi
        subject.setMessage("Halo Observer!");

        // Melepas observerB dari subject
        subject.detach(observerB);

        // Mengubah pesan lagi, hanya observerA yang menerima
        subject.setMessage("Pesan kedua");
    }
}