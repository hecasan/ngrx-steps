import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.reducer';

import * as fromMensagem from './mensagem.action'; // importe tudo do arquivo mensagem.actio e dê o nome de fromMensagem

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
    // this.store.dispatch({ type: 'Portugues' });
    this.store.dispatch(
      new fromMensagem.MensagemEmPortugues('As cores da vida')
    );
  }

  msgEnglish() {
    // this.store.dispatch({ type: 'English' });
    this.store.dispatch(
      new fromMensagem.messageInenglish('The colors of life')
    );
  }
}
