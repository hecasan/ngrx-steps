import { Action } from '@ngrx/store';

import * as fromMensagem from './mensagem.action';

export interface AppState {
  mensagem: string;
}

export const initialState = {
  mensagem: 'Escolha a linguagem',
};

export function meuReducer(
  state: AppState = initialState,
  action: fromMensagem.MensagensActions
) {
  console.log(action);
  switch (action.type) {
    case fromMensagem.PORTUGUES:
      return {
        ...state,
        mensagem: action.payload,
      };
    case fromMensagem.ENGLISH:
      return {
        ...state,
        mensagem: action.payload,
      };
    default:
      return state;
  }
}
