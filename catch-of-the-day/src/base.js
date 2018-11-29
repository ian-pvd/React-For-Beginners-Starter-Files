import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCWVumqP-dEZIaj4lncGWeuW0cgLnn4384',
  authDomain: 'pvd-catch-of-the-day.firebaseapp.com',
  databaseURL: 'https://pvd-catch-of-the-day.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
