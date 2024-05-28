import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { IBook } from '../../util/book.interfaces';

@Component({
    selector: 'app-book-preview',
    templateUrl: './book-preview.component.html',
    styleUrls: ['./book-preview.component.scss'],
    standalone: true,
    imports: [NgIf, MatCardModule, MatDividerModule, MatButtonModule]
})
export class BookPreviewComponent {
	@Input() book!: IBook;
	@Output() likeBook: EventEmitter<IBook> =  new EventEmitter();
	@Output() deleteBook: EventEmitter<IBook> =  new EventEmitter();
}
