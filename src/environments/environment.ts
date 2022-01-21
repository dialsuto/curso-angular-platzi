// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  host: 'https://platzi-store.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyB8--rSsNTwNPck5mV8MRHO1lqRxRwWg5A',
    authDomain: 'platzi-curso-angular.firebaseapp.com',
    projectId: 'platzi-curso-angular',
    storageBucket: 'platzi-curso-angular.appspot.com',
    messagingSenderId: '768023296507',
    appId: '1:768023296507:web:97a9b4dda3d4977751f35e'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
