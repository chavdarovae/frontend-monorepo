import { IMenuItem } from "@frontend-monorepo/ui-components";

export const SECOND_APP_COLORS: any = {
	pri: '#d857ec',
	sec: '#e8aff1',
	acc: '#ddbeaa',
	danger: 'red',
	success: 'green',
	warn: 'tomato',
	textPri: '#ffffff',
	textSec: '#000000',
	bgPri: '#dfd3e2',
	bgSec: '#bbc6c8'
};

export const SECOND_APP_MENUS: IMenuItem[] = [
	{
		id: 1,
		path: '/about',
		title: 'About',
	},
	{
		id: 2,
		path: '/workouts',
		title: 'Workouts',
	},
	{
		id: 3,
		path: '/logout',
		title: 'Logout',
	}
];
