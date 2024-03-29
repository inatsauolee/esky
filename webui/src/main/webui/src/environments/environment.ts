// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  endpoint: 'http://localhost:8080'
};

export const api = {
  category: '/category',
  course: '/course',
  class: '/class',
  post: '/post',
  user: '/user',
  save: '/save',
  get: '/get',
  update: '/update',
  delete: '/delete/',
  all: '/all',
  role: '/role/',
  mine: '/mine',
  auth: '/auth',
  filter: '/filter',
  creator: '/creator/',
  student: '/student/',
  count: '/count/',
  like: '/like',
  dislike: '/dislike/',
  comment: '/comment'
};
