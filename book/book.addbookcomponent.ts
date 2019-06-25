import { Component, OnInit } from '@angular/core';
import { Book } from '../beans/book';
import { BookService } from '../services/book.services';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'add-book',
    templateUrl: 'book.addbook.html'
})
export class AddBookComponent {

    constructor(private bookService: BookService, private router: Router) { }
    book: any = {};

    addBook(): any {
        this.bookService.addBook(this.book);
    }
}