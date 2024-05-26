import { Routes } from '@angular/router';

export const FIRST_APP_ROUTES: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: '',
		loadChildren: () => import('@frontend-monorepo/feature-account').then(r => r.ACCOUNT_ROUTES)
	}
];
