/**
 * Interface untuk Subject yang diamati oleh Observer.
 */
public interface Subject {
    void attach(Observer observer);
    void detach(Observer observer);
    void notifyObservers();
}