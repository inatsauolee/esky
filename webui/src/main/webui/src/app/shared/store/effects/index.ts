import {UserEffects} from './user.effects';
import {CourseEffects} from "./course.effects";
import {ClassEffects} from "./class.effects";
import {PostEffects} from "./post.effects";
import {CoreEffects} from "./core.effects";
export * from './user.effects'
export const effects: any[] = [UserEffects, CourseEffects, ClassEffects, PostEffects, CoreEffects];

