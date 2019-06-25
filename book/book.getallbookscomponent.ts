import { Component, OnInit } from '@angular/core';
import { Book } from '../beans/book';
import { BookService } from '../services/book.services';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'getall-book',
    templateUrl: 'book.getallbooks.html'
})

export class GetAllBooksComponent{
 constructor(private bookService: BookService, private router: Router) { }
    book: any = {};

    getAllBooks(): any {
        this.bookService.getAllBooks();
    }
}