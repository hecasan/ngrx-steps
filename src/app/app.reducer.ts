import { Action } from '@ngrx/store';

export interface AppState {
  mensagem: string;
}

export const initialState = {
  mensagem: 'Hecasan',
};

export function meuReducer(state: AppState = initialState, action: Action) {
  console.log(action);
  switch (action.type) {
    case 'Portugues':
      return {
        ...state,
        mensagem: 'Olá Mundo',
      };
    case 'English':
      return {
        ...state,
        mensagem: 'Hello World',
      };
    default:
      return state;
  }
}
