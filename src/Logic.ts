import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

//New GUN.js database
export const db = GUN();

//GUN User
export const user = db.user().recall({sessionStorage : true});

//Current Username
export const username = writable('');
user.get('alias').on((v:string) => username.set(v))