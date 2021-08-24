import {Action} from '@ngrx/store';
import { TodoActionType } from '../shared/enum/todo-action-types';

export class ActionParent implements Action {
  type: string;
  payload: any;
}
 export class TodoAdd implements ActionParent{
   type = TodoActionType.add;
   constructor(public payload: any){

   }
 }
 export class TodoRemove implements ActionParent{
  type = TodoActionType.remove;
  constructor(public payload: any){

  }
}
