import { Action } from '@ngrx/store';

// Vamos criar a variavel constante para ter a referencia de cada ação
export const PORTUGUES = '[Mensagem] Mensagem em Português';
export const ENGLISH = '[Mensagem] Message in english';

// Vamos criar as classes para cada ação e essa ação vai implementar Action
// dentro da classe, vamos criar uma variavel do tipo readonly e vamos chamar type e o valor vai ser o nome da variável constante
// e aabixo, vamos criar um contrutor e nele passar um parametro publico e chamar de payload e o tipo dele será string. Esse payload é uma informação que srá exibida todas vez que o usuario fazer uma ação.

export class MensagemEmPortugues implements Action {
  readonly type = PORTUGUES; // Isto vai linkar essa classe à variável constante
  constructor(public payload: string) {}
}
export class messageInenglish implements Action {
  readonly type = ENGLISH; // Isto vai linkar essa classe à variável constante
  constructor(public payload: string) {}
}
// Agora vamos exportar todas as classes e dar um type para esse conjunto de classes e elas vão receber as classes criadas acima separadas pelo pipe | (ou)
export type MensagensActions = MensagemEmPortugues | messageInenglish;

// Agora vamos fazer uma referencia a todo esse documento que acabamos de criar.
// Ir no app.Component e fazer o import dessa referencia
