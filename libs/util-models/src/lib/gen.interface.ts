export interface IMenuItem {
	id: number,
	path: string,
	title: string
}


export interface IAlert {
	msg: string,
	type: 'danger' | 'success' | 'warn'
}
