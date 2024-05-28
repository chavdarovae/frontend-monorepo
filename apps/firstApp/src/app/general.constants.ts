import { IMenuItem } from "@frontend-monorepo/util-models";

export const FIRST_APP_COLORS: any = {
	pri: '#469597',
	sec: '#5ba199',
	acc: '#ddbeaa',
	danger: '#d77070',
	success: '#46e2a4',
	warn: '#e2a746',
	textPri: '#ffffff',
	textSec: '#000000',
	bgPri: '#b8dedc',
	bgSec: '#bbc6c8'
};

export const FIRST_APP_MENUS: IMenuItem[] = [
	{
		id: 1,
		path: '/about',
		title: 'About',
	},
    {
		id: 2,
		path: '/books',
		title: 'Books',
	},
	{
		id: 3,
		path: '/logout',
		title: 'Logout',
	}
];

