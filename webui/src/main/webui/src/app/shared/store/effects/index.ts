import {UserEffects} from './user.effects';
import {CourseEffects} from "./course.effects";
import {ClassEffects} from "./class.effects";
export * from './user.effects'
export const effects: any[] = [UserEffects, CourseEffects, ClassEffects];

