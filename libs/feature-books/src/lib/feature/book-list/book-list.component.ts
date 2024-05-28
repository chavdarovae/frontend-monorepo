import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, Input, OnInit, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { SectionTitleComponent } from '@frontend-monorepo/ui-components';
import { BooksService } from '../../data-access/book.service';
import { BookPreviewComponent } from '../../ui/book-preview/book-preview.component';
import { IBook } from '../../util/book.interfaces';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss'],
    standalone: true,
    imports: [
        RouterLink, 
        MatButtonModule, 
        BookPreviewComponent, 
        JsonPipe, 
        AsyncPipe, 
        NgIf,
        SectionTitleComponent
    ]
})
export class BookListComponent implements OnInit {
    // services 
	private booksService = inject(BooksService);
	private router = inject(Router);

    @Input() title!: string;

	bookList = this.booksService.booksSnl; // reference to signal not the value of the signal
	totalBooks = computed(()=> this.bookList().length);
	totalLikes = computed(()=> this.bookList()
		.flatMap((b: IBook) => b.likes)
		.reduce((a, acc) => acc + a, 0));

	ngOnInit(): void {
		this.booksService.refreshList();
	}

    showDetails(id: string) {
        this.router.navigate(['books/' + id]);
    }
}
