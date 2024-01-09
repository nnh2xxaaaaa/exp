import { ChangeDetectionStrategy, Component, Renderer2, VERSION } from '@angular/core';
interface  user {
  name:string,
  age:number
}
@Component({
  selector: 'app-root',
  template: `<router-outlet />`,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
  title: string = 'list-angular' + VERSION.major;

  constructor(private renderer: Renderer2) {
    this.loadListFromLocalStorage();
  }

  user: user = {
    name: "Nhat Huy",
    age: 26
  };

  list_user: string[] = [];

  private loadListFromLocalStorage() {
    this.list_user = JSON.parse(localStorage.getItem('list') || '[]');
  }

  review() {
    const el = this.renderer.createElement('p');
    this.renderer.setProperty(el, 'innerText', this.user.name);
    const new_user : string = `${this.user.name}${(Math.random()*100).toFixed()}`
    if (!this.list_user.includes(new_user)) {
      this.list_user.push(new_user);
      localStorage.setItem('list', JSON.stringify(this.list_user));
      this.loadListFromLocalStorage();
    } else {
      alert('Name already exists in the list.');
    }
  }

  delete(index: number) {
    this.list_user = this.list_user.filter((_, i) => i !== index);
    localStorage.setItem('list', JSON.stringify(this.list_user));
    this.loadListFromLocalStorage();
  }
}
