# My Patco

My Patco is an Angular PWA (Progressive Web Applications) powered by Firebase, for the south new jersey transit.

- [Production](https://mypatco.org/)


## Features

- Angular 8.x + Firebase
- Installable PWA
- OAuth and Email/Password Signup with Firebase
- Angular Universal SSR with Nest.js deployed to Google Cloud Run
- Optional SSR Prerendering Script

## Usage

1.  Run

- `git clone https://github.com/MyPatco/site.git mypatco`
- `cd mypatco`
- `npm install`

2.  Create a project at https://firebase.google.com/ and grab your web config:

![](https://github.com/MyPatco/site/master/src/assets/config_example.png)

3.  Add the config to your Angular environment

#### src/environments/

Update the `environment.prod.ts` and `environment.ts` files. 

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'APIKEY',
    authDomain: 'DEV-APP.firebaseapp.com',
    databaseURL: 'https://DEV-APP.firebaseio.com',
    projectId: 'DEV-APP',
    storageBucket: 'DEV-APP.appspot.com',
    messagingSenderId: '...',
    appId: '...',
  }
};
```


5.  Run `ng serve`
6. For Production `ng build --prod` 
