import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertComponent, AppUtilsService } from '@frontend-monorepo/data-access-core';
import { AuthService } from '@frontend-monorepo/feature-account';
import { FooterComponent, HeaderComponent } from '@frontend-monorepo/ui-components';
import { SECOND_APP_COLORS, SECOND_APP_MENUS } from './core/data-access/constants/general.constants';

@Component({
	standalone: true,
	imports: [RouterModule, NgIf, HeaderComponent, FooterComponent, AlertComponent],
	selector: 'sec-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	appColors= SECOND_APP_COLORS;
	appMenuItems = SECOND_APP_MENUS;
	appUtilsService = inject(AppUtilsService);
	authService = inject(AuthService);

	constructor() {
		this.appUtilsService.setUserColors(this.appColors);
	}
}
