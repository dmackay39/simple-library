package com.example.service;

import com.example.model.Book;

import java.util.List;

public interface IBookService {
    List<Book> findAll();
    Book findById(Long id);
    Book createBook(Book book);
    Book updateBook(Book book);
    void deleteBook(Long id);
}
