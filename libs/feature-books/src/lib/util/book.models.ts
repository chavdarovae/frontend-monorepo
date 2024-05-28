import { IBook } from "./book.interfaces";

export class Book implements IBook {
	title: string;
	author: string;
	pages: number;
	summary: string;
	likes: number;
	_id: string;
	constructor(
        title: string,
        author: string,
        pages: number,
        summary: string,
        likes: number,
        _id?: string,
	) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.summary = summary;
		this.likes = likes;
		this._id = _id ? _id : '';
	}
}
