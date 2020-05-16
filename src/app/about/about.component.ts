import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/firestore'
import {Course} from '../model/course';

var config = {
  apiKey: "AIzaSyCqc-YKO-9Yg3msB3cgTj6UIeRjs1IlXGY",
  authDomain: "udemy-firebase-course-d0412.firebaseapp.com",
  databaseURL: "https://udemy-firebase-course-d0412.firebaseio.com",
  projectId: "udemy-firebase-course-d0412",
  storageBucket: "udemy-firebase-course-d0412.appspot.com",
  messagingSenderId: "587532464498",
  appId: "1:587532464498:web:3797e204d8efa757892deb",
  measurementId: "G-FHEZKX2B99"
};

firebase.initializeApp(config);

const db = firebase.firestore();

const setting = {timestampsInSnapshots: true};
db.settings(setting);

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    db.collection('courses')
      .get()
      .then(snaps => {
        const courses: Course[] = snaps.docs.map(snap => {
          return <Course>{
            id: snap.id,
            ...snap.data()
          }
        });
        console.log(courses);
      });
  }

}
