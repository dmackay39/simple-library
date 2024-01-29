package com.example.service;

import com.example.model.Book;
import com.example.repository.IBookRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookServiceImpl implements IBookService{
    private final IBookRepository bookRepository;

    public BookServiceImpl(IBookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    private List<Book> convertToList(Iterable<Book> bookItr){
        List<Book> books = new ArrayList<>();
        bookItr.forEach(books::add);
        return books;
    }

    @Override
    public List<Book> findAll() {
        Iterable<Book> bookItr = bookRepository.findAll();
        return convertToList(bookItr);
    }

    @Override
    public Book findById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    @Override
    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Book updateBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}
