import { createAction, props } from '@ngrx/store';

export const short=createAction('[log] do login')
export const shortsuccess=createAction('[log] do login success')
export const shortfailure=createAction('[log] do login failure')