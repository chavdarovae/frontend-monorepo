import { Routes } from '@angular/router';
import { BookDetailComponent } from './feature/book-detail/book-detail.component';
import { BookListComponent } from './feature/book-list/book-list.component';

export const BOOK_ROUTES: Routes = [
	{
		path: '',
		component: BookListComponent,
	},
	{
		path: ':id',
		component: BookDetailComponent,
	}
];
