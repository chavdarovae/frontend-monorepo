import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild, effect, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AlertService } from '@frontend-monorepo/data-access-core';
import { ACTION_MAP, IBasicUserInteraction, ViewMode } from '@frontend-monorepo/util-models';
import { EMPTY, Observable, Subject, catchError, switchMap, tap } from 'rxjs';
import { BooksService } from '../../data-access/book.service';
import { IBook } from '../../util/book.interfaces';
import { BookInteractionType } from '../../util/book.types';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.scss'],
    standalone: true,
    imports: [RouterLink, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatDividerModule, CommonModule]
})
export class BookDetailComponent implements OnInit {
    // services 
    booksService = inject(BooksService);
    alertService = inject(AlertService);
    router = inject(Router);

    // main entity
	currBookSnl = this.booksService.selectedBookSnl;
    currBook!: IBook;

    // inputs
    @Input() id!: string;

    // template variables
    @ViewChild('bookForm') bookForm!: NgForm;
    currViewMode: ViewMode = ViewMode.READ;
    viewMode = ViewMode;
    currInteraction!: BookInteractionType;
    ongoingRequest = false;

    userInteractionSubj: Subject<IBasicUserInteraction<BookInteractionType, IBook>> = new Subject();
    userInteraction$ = this.getUserInteraction();

    constructor() {
        effect(()=> {
            this.currBook = this.currBookSnl() as IBook;
        })
    }
    
    ngOnInit(): void {
        this.booksService.refreshDetail(this.id || '');
        if (this.id === 'new') {
            this.currViewMode = ViewMode.CREATE;
        }
    }

    modifyCurrBook(action: BookInteractionType) {
        this.userInteractionSubj.next({action, entity: this.currBook});
    }
    
    private getUserInteraction(): Observable<IBook> {
        return this.userInteractionSubj.asObservable().pipe(
            tap((interaction) => {
                this.currInteraction = interaction.action;
                this.ongoingRequest = true;
            }),
            switchMap((interaction) => {
                switch (interaction.action) {
                    case 'create':
                        return this.booksService.createBook(this.currBook as IBook);
                    case 'update':
                        return this.booksService.updateBook(this.id, this.currBook as IBook);
                    case 'delete':
                        return this.booksService.deleteBook(this.id);
                    case 'like':
                        return this.booksService.updateBook(this.id, this.currBook as IBook);
                }
            }),
            tap(() => {
                this.alertService.showAlert(`The entity has been ${ACTION_MAP[this.currInteraction]}.`, 'success');
                this.ongoingRequest = false;
                this.bookForm.resetForm();
                if(!['like'].includes(this.currInteraction)) {
                    this.router.navigate(['/books']);
                }
            }),
            catchError(() => {
                this.alertService.showAlert(`The entity has not been ${ACTION_MAP[this.currInteraction]}.`, 'danger');
                this.ongoingRequest = false;
                return EMPTY;
            })
        );
    }
}
