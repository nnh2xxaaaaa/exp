import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { EMPTY, finalize, switchMap, tap } from 'rxjs';
import { StudentService } from '../service/student-service/student.service';
import { Students } from '../index/models/student.model';
export interface DashboardTableDetailUserState {
    students: Students;
    isLoading: boolean;
    idUser: string;
}

const initialState: DashboardTableDetailUserState = {
    students: [],
    isLoading: false,
    idUser: '',
};
@Injectable()
export class StudentStores extends ComponentStore<DashboardTableDetailUserState> {
    readonly users$ = this.select((s) => s.students);
    readonly isLoading$ = this.select((s) => s.isLoading);

    constructor(
        private readonly studentsService: StudentService,
    ) {
        super({ ...initialState });
        this.loadUsers();
    }

    readonly loadUsers = this.effect((params$) =>
        params$.pipe(
            tap(() => this.patchState({ isLoading: true })),
            switchMap(() =>
                this.studentsService.getStudents().pipe(
                    tapResponse(
                        (users) => {
                            this.patchState({ students: users, isLoading: false });
                        },
                        () => {
                            this.patchState({ isLoading: false });
                        }
                    )
                )
            )
        )
    );

    readonly delete = this.effect((params$) =>
        params$.pipe(
            tap(() => {
                this.patchState({ isLoading: true });
            }),
            switchMap(() => {
                const ids = this.get((s) => s.idUser);
                // Check if ids is not an empty string before making the delete request
                if (ids !== '') {
                    return this.studentsService.delete(ids).pipe(
                        finalize(() => {
                            this.patchState({ isLoading: false });

                        }),
                        tapResponse(
                            () => {
                                this.loadUsers();
                            },
                            (error: HttpErrorResponse) => {
                            }
                        )
                    );
                } else {
                    this.patchState({ idUser: '' });
                    return EMPTY;
                }
            })
        )
    );




}
