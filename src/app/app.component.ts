import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.data$ = store.select('mensagem');
  }

  msgPortugues() {
    this.store.dispatch({ type: 'Portugues' });
    console.log('Português clicado');
  }

  msgEnglish() {
    this.store.dispatch({ type: 'English' });
    console.log('English clicked');
  }
}
