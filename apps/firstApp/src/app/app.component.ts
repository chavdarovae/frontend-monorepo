import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent, AppUtilsService } from '@frontend-monorepo/data-access-core';
import { AuthService } from '@frontend-monorepo/feature-account';
import { FooterComponent, HeaderComponent } from '@frontend-monorepo/ui-components';
import { FIRST_APP_COLORS, FIRST_APP_MENUS } from './core/constants/general.constants';

@Component({
    selector: 'fir-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, AlertComponent, NgIf]
})
export class AppComponent {
	appColors = FIRST_APP_COLORS;
	appMenuItems = FIRST_APP_MENUS;
	appUtilsService = inject(AppUtilsService);
	authService = inject(AuthService);

	constructor() {
		this.appUtilsService.setUserColors(this.appColors);
	}
}
