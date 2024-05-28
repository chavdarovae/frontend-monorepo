import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '@frontend-monorepo/ui-components';
import { WorkoutsService } from '../../data-access/workouts.service';
import { WorkoutPreviewComponent } from '../../ui/workout-preview/workout-preview.component';
import { IWorkout } from '../../util/interface/workout.interfaces';

@Component({
    selector: 'app-workout-list',
    templateUrl: './workout-list.component.html',
    styleUrls: ['./workout-list.component.scss'],
    standalone: true,
    imports: [
        SectionTitleComponent,
        RouterLink,
        MatButtonModule,
        WorkoutPreviewComponent,
        CommonModule
    ],
	providers: [WorkoutsService]
})
export class WorkoutListComponent implements OnInit {
	private workoutsService = inject(WorkoutsService);

	workoutList = this.workoutsService.workoutsSnl; // reference to signal not the value of the signal

	totalWorkouts = computed(()=> this.workoutList().length);
	totalLikes = computed(()=> this.workoutList()
		.flatMap((w: IWorkout) => w.likes)
		.reduce((a, acc) => acc + a, 0));

	ngOnInit(): void {
		this.workoutsService.refreshList();
	}

	deleteWorkout(entity: IWorkout) {
		this.workoutsService.modifyWorkoutSubject.next({action: 'delete', entity});
	}

	likeWorkout(entity: IWorkout) {
		entity.likes = entity.likes ? entity.likes + 1 : 1;
		this.workoutsService.modifyWorkoutSubject.next({action: 'modify', entity});
	}

	selectWorkout(entity: IWorkout) {
		this.workoutsService.modifyWorkoutSubject.next({action: 'select', entity});
	}
}
