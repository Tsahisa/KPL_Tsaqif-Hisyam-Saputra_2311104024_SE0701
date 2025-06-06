public class ProgramObserver {
    public static void main(String[] args) {
        // Baris 1: Membuat objek subject
        ConcreteSubject subject = new ConcreteSubject();

        // Baris 2-4: Membuat observer dan mendaftarkannya ke subject
        Observer observer1 = new ConcreteObserver("Observer A");
        Observer observer2 = new ConcreteObserver("Observer B");
        subject.attach(observer1);
        subject.attach(observer2);

        // Baris 5: Mengubah state message di subject, observer otomatis diberi notifikasi
        subject.setMessage("Halo Observer!");

        // Baris 6: Melepas observer2 dari daftar observer
        subject.detach(observer2);

        // Baris 7: Mengubah state message lagi, hanya observer1 yang menerima
        subject.setMessage("Pesan kedua");
    }
}