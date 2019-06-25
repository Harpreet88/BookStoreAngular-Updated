import { Component, OnInit } from '@angular/core';
import { Book } from '../beans/book';
import { BookService } from '../services/book.services';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'update-book',
    templateUrl: 'book.updatebook.html'
})
export class UpdateBookComponent {
    constructor(private bookService: BookService, private router: Router) { }
    book: any = {};

    updateCategory(): any {
        this.bookService.updateBook(this.book);
    }
}