package edu.isep.animo_backend.services;

import java.util.List;

public interface IService<T, U> {
    T findById(U id);
    void save(T object);
    void update(T object);
    boolean deleteById(U id);
    List<T> getAll();
}
