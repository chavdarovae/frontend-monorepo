import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMenuItem } from '@frontend-monorepo/util-models';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
	imports: [ RouterModule, CommonModule ]
})
export class HeaderComponent {
	@Input() menuItems!: IMenuItem[];
}
