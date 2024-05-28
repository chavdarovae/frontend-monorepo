import { IMenuItem } from "@frontend-monorepo/util-models";

export const SECOND_APP_COLORS: any = {
	pri: '#d857ec',
	sec: '#e8aff1',
	acc: '#ddbeaa',
	danger: '#d77070',
	success: '#46e2a4',
	warn: '#e2a746',
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
