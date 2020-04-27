import {UserEffects} from './user.effects';
import {CourseEffects} from "./course.effects";
export * from './user.effects'
export const effects: any[] = [UserEffects, CourseEffects];

