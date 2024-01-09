import {Component, Input, Output} from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-inner-content',
  templateUrl: './inner-content.component.html',
  styleUrls: ['./inner-content.component.scss']
})
export class InnerContentComponent {
  @Input() text: string = '';
}
