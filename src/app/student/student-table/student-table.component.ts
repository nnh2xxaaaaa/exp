import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { StudentStores } from '../student.store';


const nzModules = [NzTableModule, NzDropDownModule, NzSpinModule, NzIconModule, NzInputModule, NzButtonModule];


@Component({
  standalone: true,
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    ...nzModules
  ],
  providers: [StudentStores]
})
export class StudentTableComponent {

  readonly isLoading$ = this.store.isLoading$;
  size: NzButtonSize = 'large';
  constructor(
    private readonly store: StudentStores
  ) {
  }

  searchValue = '';
  visible = false;
  listOfData$ = this.store.users$;


  delete(id: string) {
    this.store.patchState({ idUser: id });
    this.store.delete();
  }


}
