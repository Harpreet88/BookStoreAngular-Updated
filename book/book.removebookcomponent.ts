import { Component, OnInit } from '@angular/core';
import { Book } from '../beans/book';
import { BookService } from '../services/book.services';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'remove-book',
    templateUrl: 'book.removebook.html'
})

export class RemoveBookComponent{
 constructor(private bookService: BookService, private router: Router) { }
    book: any = {};

    removeBook(): any {
        this.bookService.removeBook(this.book);
    }
}