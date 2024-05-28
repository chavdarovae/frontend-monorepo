import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from '@frontend-monorepo/environments';
import { BehaviorSubject, Observable, of, shareReplay, switchMap, tap } from 'rxjs';
import { IBook } from '../util/book.interfaces';
import { Book } from '../util/book.models';

@Injectable({
	providedIn: 'root'
})
export class BooksService {
    // services
	private http = inject(HttpClient);

	bookApiUrl = environment.apiUrl + '/api/books';

	// list view
	refreshListSubj: BehaviorSubject<boolean> = new BehaviorSubject(true);
	booksSnl: Signal<IBook[]> = toSignal(this.getAllBooks(), { initialValue: [] });
    
	// detail view
	refreshDetailSubj: BehaviorSubject<string> = new BehaviorSubject('');
	selectedBookSnl: Signal<IBook | undefined> = toSignal(this.getBookById(), { initialValue: undefined });

	refreshList() {
		this.refreshListSubj.next(true);
	}

    refreshDetail(id: string) {
		this.refreshDetailSubj.next(id);
	}

	getAllBooks(): Observable<IBook[]> {
		return this.refreshListSubj.asObservable().pipe(
			switchMap(() => this.http.get<IBook[]>(this.bookApiUrl)),
			shareReplay()
		);
	}

	getBookById(): Observable<IBook> {
		return this.refreshDetailSubj.asObservable().pipe(
            tap((id)=>console.log(id)),
			switchMap((id) => {
                if (id === 'new') {
                    return of(new Book('', '', 0, '', 0));
                }
                return this.http.get<IBook>(this.bookApiUrl + '/' + id);
            }),
			shareReplay()
		);
	}

	createBook(entity: IBook): Observable<IBook> {
        console.log(entity);
        
		return this.http.post<IBook>(this.bookApiUrl, entity);
	}

    updateBook(id: string, entity: IBook) {
        return this.http.patch<IBook>(this.bookApiUrl + '/' + id, entity);
    }

    deleteBook(id: string) {
        return this.http.delete<IBook>(this.bookApiUrl + '/' + id);
    }
}
