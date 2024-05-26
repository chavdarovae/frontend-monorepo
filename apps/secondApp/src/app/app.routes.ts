import { Routes } from '@angular/router';

export const SECOND_APP_ROUTES: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: '',
		loadChildren: () => import('@frontend-monorepo/feature-account').then(r => r.ACCOUNT_ROUTES)
	},
	{
		path: 'workouts',
		loadChildren: () => import('modules/feature-workouts/src').then(r => r.WORKOUT_ROUTES),
		data: { listViewTitle: 'Second application / Workout list view'}
	}
];
