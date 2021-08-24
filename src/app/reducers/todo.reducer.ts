/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { TodoActionType } from '../shared/enum/todo-action-types';
import { ActionParent } from '../actions/todo-actions';
import {Todo} from '../models/todo';

export const initialState: Todo[] = [
  {title: 'Todo 1'},
  {title: 'Todo 2'},
  {title: 'Todo 3'},
];

// eslint-disable-next-line @typescript-eslint/naming-convention
export function TodoReducer(state = initialState,action: ActionParent){
    switch(action.type){
      case TodoActionType.add:
        console.log(action.payload,'ppp');
        return [...state,action.payload];
      case TodoActionType.remove:
        const newState = [...state];
        newState.splice(action.payload, 1);
        return newState;
      default:
        return state;
    }
}
