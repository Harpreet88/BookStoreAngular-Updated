import { Component, OnInit } from '@angular/core';
import { Book } from '../beans/book';
import { BookService } from '../services/book.services';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'get-book',
    templateUrl: 'book.getbook.html'
})

export class GetBookComponent{
 constructor(private bookService: BookService, private router: Router) { }
    book: any = {};

    getBook(): any {
        this.bookService.getBook(this.book);
    }
}