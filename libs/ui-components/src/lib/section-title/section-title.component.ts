import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-section-title',
    templateUrl: './section-title.component.html',
    styleUrls: ['./section-title.component.scss'],
    standalone: true,
    imports: [ RouterModule, CommonModule ]
})
export class SectionTitleComponent {
    @Input()creationUrl!: string;
    @Input()title!: string;
}
