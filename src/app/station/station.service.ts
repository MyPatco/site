import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';
import { Station } from './station.model';

@Injectable({
    providedIn: 'root'
})
export class StationService {
    constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

    test = [{
        "title": "12-13th & Locust St",
        "eastBound": [
            {
                "departure_time": "12:06 AM","status": "On Time"
            },
            {
                "departure_time": "12:44 AM","status": "On Time"
            },
            {
                "departure_time": "1:29 AM","status": "On Time"
            },
            {
                "departure_time": "2:14 AM","status": "On Time"
            },
            {
                "departure_time": "2:59 AM","status": "On Time"
            },
            {
                "departure_time": "3:44 AM","status": "On Time"
            },
            {
                "departure_time": "4:29 AM","status": "On Time"
            },
            {
                "departure_time": "5:16 AM","status": "On Time"
            },
            {
                "departure_time": "5:31 AM","status": "On Time"
            },
            {
                "departure_time": "5:46 AM","status": "On Time"
            },
            {
                "departure_time": "6:01 AM","status": "On Time"
            },
            {
                "departure_time": "6:16 AM","status": "On Time"
            },
            {
                "departure_time": "6:31 AM","status": "On Time"
            },
            {
                "departure_time": "6:41 AM","status": "On Time"
            },
            {
                "departure_time": "6:53 AM","status": "On Time"
            },
            {
                "departure_time": "7:01 AM","status": "On Time"
            },
            {
                "departure_time": "7:11 AM","status": "On Time"
            },
            {
                "departure_time": "7:21 AM","status": "On Time"
            },
            {
                "departure_time": "7:35 AM","status": "On Time"
            },
            {
                "departure_time": "7:48 AM","status": "On Time"
            },
            {
                "departure_time": "7:58 AM","status": "On Time"
            },
            {
                "departure_time": "8:17 AM","status": "On Time"
            },
            {
                "departure_time": "8:22 AM","status": "On Time"
            },
            {
                "departure_time": "8:33 AM","status": "On Time"
            },
            {
                "departure_time": "8:41 AM","status": "On Time"
            },
            {
                "departure_time": "8:54 AM","status": "On Time"
            },
            {
                "departure_time": "9:09 AM","status": "On Time"
            },
            {
                "departure_time": "9:25 AM","status": "On Time"
            },
            {
                "departure_time": "9:34 AM","status": "On Time"
            },
            {
                "departure_time": "9:45 AM","status": "On Time"
            },
            {
                "departure_time": "9:57 AM","status": "On Time"
            },
            {
                "departure_time": "10:09 AM","status": "On Time"
            },
            {
                "departure_time": "10:21 AM","status": "On Time"
            },
            {
                "departure_time": "10:33 AM","status": "On Time"
            },
            {
                "departure_time": "10:45 AM","status": "On Time"
            },
            {
                "departure_time": "10:57 AM","status": "On Time"
            },
            {
                "departure_time": "11:09 AM","status": "On Time"
            },
            {
                "departure_time": "11:21 AM","status": "On Time"
            },
            {
                "departure_time": "11:33 AM","status": "On Time"
            },
            {
                "departure_time": "11:45 AM","status": "On Time"
            },
            {
                "departure_time": "11:57 AM","status": "On Time"
            },
            {
                "departure_time": "12:09 PM","status": "On Time"
            },
            {
                "departure_time": "12:21 PM","status": "On Time"
            },
            {
                "departure_time": "12:33 PM","status": "On Time"
            },
            {
                "departure_time": "12:45 PM","status": "On Time"
            },
            {
                "departure_time": "12:57 PM","status": "On Time"
            },
            {
                "departure_time": "1:09 PM","status": "On Time"
            },
            {
                "departure_time": "1:21 PM","status": "On Time"
            },
            {
                "departure_time": "1:33 PM","status": "On Time"
            },
            {
                "departure_time": "1:45 PM","status": "On Time"
            },
            {
                "departure_time": "1:57 PM","status": "On Time"
            },
            {
                "departure_time": "2:09 PM","status": "On Time"
            },
            {
                "departure_time": "2:21 PM","status": "On Time"
            },
            {
                "departure_time": "2:33 PM","status": "On Time"
            },
            {
                "departure_time": "2:45 PM","status": "On Time"
            },
            {
                "departure_time": "2:57 PM","status": "On Time"
            },
            {
                "departure_time": "3:09 PM","status": "On Time"
            },
            {
                "departure_time": "3:21 PM","status": "On Time"
            },
            {
                "departure_time": "3:31 PM","status": "On Time"
            },
            {
                "departure_time": "3:41 PM","status": "On Time"
            },
            {
                "departure_time": "3:51 PM","status": "On Time"
            },
            {
                "departure_time": "4:01 PM","status": "On Time"
            },
            {
                "departure_time": "4:09 PM","status": "On Time"
            },
            {
                "departure_time": "4:13 PM","status": "On Time"
            },
            {
                "departure_time": "4:21 PM","status": "On Time"
            },
            {
                "departure_time": "4:27 PM","status": "On Time"
            },
            {
                "departure_time": "4:35 PM","status": "On Time"
            },
            {
                "departure_time": "4:42 PM","status": "On Time"
            },
            {
                "departure_time": "4:47 PM","status": "On Time"
            },
            {
                "departure_time": "4:54 PM","status": "On Time"
            },
            {
                "departure_time": "4:59 PM","status": "On Time"
            },
            {
                "departure_time": "5:03 PM","status": "On Time"
            },
            {
                "departure_time": "5:07 PM","status": "On Time"
            },
            {
                "departure_time": "5:11 PM","status": "On Time"
            },
            {
                "departure_time": "5:16 PM","status": "On Time"
            },
            {
                "departure_time": "5:21 PM","status": "On Time"
            },
            {
                "departure_time": "5:26 PM","status": "On Time"
            },
            {
                "departure_time": "5:31 PM","status": "On Time"
            },
            {
                "departure_time": "5:36 PM","status": "On Time"
            },
            {
                "departure_time": "5:41 PM","status": "On Time"
            },
            {
                "departure_time": "5:48 PM","status": "On Time"
            },
            {
                "departure_time": "5:54 PM","status": "On Time"
            },
            {
                "departure_time": "6:01 PM","status": "On Time"
            },
            {
                "departure_time": "6:06 PM","status": "On Time"
            },
            {
                "departure_time": "6:16 PM","status": "On Time"
            },
            {
                "departure_time": "6:22 PM","status": "On Time"
            },
            {
                "departure_time": "6:34 PM","status": "On Time"
            },
            {
                "departure_time": "6:45 PM","status": "On Time"
            },
            {
                "departure_time": "6:56 PM","status": "On Time"
            },
            {
                "departure_time": "7:09 PM","status": "On Time"
            },
            {
                "departure_time": "7:21 PM","status": "On Time"
            },
            {
                "departure_time": "7:33 PM","status": "On Time"
            },
            {
                "departure_time": "7:50 PM","status": "On Time"
            },
            {
                "departure_time": "8:10 PM","status": "On Time"
            },
            {
                "departure_time": "8:30 PM","status": "On Time"
            },
            {
                "departure_time": "8:50 PM","status": "On Time"
            },
            {
                "departure_time": "9:10 PM","status": "On Time"
            },
            {
                "departure_time": "9:30 PM","status": "On Time"
            },
            {
                "departure_time": "9:50 PM","status": "On Time"
            },
            {
                "departure_time": "10:10 PM","status": "On Time"
            },
            {
                "departure_time": "10:30 PM","status": "On Time"
            },
            {
                "departure_time": "10:50 PM","status": "On Time"
            },
            {
                "departure_time": "11:10 PM","status": "On Time"
            },
            {
                "departure_time": "11:30 PM","status": "On Time"
            },
            {
                "departure_time": "11:50 PM","status": "On Time"
            }
        ],
        "westBound": [
            {
                "departure_time": "12:35 AM","status": "On Time"
            },
            {
                "departure_time": "1:11 AM","status": "On Time"
            },
            {
                "departure_time": "1:56 AM","status": "On Time"
            },
            {
                "departure_time": "2:41 AM","status": "On Time"
            },
            {
                "departure_time": "3:26 AM","status": "On Time"
            },
            {
                "departure_time": "4:11 AM","status": "On Time"
            },
            {
                "departure_time": "4:56 AM","status": "On Time"
            },
            {
                "departure_time": "5:26 AM","status": "On Time"
            },
            {
                "departure_time": "5:41 AM","status": "On Time"
            },
            {
                "departure_time": "5:56 AM","status": "On Time"
            },
            {
                "departure_time": "6:11 AM","status": "On Time"
            },
            {
                "departure_time": "6:21 AM","status": "On Time"
            },
            {
                "departure_time": "6:35 AM","status": "On Time"
            },
            {
                "departure_time": "6:47 AM","status": "On Time"
            },
            {
                "departure_time": "6:57 AM","status": "On Time"
            },
            {
                "departure_time": "7:07 AM","status": "On Time"
            },
            {
                "departure_time": "7:17 AM","status": "On Time"
            },
            {
                "departure_time": "7:25 AM","status": "On Time"
            },
            {
                "departure_time": "7:30 AM","status": "On Time"
            },
            {
                "departure_time": "7:35 AM","status": "On Time"
            },
            {
                "departure_time": "7:39 AM","status": "On Time"
            },
            {
                "departure_time": "7:44 AM","status": "On Time"
            },
            {
                "departure_time": "7:49 AM","status": "On Time"
            },
            {
                "departure_time": "7:54 AM","status": "On Time"
            },
            {
                "departure_time": "7:59 AM","status": "On Time"
            },
            {
                "departure_time": "8:07 AM","status": "On Time"
            },
            {
                "departure_time": "8:13 AM","status": "On Time"
            },
            {
                "departure_time": "8:18 AM","status": "On Time"
            },
            {
                "departure_time": "8:21 AM","status": "On Time"
            },
            {
                "departure_time": "8:26 AM","status": "On Time"
            },
            {
                "departure_time": "8:29 AM","status": "On Time"
            },
            {
                "departure_time": "8:34 AM","status": "On Time"
            },
            {
                "departure_time": "8:37 AM","status": "On Time"
            },
            {
                "departure_time": "8:41 AM","status": "On Time"
            },
            {
                "departure_time": "8:45 AM","status": "On Time"
            },
            {
                "departure_time": "8:50 AM","status": "On Time"
            },
            {
                "departure_time": "8:56 AM","status": "On Time"
            },
            {
                "departure_time": "9:05 AM","status": "On Time"
            },
            {
                "departure_time": "9:14 AM","status": "On Time"
            },
            {
                "departure_time": "9:21 AM","status": "On Time"
            },
            {
                "departure_time": "9:29 AM","status": "On Time"
            },
            {
                "departure_time": "9:38 AM","status": "On Time"
            },
            {
                "departure_time": "9:50 AM","status": "On Time"
            },
            {
                "departure_time": "10:02 AM","status": "On Time"
            },
            {
                "departure_time": "10:14 AM","status": "On Time"
            },
            {
                "departure_time": "10:26 AM","status": "On Time"
            },
            {
                "departure_time": "10:38 AM","status": "On Time"
            },
            {
                "departure_time": "10:50 AM","status": "On Time"
            },
            {
                "departure_time": "11:02 AM","status": "On Time"
            },
            {
                "departure_time": "11:14 AM","status": "On Time"
            },
            {
                "departure_time": "11:26 AM","status": "On Time"
            },
            {
                "departure_time": "11:38 AM","status": "On Time"
            },
            {
                "departure_time": "11:50 AM","status": "On Time"
            },
            {
                "departure_time": "12:02 PM","status": "On Time"
            },
            {
                "departure_time": "12:14 PM","status": "On Time"
            },
            {
                "departure_time": "12:26 PM","status": "On Time"
            },
            {
                "departure_time": "12:38 PM","status": "On Time"
            },
            {
                "departure_time": "12:50 PM","status": "On Time"
            },
            {
                "departure_time": "1:02 PM","status": "On Time"
            },
            {
                "departure_time": "1:14 PM","status": "On Time"
            },
            {
                "departure_time": "1:26 PM","status": "On Time"
            },
            {
                "departure_time": "1:38 PM","status": "On Time"
            },
            {
                "departure_time": "1:50 PM","status": "On Time"
            },
            {
                "departure_time": "2:02 PM","status": "On Time"
            },
            {
                "departure_time": "2:14 PM","status": "On Time"
            },
            {
                "departure_time": "2:26 PM","status": "On Time"
            },
            {
                "departure_time": "2:38 PM","status": "On Time"
            },
            {
                "departure_time": "2:50 PM","status": "On Time"
            },
            {
                "departure_time": "3:02 PM","status": "On Time"
            },
            {
                "departure_time": "3:14 PM","status": "On Time"
            },
            {
                "departure_time": "3:26 PM","status": "On Time"
            },
            {
                "departure_time": "3:36 PM","status": "On Time"
            },
            {
                "departure_time": "3:46 PM","status": "On Time"
            },
            {
                "departure_time": "3:56 PM","status": "On Time"
            },
            {
                "departure_time": "4:05 PM","status": "On Time"
            },
            {
                "departure_time": "4:17 PM","status": "On Time"
            },
            {
                "departure_time": "4:31 PM","status": "On Time"
            },
            {
                "departure_time": "4:38 PM","status": "On Time"
            },
            {
                "departure_time": "4:50 PM","status": "On Time"
            },
            {
                "departure_time": "4:59 PM","status": "On Time"
            },
            {
                "departure_time": "5:11 PM","status": "On Time"
            },
            {
                "departure_time": "5:21 PM","status": "On Time"
            },
            {
                "departure_time": "5:32 PM","status": "On Time"
            },
            {
                "departure_time": "5:44 PM","status": "On Time"
            },
            {
                "departure_time": "5:57 PM","status": "On Time"
            },
            {
                "departure_time": "6:09 PM","status": "On Time"
            },
            {
                "departure_time": "6:16 PM","status": "On Time"
            },
            {
                "departure_time": "6:28 PM","status": "On Time"
            },
            {
                "departure_time": "6:38 PM","status": "On Time"
            },
            {
                "departure_time": "6:50 PM","status": "On Time"
            },
            {
                "departure_time": "7:03 PM","status": "On Time"
            },
            {
                "departure_time": "7:14 PM","status": "On Time"
            },
            {
                "departure_time": "7:26 PM","status": "On Time"
            },
            {
                "departure_time": "7:44 PM","status": "On Time"
            },
            {
                "departure_time": "7:56 PM","status": "On Time"
            },
            {
                "departure_time": "8:16 PM","status": "On Time"
            },
            {
                "departure_time": "8:36 PM","status": "On Time"
            },
            {
                "departure_time": "8:56 PM","status": "On Time"
            },
            {
                "departure_time": "9:16 PM","status": "On Time"
            },
            {
                "departure_time": "9:36 PM","status": "On Time"
            },
            {
                "departure_time": "9:56 PM","status": "On Time"
            },
            {
                "departure_time": "10:16 PM","status": "On Time"
            },
            {
                "departure_time": "10:36 PM","status": "On Time"
            },
            {
                "departure_time": "10:56 PM","status": "On Time"
            },
            {
                "departure_time": "11:16 PM","status": "On Time"
            },
            {
                "departure_time": "11:36 PM","status": "On Time"
            },
            {
                "departure_time": "11:56 PM","status": "On Time"
            }
        ]
    },
    {
        "title": "15-16th & Locust St",
        "eastBound": [
            {
                "departure_time": "12:05 AM","status": "On Time"
            },
            {
                "departure_time": "12:43 AM","status": "On Time"
            },
            {
                "departure_time": "1:28 AM","status": "On Time"
            },
            {
                "departure_time": "2:13 AM","status": "On Time"
            },
            {
                "departure_time": "2:58 AM","status": "On Time"
            },
            {
                "departure_time": "3:43 AM","status": "On Time"
            },
            {
                "departure_time": "4:28 AM","status": "On Time"
            },
            {
                "departure_time": "5:15 AM","status": "On Time"
            },
            {
                "departure_time": "5:30 AM","status": "On Time"
            },
            {
                "departure_time": "5:45 AM","status": "On Time"
            },
            {
                "departure_time": "6:00 AM","status": "On Time"
            },
            {
                "departure_time": "6:15 AM","status": "On Time"
            },
            {
                "departure_time": "6:30 AM","status": "On Time"
            },
            {
                "departure_time": "6:40 AM","status": "On Time"
            },
            {
                "departure_time": "6:52 AM","status": "On Time"
            },
            {
                "departure_time": "7:00 AM","status": "On Time"
            },
            {
                "departure_time": "7:10 AM","status": "On Time"
            },
            {
                "departure_time": "7:20 AM","status": "On Time"
            },
            {
                "departure_time": "7:34 AM","status": "On Time"
            },
            {
                "departure_time": "7:47 AM","status": "On Time"
            },
            {
                "departure_time": "7:57 AM","status": "On Time"
            },
            {
                "departure_time": "8:16 AM","status": "On Time"
            },
            {
                "departure_time": "8:21 AM","status": "On Time"
            },
            {
                "departure_time": "8:32 AM","status": "On Time"
            },
            {
                "departure_time": "8:40 AM","status": "On Time"
            },
            {
                "departure_time": "8:53 AM","status": "On Time"
            },
            {
                "departure_time": "9:08 AM","status": "On Time"
            },
            {
                "departure_time": "9:24 AM","status": "On Time"
            },
            {
                "departure_time": "9:33 AM","status": "On Time"
            },
            {
                "departure_time": "9:44 AM","status": "On Time"
            },
            {
                "departure_time": "9:56 AM","status": "On Time"
            },
            {
                "departure_time": "10:08 AM","status": "On Time"
            },
            {
                "departure_time": "10:20 AM","status": "On Time"
            },
            {
                "departure_time": "10:32 AM","status": "On Time"
            },
            {
                "departure_time": "10:44 AM","status": "On Time"
            },
            {
                "departure_time": "10:56 AM","status": "On Time"
            },
            {
                "departure_time": "11:08 AM","status": "On Time"
            },
            {
                "departure_time": "11:20 AM","status": "On Time"
            },
            {
                "departure_time": "11:32 AM","status": "On Time"
            },
            {
                "departure_time": "11:44 AM","status": "On Time"
            },
            {
                "departure_time": "11:56 AM","status": "On Time"
            },
            {
                "departure_time": "12:08 PM","status": "On Time"
            },
            {
                "departure_time": "12:20 PM","status": "On Time"
            },
            {
                "departure_time": "12:32 PM","status": "On Time"
            },
            {
                "departure_time": "12:44 PM","status": "On Time"
            },
            {
                "departure_time": "12:56 PM","status": "On Time"
            },
            {
                "departure_time": "1:08 PM","status": "On Time"
            },
            {
                "departure_time": "1:20 PM","status": "On Time"
            },
            {
                "departure_time": "1:32 PM","status": "On Time"
            },
            {
                "departure_time": "1:44 PM","status": "On Time"
            },
            {
                "departure_time": "1:56 PM","status": "On Time"
            },
            {
                "departure_time": "2:08 PM","status": "On Time"
            },
            {
                "departure_time": "2:20 PM","status": "On Time"
            },
            {
                "departure_time": "2:32 PM","status": "On Time"
            },
            {
                "departure_time": "2:44 PM","status": "On Time"
            },
            {
                "departure_time": "2:56 PM","status": "On Time"
            },
            {
                "departure_time": "3:08 PM","status": "On Time"
            },
            {
                "departure_time": "3:20 PM","status": "On Time"
            },
            {
                "departure_time": "3:30 PM","status": "On Time"
            },
            {
                "departure_time": "3:40 PM","status": "On Time"
            },
            {
                "departure_time": "3:50 PM","status": "On Time"
            },
            {
                "departure_time": "4:00 PM","status": "On Time"
            },
            {
                "departure_time": "4:08 PM","status": "On Time"
            },
            {
                "departure_time": "4:12 PM","status": "On Time"
            },
            {
                "departure_time": "4:20 PM","status": "On Time"
            },
            {
                "departure_time": "4:26 PM","status": "On Time"
            },
            {
                "departure_time": "4:34 PM","status": "On Time"
            },
            {
                "departure_time": "4:41 PM","status": "On Time"
            },
            {
                "departure_time": "4:46 PM","status": "On Time"
            },
            {
                "departure_time": "4:53 PM","status": "On Time"
            },
            {
                "departure_time": "4:58 PM","status": "On Time"
            },
            {
                "departure_time": "5:02 PM","status": "On Time"
            },
            {
                "departure_time": "5:06 PM","status": "On Time"
            },
            {
                "departure_time": "5:10 PM","status": "On Time"
            },
            {
                "departure_time": "5:15 PM","status": "On Time"
            },
            {
                "departure_time": "5:20 PM","status": "On Time"
            },
            {
                "departure_time": "5:25 PM","status": "On Time"
            },
            {
                "departure_time": "5:30 PM","status": "On Time"
            },
            {
                "departure_time": "5:35 PM","status": "On Time"
            },
            {
                "departure_time": "5:40 PM","status": "On Time"
            },
            {
                "departure_time": "5:47 PM","status": "On Time"
            },
            {
                "departure_time": "5:53 PM","status": "On Time"
            },
            {
                "departure_time": "6:00 PM","status": "On Time"
            },
            {
                "departure_time": "6:05 PM","status": "On Time"
            },
            {
                "departure_time": "6:15 PM","status": "On Time"
            },
            {
                "departure_time": "6:21 PM","status": "On Time"
            },
            {
                "departure_time": "6:33 PM","status": "On Time"
            },
            {
                "departure_time": "6:44 PM","status": "On Time"
            },
            {
                "departure_time": "6:55 PM","status": "On Time"
            },
            {
                "departure_time": "7:08 PM","status": "On Time"
            },
            {
                "departure_time": "7:20 PM","status": "On Time"
            },
            {
                "departure_time": "7:32 PM","status": "On Time"
            },
            {
                "departure_time": "7:49 PM","status": "On Time"
            },
            {
                "departure_time": "8:09 PM","status": "On Time"
            },
            {
                "departure_time": "8:29 PM","status": "On Time"
            },
            {
                "departure_time": "8:49 PM","status": "On Time"
            },
            {
                "departure_time": "9:09 PM","status": "On Time"
            },
            {
                "departure_time": "9:29 PM","status": "On Time"
            },
            {
                "departure_time": "9:49 PM","status": "On Time"
            },
            {
                "departure_time": "10:09 PM","status": "On Time"
            },
            {
                "departure_time": "10:29 PM","status": "On Time"
            },
            {
                "departure_time": "10:49 PM","status": "On Time"
            },
            {
                "departure_time": "11:09 PM","status": "On Time"
            },
            {
                "departure_time": "11:29 PM","status": "On Time"
            },
            {
                "departure_time": "11:49 PM","status": "On Time"
            }
        ],
        "westBound": [
            {
                "departure_time": "12:36 AM","status": "On Time"
            },
            {
                "departure_time": "1:12 AM","status": "On Time"
            },
            {
                "departure_time": "1:57 AM","status": "On Time"
            },
            {
                "departure_time": "2:42 AM","status": "On Time"
            },
            {
                "departure_time": "3:27 AM","status": "On Time"
            },
            {
                "departure_time": "4:12 AM","status": "On Time"
            },
            {
                "departure_time": "4:57 AM","status": "On Time"
            },
            {
                "departure_time": "5:27 AM","status": "On Time"
            },
            {
                "departure_time": "5:42 AM","status": "On Time"
            },
            {
                "departure_time": "5:57 AM","status": "On Time"
            },
            {
                "departure_time": "6:12 AM","status": "On Time"
            },
            {
                "departure_time": "6:22 AM","status": "On Time"
            },
            {
                "departure_time": "6:36 AM","status": "On Time"
            },
            {
                "departure_time": "6:48 AM","status": "On Time"
            },
            {
                "departure_time": "6:58 AM","status": "On Time"
            },
            {
                "departure_time": "7:08 AM","status": "On Time"
            },
            {
                "departure_time": "7:18 AM","status": "On Time"
            },
            {
                "departure_time": "7:26 AM","status": "On Time"
            },
            {
                "departure_time": "7:31 AM","status": "On Time"
            },
            {
                "departure_time": "7:36 AM","status": "On Time"
            },
            {
                "departure_time": "7:40 AM","status": "On Time"
            },
            {
                "departure_time": "7:45 AM","status": "On Time"
            },
            {
                "departure_time": "7:50 AM","status": "On Time"
            },
            {
                "departure_time": "7:55 AM","status": "On Time"
            },
            {
                "departure_time": "8:00 AM","status": "On Time"
            },
            {
                "departure_time": "8:08 AM","status": "On Time"
            },
            {
                "departure_time": "8:14 AM","status": "On Time"
            },
            {
                "departure_time": "8:19 AM","status": "On Time"
            },
            {
                "departure_time": "8:22 AM","status": "On Time"
            },
            {
                "departure_time": "8:27 AM","status": "On Time"
            },
            {
                "departure_time": "8:30 AM","status": "On Time"
            },
            {
                "departure_time": "8:35 AM","status": "On Time"
            },
            {
                "departure_time": "8:38 AM","status": "On Time"
            },
            {
                "departure_time": "8:42 AM","status": "On Time"
            },
            {
                "departure_time": "8:46 AM","status": "On Time"
            },
            {
                "departure_time": "8:51 AM","status": "On Time"
            },
            {
                "departure_time": "8:57 AM","status": "On Time"
            },
            {
                "departure_time": "9:06 AM","status": "On Time"
            },
            {
                "departure_time": "9:15 AM","status": "On Time"
            },
            {
                "departure_time": "9:22 AM","status": "On Time"
            },
            {
                "departure_time": "9:30 AM","status": "On Time"
            },
            {
                "departure_time": "9:39 AM","status": "On Time"
            },
            {
                "departure_time": "9:51 AM","status": "On Time"
            },
            {
                "departure_time": "10:03 AM","status": "On Time"
            },
            {
                "departure_time": "10:15 AM","status": "On Time"
            },
            {
                "departure_time": "10:27 AM","status": "On Time"
            },
            {
                "departure_time": "10:39 AM","status": "On Time"
            },
            {
                "departure_time": "10:51 AM","status": "On Time"
            },
            {
                "departure_time": "11:03 AM","status": "On Time"
            },
            {
                "departure_time": "11:15 AM","status": "On Time"
            },
            {
                "departure_time": "11:27 AM","status": "On Time"
            },
            {
                "departure_time": "11:39 AM","status": "On Time"
            },
            {
                "departure_time": "11:51 AM","status": "On Time"
            },
            {
                "departure_time": "12:03 PM","status": "On Time"
            },
            {
                "departure_time": "12:15 PM","status": "On Time"
            },
            {
                "departure_time": "12:27 PM","status": "On Time"
            },
            {
                "departure_time": "12:39 PM","status": "On Time"
            },
            {
                "departure_time": "12:51 PM","status": "On Time"
            },
            {
                "departure_time": "1:03 PM","status": "On Time"
            },
            {
                "departure_time": "1:15 PM","status": "On Time"
            },
            {
                "departure_time": "1:27 PM","status": "On Time"
            },
            {
                "departure_time": "1:39 PM","status": "On Time"
            },
            {
                "departure_time": "1:51 PM","status": "On Time"
            },
            {
                "departure_time": "2:03 PM","status": "On Time"
            },
            {
                "departure_time": "2:15 PM","status": "On Time"
            },
            {
                "departure_time": "2:27 PM","status": "On Time"
            },
            {
                "departure_time": "2:39 PM","status": "On Time"
            },
            {
                "departure_time": "2:51 PM","status": "On Time"
            },
            {
                "departure_time": "3:03 PM","status": "On Time"
            },
            {
                "departure_time": "3:15 PM","status": "On Time"
            },
            {
                "departure_time": "3:27 PM","status": "On Time"
            },
            {
                "departure_time": "3:37 PM","status": "On Time"
            },
            {
                "departure_time": "3:47 PM","status": "On Time"
            },
            {
                "departure_time": "3:57 PM","status": "On Time"
            },
            {
                "departure_time": "4:06 PM","status": "On Time"
            },
            {
                "departure_time": "4:18 PM","status": "On Time"
            },
            {
                "departure_time": "4:32 PM","status": "On Time"
            },
            {
                "departure_time": "4:39 PM","status": "On Time"
            },
            {
                "departure_time": "4:51 PM","status": "On Time"
            },
            {
                "departure_time": "5:00 PM","status": "On Time"
            },
            {
                "departure_time": "5:12 PM","status": "On Time"
            },
            {
                "departure_time": "5:22 PM","status": "On Time"
            },
            {
                "departure_time": "5:33 PM","status": "On Time"
            },
            {
                "departure_time": "5:45 PM","status": "On Time"
            },
            {
                "departure_time": "5:58 PM","status": "On Time"
            },
            {
                "departure_time": "6:10 PM","status": "On Time"
            },
            {
                "departure_time": "6:17 PM","status": "On Time"
            },
            {
                "departure_time": "6:29 PM","status": "On Time"
            },
            {
                "departure_time": "6:39 PM","status": "On Time"
            },
            {
                "departure_time": "6:51 PM","status": "On Time"
            },
            {
                "departure_time": "7:04 PM","status": "On Time"
            },
            {
                "departure_time": "7:15 PM","status": "On Time"
            },
            {
                "departure_time": "7:27 PM","status": "On Time"
            },
            {
                "departure_time": "7:45 PM","status": "On Time"
            },
            {
                "departure_time": "7:57 PM","status": "On Time"
            },
            {
                "departure_time": "8:17 PM","status": "On Time"
            },
            {
                "departure_time": "8:37 PM","status": "On Time"
            },
            {
                "departure_time": "8:57 PM","status": "On Time"
            },
            {
                "departure_time": "9:17 PM","status": "On Time"
            },
            {
                "departure_time": "9:37 PM","status": "On Time"
            },
            {
                "departure_time": "9:57 PM","status": "On Time"
            },
            {
                "departure_time": "10:17 PM","status": "On Time"
            },
            {
                "departure_time": "10:37 PM","status": "On Time"
            },
            {
                "departure_time": "10:57 PM","status": "On Time"
            },
            {
                "departure_time": "11:17 PM","status": "On Time"
            },
            {
                "departure_time": "11:37 PM","status": "On Time"
            },
            {
                "departure_time": "11:57 PM","status": "On Time"
            }
        ]
    },
    {
        "title": "8th & Market St",
        "eastBound": [
            {
                "departure_time": "12:09 AM","status": "On Time"
            },
            {
                "departure_time": "12:47 AM","status": "On Time"
            },
            {
                "departure_time": "1:32 AM","status": "On Time"
            },
            {
                "departure_time": "2:17 AM","status": "On Time"
            },
            {
                "departure_time": "3:02 AM","status": "On Time"
            },
            {
                "departure_time": "3:47 AM","status": "On Time"
            },
            {
                "departure_time": "4:32 AM","status": "On Time"
            },
            {
                "departure_time": "5:19 AM","status": "On Time"
            },
            {
                "departure_time": "5:34 AM","status": "On Time"
            },
            {
                "departure_time": "5:49 AM","status": "On Time"
            },
            {
                "departure_time": "6:04 AM","status": "On Time"
            },
            {
                "departure_time": "6:19 AM","status": "On Time"
            },
            {
                "departure_time": "6:34 AM","status": "On Time"
            },
            {
                "departure_time": "6:44 AM","status": "On Time"
            },
            {
                "departure_time": "6:56 AM","status": "On Time"
            },
            {
                "departure_time": "7:04 AM","status": "On Time"
            },
            {
                "departure_time": "7:14 AM","status": "On Time"
            },
            {
                "departure_time": "7:24 AM","status": "On Time"
            },
            {
                "departure_time": "7:38 AM","status": "On Time"
            },
            {
                "departure_time": "7:51 AM","status": "On Time"
            },
            {
                "departure_time": "8:01 AM","status": "On Time"
            },
            {
                "departure_time": "8:20 AM","status": "On Time"
            },
            {
                "departure_time": "8:25 AM","status": "On Time"
            },
            {
                "departure_time": "8:36 AM","status": "On Time"
            },
            {
                "departure_time": "8:44 AM","status": "On Time"
            },
            {
                "departure_time": "8:57 AM","status": "On Time"
            },
            {
                "departure_time": "9:12 AM","status": "On Time"
            },
            {
                "departure_time": "9:28 AM","status": "On Time"
            },
            {
                "departure_time": "9:37 AM","status": "On Time"
            },
            {
                "departure_time": "9:48 AM","status": "On Time"
            },
            {
                "departure_time": "10:00 AM","status": "On Time"
            },
            {
                "departure_time": "10:12 AM","status": "On Time"
            },
            {
                "departure_time": "10:24 AM","status": "On Time"
            },
            {
                "departure_time": "10:36 AM","status": "On Time"
            },
            {
                "departure_time": "10:48 AM","status": "On Time"
            },
            {
                "departure_time": "11:00 AM","status": "On Time"
            },
            {
                "departure_time": "11:12 AM","status": "On Time"
            },
            {
                "departure_time": "11:24 AM","status": "On Time"
            },
            {
                "departure_time": "11:36 AM","status": "On Time"
            },
            {
                "departure_time": "11:48 AM","status": "On Time"
            },
            {
                "departure_time": "12:00 PM","status": "On Time"
            },
            {
                "departure_time": "12:12 PM","status": "On Time"
            },
            {
                "departure_time": "12:24 PM","status": "On Time"
            },
            {
                "departure_time": "12:36 PM","status": "On Time"
            },
            {
                "departure_time": "12:48 PM","status": "On Time"
            },
            {
                "departure_time": "1:00 PM","status": "On Time"
            },
            {
                "departure_time": "1:12 PM","status": "On Time"
            },
            {
                "departure_time": "1:24 PM","status": "On Time"
            },
            {
                "departure_time": "1:36 PM","status": "On Time"
            },
            {
                "departure_time": "1:48 PM","status": "On Time"
            },
            {
                "departure_time": "2:00 PM","status": "On Time"
            },
            {
                "departure_time": "2:12 PM","status": "On Time"
            },
            {
                "departure_time": "2:24 PM","status": "On Time"
            },
            {
                "departure_time": "2:36 PM","status": "On Time"
            },
            {
                "departure_time": "2:48 PM","status": "On Time"
            },
            {
                "departure_time": "3:00 PM","status": "On Time"
            },
            {
                "departure_time": "3:12 PM","status": "On Time"
            },
            {
                "departure_time": "3:24 PM","status": "On Time"
            },
            {
                "departure_time": "3:34 PM","status": "On Time"
            },
            {
                "departure_time": "3:44 PM","status": "On Time"
            },
            {
                "departure_time": "3:54 PM","status": "On Time"
            },
            {
                "departure_time": "4:04 PM","status": "On Time"
            },
            {
                "departure_time": "4:12 PM","status": "On Time"
            },
            {
                "departure_time": "4:16 PM","status": "On Time"
            },
            {
                "departure_time": "4:24 PM","status": "On Time"
            },
            {
                "departure_time": "4:30 PM","status": "On Time"
            },
            {
                "departure_time": "4:38 PM","status": "On Time"
            },
            {
                "departure_time": "4:45 PM","status": "On Time"
            },
            {
                "departure_time": "4:50 PM","status": "On Time"
            },
            {
                "departure_time": "4:57 PM","status": "On Time"
            },
            {
                "departure_time": "5:02 PM","status": "On Time"
            },
            {
                "departure_time": "5:06 PM","status": "On Time"
            },
            {
                "departure_time": "5:10 PM","status": "On Time"
            },
            {
                "departure_time": "5:14 PM","status": "On Time"
            },
            {
                "departure_time": "5:19 PM","status": "On Time"
            },
            {
                "departure_time": "5:24 PM","status": "On Time"
            },
            {
                "departure_time": "5:29 PM","status": "On Time"
            },
            {
                "departure_time": "5:34 PM","status": "On Time"
            },
            {
                "departure_time": "5:39 PM","status": "On Time"
            },
            {
                "departure_time": "5:44 PM","status": "On Time"
            },
            {
                "departure_time": "5:51 PM","status": "On Time"
            },
            {
                "departure_time": "5:57 PM","status": "On Time"
            },
            {
                "departure_time": "6:04 PM","status": "On Time"
            },
            {
                "departure_time": "6:09 PM","status": "On Time"
            },
            {
                "departure_time": "6:19 PM","status": "On Time"
            },
            {
                "departure_time": "6:25 PM","status": "On Time"
            },
            {
                "departure_time": "6:37 PM","status": "On Time"
            },
            {
                "departure_time": "6:48 PM","status": "On Time"
            },
            {
                "departure_time": "6:59 PM","status": "On Time"
            },
            {
                "departure_time": "7:12 PM","status": "On Time"
            },
            {
                "departure_time": "7:24 PM","status": "On Time"
            },
            {
                "departure_time": "7:36 PM","status": "On Time"
            },
            {
                "departure_time": "7:53 PM","status": "On Time"
            },
            {
                "departure_time": "8:13 PM","status": "On Time"
            },
            {
                "departure_time": "8:33 PM","status": "On Time"
            },
            {
                "departure_time": "8:53 PM","status": "On Time"
            },
            {
                "departure_time": "9:13 PM","status": "On Time"
            },
            {
                "departure_time": "9:33 PM","status": "On Time"
            },
            {
                "departure_time": "9:53 PM","status": "On Time"
            },
            {
                "departure_time": "10:13 PM","status": "On Time"
            },
            {
                "departure_time": "10:33 PM","status": "On Time"
            },
            {
                "departure_time": "10:53 PM","status": "On Time"
            },
            {
                "departure_time": "11:13 PM","status": "On Time"
            },
            {
                "departure_time": "11:33 PM","status": "On Time"
            },
            {
                "departure_time": "11:53 PM","status": "On Time"
            }
        ],
        "westBound": [
            {
                "departure_time": "12:32 AM","status": "On Time"
            },
            {
                "departure_time": "1:08 AM","status": "On Time"
            },
            {
                "departure_time": "1:53 AM","status": "On Time"
            },
            {
                "departure_time": "2:38 AM","status": "On Time"
            },
            {
                "departure_time": "3:23 AM","status": "On Time"
            },
            {
                "departure_time": "4:08 AM","status": "On Time"
            },
            {
                "departure_time": "4:53 AM","status": "On Time"
            },
            {
                "departure_time": "5:23 AM","status": "On Time"
            },
            {
                "departure_time": "5:38 AM","status": "On Time"
            },
            {
                "departure_time": "5:53 AM","status": "On Time"
            },
            {
                "departure_time": "6:08 AM","status": "On Time"
            },
            {
                "departure_time": "6:18 AM","status": "On Time"
            },
            {
                "departure_time": "6:32 AM","status": "On Time"
            },
            {
                "departure_time": "6:44 AM","status": "On Time"
            },
            {
                "departure_time": "6:54 AM","status": "On Time"
            },
            {
                "departure_time": "7:04 AM","status": "On Time"
            },
            {
                "departure_time": "7:14 AM","status": "On Time"
            },
            {
                "departure_time": "7:22 AM","status": "On Time"
            },
            {
                "departure_time": "7:27 AM","status": "On Time"
            },
            {
                "departure_time": "7:32 AM","status": "On Time"
            },
            {
                "departure_time": "7:36 AM","status": "On Time"
            },
            {
                "departure_time": "7:41 AM","status": "On Time"
            },
            {
                "departure_time": "7:46 AM","status": "On Time"
            },
            {
                "departure_time": "7:51 AM","status": "On Time"
            },
            {
                "departure_time": "7:56 AM","status": "On Time"
            },
            {
                "departure_time": "8:04 AM","status": "On Time"
            },
            {
                "departure_time": "8:10 AM","status": "On Time"
            },
            {
                "departure_time": "8:15 AM","status": "On Time"
            },
            {
                "departure_time": "8:18 AM","status": "On Time"
            },
            {
                "departure_time": "8:23 AM","status": "On Time"
            },
            {
                "departure_time": "8:26 AM","status": "On Time"
            },
            {
                "departure_time": "8:31 AM","status": "On Time"
            },
            {
                "departure_time": "8:34 AM","status": "On Time"
            },
            {
                "departure_time": "8:38 AM","status": "On Time"
            },
            {
                "departure_time": "8:42 AM","status": "On Time"
            },
            {
                "departure_time": "8:47 AM","status": "On Time"
            },
            {
                "departure_time": "8:53 AM","status": "On Time"
            },
            {
                "departure_time": "9:02 AM","status": "On Time"
            },
            {
                "departure_time": "9:11 AM","status": "On Time"
            },
            {
                "departure_time": "9:18 AM","status": "On Time"
            },
            {
                "departure_time": "9:26 AM","status": "On Time"
            },
            {
                "departure_time": "9:35 AM","status": "On Time"
            },
            {
                "departure_time": "9:47 AM","status": "On Time"
            },
            {
                "departure_time": "9:59 AM","status": "On Time"
            },
            {
                "departure_time": "10:11 AM","status": "On Time"
            },
            {
                "departure_time": "10:23 AM","status": "On Time"
            },
            {
                "departure_time": "10:35 AM","status": "On Time"
            },
            {
                "departure_time": "10:47 AM","status": "On Time"
            },
            {
                "departure_time": "10:59 AM","status": "On Time"
            },
            {
                "departure_time": "11:11 AM","status": "On Time"
            },
            {
                "departure_time": "11:23 AM","status": "On Time"
            },
            {
                "departure_time": "11:35 AM","status": "On Time"
            },
            {
                "departure_time": "11:47 AM","status": "On Time"
            },
            {
                "departure_time": "11:59 AM","status": "On Time"
            },
            {
                "departure_time": "12:11 PM","status": "On Time"
            },
            {
                "departure_time": "12:23 PM","status": "On Time"
            },
            {
                "departure_time": "12:35 PM","status": "On Time"
            },
            {
                "departure_time": "12:47 PM","status": "On Time"
            },
            {
                "departure_time": "12:59 PM","status": "On Time"
            },
            {
                "departure_time": "1:11 PM","status": "On Time"
            },
            {
                "departure_time": "1:23 PM","status": "On Time"
            },
            {
                "departure_time": "1:35 PM","status": "On Time"
            },
            {
                "departure_time": "1:47 PM","status": "On Time"
            },
            {
                "departure_time": "1:59 PM","status": "On Time"
            },
            {
                "departure_time": "2:11 PM","status": "On Time"
            },
            {
                "departure_time": "2:23 PM","status": "On Time"
            },
            {
                "departure_time": "2:35 PM","status": "On Time"
            },
            {
                "departure_time": "2:47 PM","status": "On Time"
            },
            {
                "departure_time": "2:59 PM","status": "On Time"
            },
            {
                "departure_time": "3:11 PM","status": "On Time"
            },
            {
                "departure_time": "3:23 PM","status": "On Time"
            },
            {
                "departure_time": "3:33 PM","status": "On Time"
            },
            {
                "departure_time": "3:43 PM","status": "On Time"
            },
            {
                "departure_time": "3:53 PM","status": "On Time"
            },
            {
                "departure_time": "4:02 PM","status": "On Time"
            },
            {
                "departure_time": "4:14 PM","status": "On Time"
            },
            {
                "departure_time": "4:28 PM","status": "On Time"
            },
            {
                "departure_time": "4:35 PM","status": "On Time"
            },
            {
                "departure_time": "4:47 PM","status": "On Time"
            },
            {
                "departure_time": "4:56 PM","status": "On Time"
            },
            {
                "departure_time": "5:08 PM","status": "On Time"
            },
            {
                "departure_time": "5:18 PM","status": "On Time"
            },
            {
                "departure_time": "5:29 PM","status": "On Time"
            },
            {
                "departure_time": "5:41 PM","status": "On Time"
            },
            {
                "departure_time": "5:54 PM","status": "On Time"
            },
            {
                "departure_time": "6:06 PM","status": "On Time"
            },
            {
                "departure_time": "6:13 PM","status": "On Time"
            },
            {
                "departure_time": "6:25 PM","status": "On Time"
            },
            {
                "departure_time": "6:35 PM","status": "On Time"
            },
            {
                "departure_time": "6:47 PM","status": "On Time"
            },
            {
                "departure_time": "7:00 PM","status": "On Time"
            },
            {
                "departure_time": "7:11 PM","status": "On Time"
            },
            {
                "departure_time": "7:23 PM","status": "On Time"
            },
            {
                "departure_time": "7:41 PM","status": "On Time"
            },
            {
                "departure_time": "7:53 PM","status": "On Time"
            },
            {
                "departure_time": "8:13 PM","status": "On Time"
            },
            {
                "departure_time": "8:33 PM","status": "On Time"
            },
            {
                "departure_time": "8:53 PM","status": "On Time"
            },
            {
                "departure_time": "9:13 PM","status": "On Time"
            },
            {
                "departure_time": "9:33 PM","status": "On Time"
            },
            {
                "departure_time": "9:53 PM","status": "On Time"
            },
            {
                "departure_time": "10:13 PM","status": "On Time"
            },
            {
                "departure_time": "10:33 PM","status": "On Time"
            },
            {
                "departure_time": "10:53 PM","status": "On Time"
            },
            {
                "departure_time": "11:13 PM","status": "On Time"
            },
            {
                "departure_time": "11:33 PM","status": "On Time"
            },
            {
                "departure_time": "11:53 PM","status": "On Time"
            }
        ]
    },
    {
        "title": "9-10th & Locust St",
        "eastBound": [
            {
                "departure_time": "12:07 AM","status": "On Time"
            },
            {
                "departure_time": "4:30 AM","status": "On Time"
            },
            {
                "departure_time": "5:17 AM","status": "On Time"
            },
            {
                "departure_time": "5:32 AM","status": "On Time"
            },
            {
                "departure_time": "5:47 AM","status": "On Time"
            },
            {
                "departure_time": "6:02 AM","status": "On Time"
            },
            {
                "departure_time": "6:17 AM","status": "On Time"
            },
            {
                "departure_time": "6:32 AM","status": "On Time"
            },
            {
                "departure_time": "6:42 AM","status": "On Time"
            },
            {
                "departure_time": "6:54 AM","status": "On Time"
            },
            {
                "departure_time": "7:02 AM","status": "On Time"
            },
            {
                "departure_time": "7:12 AM","status": "On Time"
            },
            {
                "departure_time": "7:22 AM","status": "On Time"
            },
            {
                "departure_time": "7:36 AM","status": "On Time"
            },
            {
                "departure_time": "7:49 AM","status": "On Time"
            },
            {
                "departure_time": "7:59 AM","status": "On Time"
            },
            {
                "departure_time": "8:18 AM","status": "On Time"
            },
            {
                "departure_time": "8:23 AM","status": "On Time"
            },
            {
                "departure_time": "8:34 AM","status": "On Time"
            },
            {
                "departure_time": "8:42 AM","status": "On Time"
            },
            {
                "departure_time": "8:55 AM","status": "On Time"
            },
            {
                "departure_time": "9:10 AM","status": "On Time"
            },
            {
                "departure_time": "9:26 AM","status": "On Time"
            },
            {
                "departure_time": "9:35 AM","status": "On Time"
            },
            {
                "departure_time": "9:46 AM","status": "On Time"
            },
            {
                "departure_time": "9:58 AM","status": "On Time"
            },
            {
                "departure_time": "10:10 AM","status": "On Time"
            },
            {
                "departure_time": "10:22 AM","status": "On Time"
            },
            {
                "departure_time": "10:34 AM","status": "On Time"
            },
            {
                "departure_time": "10:46 AM","status": "On Time"
            },
            {
                "departure_time": "10:58 AM","status": "On Time"
            },
            {
                "departure_time": "11:10 AM","status": "On Time"
            },
            {
                "departure_time": "11:22 AM","status": "On Time"
            },
            {
                "departure_time": "11:34 AM","status": "On Time"
            },
            {
                "departure_time": "11:46 AM","status": "On Time"
            },
            {
                "departure_time": "11:58 AM","status": "On Time"
            },
            {
                "departure_time": "12:10 PM","status": "On Time"
            },
            {
                "departure_time": "12:22 PM","status": "On Time"
            },
            {
                "departure_time": "12:34 PM","status": "On Time"
            },
            {
                "departure_time": "12:46 PM","status": "On Time"
            },
            {
                "departure_time": "12:58 PM","status": "On Time"
            },
            {
                "departure_time": "1:10 PM","status": "On Time"
            },
            {
                "departure_time": "1:22 PM","status": "On Time"
            },
            {
                "departure_time": "1:34 PM","status": "On Time"
            },
            {
                "departure_time": "1:46 PM","status": "On Time"
            },
            {
                "departure_time": "1:58 PM","status": "On Time"
            },
            {
                "departure_time": "2:10 PM","status": "On Time"
            },
            {
                "departure_time": "2:22 PM","status": "On Time"
            },
            {
                "departure_time": "2:34 PM","status": "On Time"
            },
            {
                "departure_time": "2:46 PM","status": "On Time"
            },
            {
                "departure_time": "2:58 PM","status": "On Time"
            },
            {
                "departure_time": "3:10 PM","status": "On Time"
            },
            {
                "departure_time": "3:22 PM","status": "On Time"
            },
            {
                "departure_time": "3:32 PM","status": "On Time"
            },
            {
                "departure_time": "3:42 PM","status": "On Time"
            },
            {
                "departure_time": "3:52 PM","status": "On Time"
            },
            {
                "departure_time": "4:02 PM","status": "On Time"
            },
            {
                "departure_time": "4:10 PM","status": "On Time"
            },
            {
                "departure_time": "4:14 PM","status": "On Time"
            },
            {
                "departure_time": "4:22 PM","status": "On Time"
            },
            {
                "departure_time": "4:28 PM","status": "On Time"
            },
            {
                "departure_time": "4:36 PM","status": "On Time"
            },
            {
                "departure_time": "4:43 PM","status": "On Time"
            },
            {
                "departure_time": "4:48 PM","status": "On Time"
            },
            {
                "departure_time": "4:55 PM","status": "On Time"
            },
            {
                "departure_time": "5:00 PM","status": "On Time"
            },
            {
                "departure_time": "5:04 PM","status": "On Time"
            },
            {
                "departure_time": "5:08 PM","status": "On Time"
            },
            {
                "departure_time": "5:12 PM","status": "On Time"
            },
            {
                "departure_time": "5:17 PM","status": "On Time"
            },
            {
                "departure_time": "5:22 PM","status": "On Time"
            },
            {
                "departure_time": "5:27 PM","status": "On Time"
            },
            {
                "departure_time": "5:32 PM","status": "On Time"
            },
            {
                "departure_time": "5:37 PM","status": "On Time"
            },
            {
                "departure_time": "5:42 PM","status": "On Time"
            },
            {
                "departure_time": "5:49 PM","status": "On Time"
            },
            {
                "departure_time": "5:55 PM","status": "On Time"
            },
            {
                "departure_time": "6:02 PM","status": "On Time"
            },
            {
                "departure_time": "6:07 PM","status": "On Time"
            },
            {
                "departure_time": "6:17 PM","status": "On Time"
            },
            {
                "departure_time": "6:23 PM","status": "On Time"
            },
            {
                "departure_time": "6:35 PM","status": "On Time"
            },
            {
                "departure_time": "6:46 PM","status": "On Time"
            },
            {
                "departure_time": "6:57 PM","status": "On Time"
            },
            {
                "departure_time": "7:10 PM","status": "On Time"
            },
            {
                "departure_time": "7:22 PM","status": "On Time"
            },
            {
                "departure_time": "7:34 PM","status": "On Time"
            },
            {
                "departure_time": "7:51 PM","status": "On Time"
            },
            {
                "departure_time": "8:11 PM","status": "On Time"
            },
            {
                "departure_time": "8:31 PM","status": "On Time"
            },
            {
                "departure_time": "8:51 PM","status": "On Time"
            },
            {
                "departure_time": "9:11 PM","status": "On Time"
            },
            {
                "departure_time": "9:31 PM","status": "On Time"
            },
            {
                "departure_time": "9:51 PM","status": "On Time"
            },
            {
                "departure_time": "10:11 PM","status": "On Time"
            },
            {
                "departure_time": "10:31 PM","status": "On Time"
            },
            {
                "departure_time": "10:51 PM","status": "On Time"
            },
            {
                "departure_time": "11:11 PM","status": "On Time"
            },
            {
                "departure_time": "11:31 PM","status": "On Time"
            },
            {
                "departure_time": "11:51 PM","status": "On Time"
            }
        ],
        "westBound": [
            {
                "departure_time": "4:55 AM","status": "On Time"
            },
            {
                "departure_time": "5:25 AM","status": "On Time"
            },
            {
                "departure_time": "5:40 AM","status": "On Time"
            },
            {
                "departure_time": "5:55 AM","status": "On Time"
            },
            {
                "departure_time": "6:10 AM","status": "On Time"
            },
            {
                "departure_time": "6:20 AM","status": "On Time"
            },
            {
                "departure_time": "6:34 AM","status": "On Time"
            },
            {
                "departure_time": "6:46 AM","status": "On Time"
            },
            {
                "departure_time": "6:56 AM","status": "On Time"
            },
            {
                "departure_time": "7:06 AM","status": "On Time"
            },
            {
                "departure_time": "7:16 AM","status": "On Time"
            },
            {
                "departure_time": "7:24 AM","status": "On Time"
            },
            {
                "departure_time": "7:29 AM","status": "On Time"
            },
            {
                "departure_time": "7:34 AM","status": "On Time"
            },
            {
                "departure_time": "7:38 AM","status": "On Time"
            },
            {
                "departure_time": "7:43 AM","status": "On Time"
            },
            {
                "departure_time": "7:48 AM","status": "On Time"
            },
            {
                "departure_time": "7:53 AM","status": "On Time"
            },
            {
                "departure_time": "7:58 AM","status": "On Time"
            },
            {
                "departure_time": "8:06 AM","status": "On Time"
            },
            {
                "departure_time": "8:12 AM","status": "On Time"
            },
            {
                "departure_time": "8:17 AM","status": "On Time"
            },
            {
                "departure_time": "8:20 AM","status": "On Time"
            },
            {
                "departure_time": "8:25 AM","status": "On Time"
            },
            {
                "departure_time": "8:28 AM","status": "On Time"
            },
            {
                "departure_time": "8:33 AM","status": "On Time"
            },
            {
                "departure_time": "8:36 AM","status": "On Time"
            },
            {
                "departure_time": "8:40 AM","status": "On Time"
            },
            {
                "departure_time": "8:44 AM","status": "On Time"
            },
            {
                "departure_time": "8:49 AM","status": "On Time"
            },
            {
                "departure_time": "8:55 AM","status": "On Time"
            },
            {
                "departure_time": "9:04 AM","status": "On Time"
            },
            {
                "departure_time": "9:13 AM","status": "On Time"
            },
            {
                "departure_time": "9:20 AM","status": "On Time"
            },
            {
                "departure_time": "9:28 AM","status": "On Time"
            },
            {
                "departure_time": "9:37 AM","status": "On Time"
            },
            {
                "departure_time": "9:49 AM","status": "On Time"
            },
            {
                "departure_time": "10:01 AM","status": "On Time"
            },
            {
                "departure_time": "10:13 AM","status": "On Time"
            },
            {
                "departure_time": "10:25 AM","status": "On Time"
            },
            {
                "departure_time": "10:37 AM","status": "On Time"
            },
            {
                "departure_time": "10:49 AM","status": "On Time"
            },
            {
                "departure_time": "11:01 AM","status": "On Time"
            },
            {
                "departure_time": "11:13 AM","status": "On Time"
            },
            {
                "departure_time": "11:25 AM","status": "On Time"
            },
            {
                "departure_time": "11:37 AM","status": "On Time"
            },
            {
                "departure_time": "11:49 AM","status": "On Time"
            },
            {
                "departure_time": "12:01 PM","status": "On Time"
            },
            {
                "departure_time": "12:13 PM","status": "On Time"
            },
            {
                "departure_time": "12:25 PM","status": "On Time"
            },
            {
                "departure_time": "12:37 PM","status": "On Time"
            },
            {
                "departure_time": "12:49 PM","status": "On Time"
            },
            {
                "departure_time": "1:01 PM","status": "On Time"
            },
            {
                "departure_time": "1:13 PM","status": "On Time"
            },
            {
                "departure_time": "1:25 PM","status": "On Time"
            },
            {
                "departure_time": "1:37 PM","status": "On Time"
            },
            {
                "departure_time": "1:49 PM","status": "On Time"
            },
            {
                "departure_time": "2:01 PM","status": "On Time"
            },
            {
                "departure_time": "2:13 PM","status": "On Time"
            },
            {
                "departure_time": "2:25 PM","status": "On Time"
            },
            {
                "departure_time": "2:37 PM","status": "On Time"
            },
            {
                "departure_time": "2:49 PM","status": "On Time"
            },
            {
                "departure_time": "3:01 PM","status": "On Time"
            },
            {
                "departure_time": "3:13 PM","status": "On Time"
            },
            {
                "departure_time": "3:25 PM","status": "On Time"
            },
            {
                "departure_time": "3:35 PM","status": "On Time"
            },
            {
                "departure_time": "3:45 PM","status": "On Time"
            },
            {
                "departure_time": "3:55 PM","status": "On Time"
            },
            {
                "departure_time": "4:04 PM","status": "On Time"
            },
            {
                "departure_time": "4:16 PM","status": "On Time"
            },
            {
                "departure_time": "4:30 PM","status": "On Time"
            },
            {
                "departure_time": "4:37 PM","status": "On Time"
            },
            {
                "departure_time": "4:49 PM","status": "On Time"
            },
            {
                "departure_time": "4:58 PM","status": "On Time"
            },
            {
                "departure_time": "5:10 PM","status": "On Time"
            },
            {
                "departure_time": "5:20 PM","status": "On Time"
            },
            {
                "departure_time": "5:31 PM","status": "On Time"
            },
            {
                "departure_time": "5:43 PM","status": "On Time"
            },
            {
                "departure_time": "5:56 PM","status": "On Time"
            },
            {
                "departure_time": "6:08 PM","status": "On Time"
            },
            {
                "departure_time": "6:15 PM","status": "On Time"
            },
            {
                "departure_time": "6:27 PM","status": "On Time"
            },
            {
                "departure_time": "6:37 PM","status": "On Time"
            },
            {
                "departure_time": "6:49 PM","status": "On Time"
            },
            {
                "departure_time": "7:02 PM","status": "On Time"
            },
            {
                "departure_time": "7:13 PM","status": "On Time"
            },
            {
                "departure_time": "7:25 PM","status": "On Time"
            },
            {
                "departure_time": "7:43 PM","status": "On Time"
            },
            {
                "departure_time": "7:55 PM","status": "On Time"
            },
            {
                "departure_time": "8:15 PM","status": "On Time"
            },
            {
                "departure_time": "8:35 PM","status": "On Time"
            },
            {
                "departure_time": "8:55 PM","status": "On Time"
            },
            {
                "departure_time": "9:15 PM","status": "On Time"
            },
            {
                "departure_time": "9:35 PM","status": "On Time"
            },
            {
                "departure_time": "9:55 PM","status": "On Time"
            },
            {
                "departure_time": "10:15 PM","status": "On Time"
            },
            {
                "departure_time": "10:35 PM","status": "On Time"
            },
            {
                "departure_time": "10:55 PM","status": "On Time"
            },
            {
                "departure_time": "11:15 PM","status": "On Time"
            },
            {
                "departure_time": "11:35 PM","status": "On Time"
            },
            {
                "departure_time": "11:55 PM","status": "On Time"
            }
        ]
    },
    {
        "title": "Ashland",

        "eastBound": [
            {
                "departure_time": "12:29 AM","status": "On Time"
            },
            {
                "departure_time": "1:07 AM","status": "On Time"
            },
            {
                "departure_time": "1:52 AM","status": "On Time"
            },
            {
                "departure_time": "2:37 AM","status": "On Time"
            },
            {
                "departure_time": "3:22 AM","status": "On Time"
            },
            {
                "departure_time": "4:07 AM","status": "On Time"
            },
            {
                "departure_time": "4:52 AM","status": "On Time"
            },
            {
                "departure_time": "5:39 AM","status": "On Time"
            },
            {
                "departure_time": "5:54 AM","status": "On Time"
            },
            {
                "departure_time": "6:09 AM","status": "On Time"
            },
            {
                "departure_time": "6:24 AM","status": "On Time"
            },
            {
                "departure_time": "6:39 AM","status": "On Time"
            },
            {
                "departure_time": "6:54 AM","status": "On Time"
            },
            {
                "departure_time": "7:04 AM","status": "On Time"
            },
            {
                "departure_time": "7:16 AM","status": "On Time"
            },
            {
                "departure_time": "7:24 AM","status": "On Time"
            },
            {
                "departure_time": "7:34 AM","status": "On Time"
            },
            {
                "departure_time": "7:44 AM","status": "On Time"
            },
            {
                "departure_time": "7:58 AM","status": "On Time"
            },
            {
                "departure_time": "8:11 AM","status": "On Time"
            },
            {
                "departure_time": "8:21 AM","status": "On Time"
            },
            {
                "departure_time": "8:40 AM","status": "On Time"
            },
            {
                "departure_time": "8:45 AM","status": "On Time"
            },
            {
                "departure_time": "8:56 AM","status": "On Time"
            },
            {
                "departure_time": "9:04 AM","status": "On Time"
            },
            {
                "departure_time": "9:17 AM","status": "On Time"
            },
            {
                "departure_time": "9:32 AM","status": "On Time"
            },
            {
                "departure_time": "9:48 AM","status": "On Time"
            },
            {
                "departure_time": "9:57 AM","status": "On Time"
            },
            {
                "departure_time": "10:08 AM","status": "On Time"
            },
            {
                "departure_time": "10:20 AM","status": "On Time"
            },
            {
                "departure_time": "10:32 AM","status": "On Time"
            },
            {
                "departure_time": "10:44 AM","status": "On Time"
            },
            {
                "departure_time": "10:56 AM","status": "On Time"
            },
            {
                "departure_time": "11:08 AM","status": "On Time"
            },
            {
                "departure_time": "11:20 AM","status": "On Time"
            },
            {
                "departure_time": "11:32 AM","status": "On Time"
            },
            {
                "departure_time": "11:44 AM","status": "On Time"
            },
            {
                "departure_time": "11:56 AM","status": "On Time"
            },
            {
                "departure_time": "12:08 PM","status": "On Time"
            },
            {
                "departure_time": "12:20 PM","status": "On Time"
            },
            {
                "departure_time": "12:32 PM","status": "On Time"
            },
            {
                "departure_time": "12:44 PM","status": "On Time"
            },
            {
                "departure_time": "12:56 PM","status": "On Time"
            },
            {
                "departure_time": "1:08 PM","status": "On Time"
            },
            {
                "departure_time": "1:20 PM","status": "On Time"
            },
            {
                "departure_time": "1:32 PM","status": "On Time"
            },
            {
                "departure_time": "1:44 PM","status": "On Time"
            },
            {
                "departure_time": "1:56 PM","status": "On Time"
            },
            {
                "departure_time": "2:08 PM","status": "On Time"
            },
            {
                "departure_time": "2:20 PM","status": "On Time"
            },
            {
                "departure_time": "2:32 PM","status": "On Time"
            },
            {
                "departure_time": "2:44 PM","status": "On Time"
            },
            {
                "departure_time": "2:56 PM","status": "On Time"
            },
            {
                "departure_time": "3:08 PM","status": "On Time"
            },
            {
                "departure_time": "3:20 PM","status": "On Time"
            },
            {
                "departure_time": "3:33 PM","status": "On Time"
            },
            {
                "departure_time": "3:45 PM","status": "On Time"
            },
            {
                "departure_time": "3:55 PM","status": "On Time"
            },
            {
                "departure_time": "4:05 PM","status": "On Time"
            },
            {
                "departure_time": "4:15 PM","status": "On Time"
            },
            {
                "departure_time": "4:25 PM","status": "On Time"
            },
            {
                "departure_time": "4:33 PM","status": "On Time"
            },
            {
                "departure_time": "4:37 PM","status": "On Time"
            },
            {
                "departure_time": "4:45 PM","status": "On Time"
            },
            {
                "departure_time": "4:51 PM","status": "On Time"
            },
            {
                "departure_time": "4:59 PM","status": "On Time"
            },
            {
                "departure_time": "5:06 PM","status": "On Time"
            },
            {
                "departure_time": "5:11 PM","status": "On Time"
            },
            {
                "departure_time": "5:18 PM","status": "On Time"
            },
            {
                "departure_time": "5:23 PM","status": "On Time"
            },
            {
                "departure_time": "5:27 PM","status": "On Time"
            },
            {
                "departure_time": "5:31 PM","status": "On Time"
            },
            {
                "departure_time": "5:35 PM","status": "On Time"
            },
            {
                "departure_time": "5:40 PM","status": "On Time"
            },
            {
                "departure_time": "5:45 PM","status": "On Time"
            },
            {
                "departure_time": "5:50 PM","status": "On Time"
            },
            {
                "departure_time": "5:55 PM","status": "On Time"
            },
            {
                "departure_time": "6:00 PM","status": "On Time"
            },
            {
                "departure_time": "6:05 PM","status": "On Time"
            },
            {
                "departure_time": "6:12 PM","status": "On Time"
            },
            {
                "departure_time": "6:18 PM","status": "On Time"
            },
            {
                "departure_time": "6:25 PM","status": "On Time"
            },
            {
                "departure_time": "6:30 PM","status": "On Time"
            },
            {
                "departure_time": "6:40 PM","status": "On Time"
            },
            {
                "departure_time": "6:46 PM","status": "On Time"
            },
            {
                "departure_time": "6:58 PM","status": "On Time"
            },
            {
                "departure_time": "7:09 PM","status": "On Time"
            },
            {
                "departure_time": "7:19 PM","status": "On Time"
            },
            {
                "departure_time": "7:32 PM","status": "On Time"
            },
            {
                "departure_time": "7:44 PM","status": "On Time"
            },
            {
                "departure_time": "7:56 PM","status": "On Time"
            },
            {
                "departure_time": "8:13 PM","status": "On Time"
            },
            {
                "departure_time": "8:33 PM","status": "On Time"
            },
            {
                "departure_time": "8:53 PM","status": "On Time"
            },
            {
                "departure_time": "9:13 PM","status": "On Time"
            },
            {
                "departure_time": "9:33 PM","status": "On Time"
            },
            {
                "departure_time": "9:53 PM","status": "On Time"
            },
            {
                "departure_time": "10:13 PM","status": "On Time"
            },
            {
                "departure_time": "10:33 PM","status": "On Time"
            },
            {
                "departure_time": "10:53 PM","status": "On Time"
            },
            {
                "departure_time": "11:13 PM","status": "On Time"
            },
            {
                "departure_time": "11:33 PM","status": "On Time"
            },
            {
                "departure_time": "11:53 PM","status": "On Time"
            },
            {
                "departure_time": "12:13 AM","status": "On Time"
            }
        ],
        "westBound": [
            {
                "departure_time": "12:11 AM","status": "On Time"
            },
            {
                "departure_time": "12:47 AM","status": "On Time"
            },
            {
                "departure_time": "1:32 AM","status": "On Time"
            },
            {
                "departure_time": "2:17 AM","status": "On Time"
            },
            {
                "departure_time": "3:02 AM","status": "On Time"
            },
            {
                "departure_time": "3:47 AM","status": "On Time"
            },
            {
                "departure_time": "4:32 AM","status": "On Time"
            },
            {
                "departure_time": "5:02 AM","status": "On Time"
            },
            {
                "departure_time": "5:17 AM","status": "On Time"
            },
            {
                "departure_time": "5:32 AM","status": "On Time"
            },
            {
                "departure_time": "5:47 AM","status": "On Time"
            },
            {
                "departure_time": "5:57 AM","status": "On Time"
            },
            {
                "departure_time": "6:10 AM","status": "On Time"
            },
            {
                "departure_time": "6:22 AM","status": "On Time"
            },
            {
                "departure_time": "6:32 AM","status": "On Time"
            },
            {
                "departure_time": "6:42 AM","status": "On Time"
            },
            {
                "departure_time": "6:52 AM","status": "On Time"
            },
            {
                "departure_time": "7:00 AM","status": "On Time"
            },
            {
                "departure_time": "7:05 AM","status": "On Time"
            },
            {
                "departure_time": "7:10 AM","status": "On Time"
            },
            {
                "departure_time": "7:14 AM","status": "On Time"
            },
            {
                "departure_time": "7:19 AM","status": "On Time"
            },
            {
                "departure_time": "7:24 AM","status": "On Time"
            },
            {
                "departure_time": "7:29 AM","status": "On Time"
            },
            {
                "departure_time": "7:34 AM","status": "On Time"
            },
            {
                "departure_time": "7:42 AM","status": "On Time"
            },
            {
                "departure_time": "7:50 AM","status": "On Time"
            },
            {
                "departure_time": "7:58 AM","status": "On Time"
            },
            {
                "departure_time": "8:06 AM","status": "On Time"
            },
            {
                "departure_time": "8:14 AM","status": "On Time"
            },
            {
                "departure_time": "8:22 AM","status": "On Time"
            },
            {
                "departure_time": "8:31 AM","status": "On Time"
            },
            {
                "departure_time": "8:40 AM","status": "On Time"
            },
            {
                "departure_time": "8:49 AM","status": "On Time"
            },
            {
                "departure_time": "8:57 AM","status": "On Time"
            },
            {
                "departure_time": "9:05 AM","status": "On Time"
            },
            {
                "departure_time": "9:14 AM","status": "On Time"
            },
            {
                "departure_time": "9:26 AM","status": "On Time"
            },
            {
                "departure_time": "9:38 AM","status": "On Time"
            },
            {
                "departure_time": "9:50 AM","status": "On Time"
            },
            {
                "departure_time": "10:02 AM","status": "On Time"
            },
            {
                "departure_time": "10:14 AM","status": "On Time"
            },
            {
                "departure_time": "10:26 AM","status": "On Time"
            },
            {
                "departure_time": "10:38 AM","status": "On Time"
            },
            {
                "departure_time": "10:50 AM","status": "On Time"
            },
            {
                "departure_time": "11:02 AM","status": "On Time"
            },
            {
                "departure_time": "11:14 AM","status": "On Time"
            },
            {
                "departure_time": "11:26 AM","status": "On Time"
            },
            {
                "departure_time": "11:38 AM","status": "On Time"
            },
            {
                "departure_time": "11:50 AM","status": "On Time"
            },
            {
                "departure_time": "12:02 PM","status": "On Time"
            },
            {
                "departure_time": "12:14 PM","status": "On Time"
            },
            {
                "departure_time": "12:26 PM","status": "On Time"
            },
            {
                "departure_time": "12:38 PM","status": "On Time"
            },
            {
                "departure_time": "12:50 PM","status": "On Time"
            },
            {
                "departure_time": "1:02 PM","status": "On Time"
            },
            {
                "departure_time": "1:14 PM","status": "On Time"
            },
            {
                "departure_time": "1:26 PM","status": "On Time"
            },
            {
                "departure_time": "1:38 PM","status": "On Time"
            },
            {
                "departure_time": "1:50 PM","status": "On Time"
            },
            {
                "departure_time": "2:02 PM","status": "On Time"
            },
            {
                "departure_time": "2:14 PM","status": "On Time"
            },
            {
                "departure_time": "2:26 PM","status": "On Time"
            },
            {
                "departure_time": "2:38 PM","status": "On Time"
            },
            {
                "departure_time": "2:50 PM","status": "On Time"
            },
            {
                "departure_time": "3:02 PM","status": "On Time"
            },
            {
                "departure_time": "3:12 PM","status": "On Time"
            },
            {
                "departure_time": "3:22 PM","status": "On Time"
            },
            {
                "departure_time": "3:32 PM","status": "On Time"
            },
            {
                "departure_time": "3:41 PM","status": "On Time"
            },
            {
                "departure_time": "3:53 PM","status": "On Time"
            },
            {
                "departure_time": "4:07 PM","status": "On Time"
            },
            {
                "departure_time": "4:14 PM","status": "On Time"
            },
            {
                "departure_time": "4:26 PM","status": "On Time"
            },
            {
                "departure_time": "4:35 PM","status": "On Time"
            },
            {
                "departure_time": "4:47 PM","status": "On Time"
            },
            {
                "departure_time": "4:57 PM","status": "On Time"
            },
            {
                "departure_time": "5:08 PM","status": "On Time"
            },
            {
                "departure_time": "5:20 PM","status": "On Time"
            },
            {
                "departure_time": "5:33 PM","status": "On Time"
            },
            {
                "departure_time": "5:45 PM","status": "On Time"
            },
            {
                "departure_time": "5:52 PM","status": "On Time"
            },
            {
                "departure_time": "6:04 PM","status": "On Time"
            },
            {
                "departure_time": "6:14 PM","status": "On Time"
            },
            {
                "departure_time": "6:26 PM","status": "On Time"
            },
            {
                "departure_time": "6:39 PM","status": "On Time"
            },
            {
                "departure_time": "6:50 PM","status": "On Time"
            },
            {
                "departure_time": "7:02 PM","status": "On Time"
            },
            {
                "departure_time": "7:20 PM","status": "On Time"
            },
            {
                "departure_time": "7:32 PM","status": "On Time"
            },
            {
                "departure_time": "7:52 PM","status": "On Time"
            },
            {
                "departure_time": "8:12 PM","status": "On Time"
            },
            {
                "departure_time": "8:32 PM","status": "On Time"
            },
            {
                "departure_time": "8:52 PM","status": "On Time"
            },
            {
                "departure_time": "9:12 PM","status": "On Time"
            },
            {
                "departure_time": "9:32 PM","status": "On Time"
            },
            {
                "departure_time": "9:52 PM","status": "On Time"
            },
            {
                "departure_time": "10:12 PM","status": "On Time"
            },
            {
                "departure_time": "10:32 PM","status": "On Time"
            },
            {
                "departure_time": "10:52 PM","status": "On Time"
            },
            {
                "departure_time": "11:12 PM","status": "On Time"
            },
            {
                "departure_time": "11:32 PM","status": "On Time"
            }
        ]
    },
    {
        "title": "Broadway",
        "eastBound": [
            {
                "departure_time": "12:15 AM","status": "On Time"
            },
            {
                "departure_time": "12:53 AM","status": "On Time"
            },
            {
                "departure_time": "1:38 AM","status": "On Time"
            },
            {
                "departure_time": "2:23 AM","status": "On Time"
            },
            {
                "departure_time": "3:08 AM","status": "On Time"
            },
            {
                "departure_time": "3:53 AM","status": "On Time"
            },
            {
                "departure_time": "4:38 AM","status": "On Time"
            },
            {
                "departure_time": "5:25 AM","status": "On Time"
            },
            {
                "departure_time": "5:40 AM","status": "On Time"
            },
            {
                "departure_time": "5:55 AM","status": "On Time"
            },
            {
                "departure_time": "6:10 AM","status": "On Time"
            },
            {
                "departure_time": "6:25 AM","status": "On Time"
            },
            {
                "departure_time": "6:40 AM","status": "On Time"
            },
            {
                "departure_time": "6:50 AM","status": "On Time"
            },
            {
                "departure_time": "7:02 AM","status": "On Time"
            },
            {
                "departure_time": "7:10 AM","status": "On Time"
            },
            {
                "departure_time": "7:20 AM","status": "On Time"
            },
            {
                "departure_time": "7:30 AM","status": "On Time"
            },
            {
                "departure_time": "7:44 AM","status": "On Time"
            },
            {
                "departure_time": "7:57 AM","status": "On Time"
            },
            {
                "departure_time": "8:07 AM","status": "On Time"
            },
            {
                "departure_time": "8:26 AM","status": "On Time"
            },
            {
                "departure_time": "8:31 AM","status": "On Time"
            },
            {
                "departure_time": "8:42 AM","status": "On Time"
            },
            {
                "departure_time": "8:50 AM","status": "On Time"
            },
            {
                "departure_time": "9:03 AM","status": "On Time"
            },
            {
                "departure_time": "9:18 AM","status": "On Time"
            },
            {
                "departure_time": "9:34 AM","status": "On Time"
            },
            {
                "departure_time": "9:43 AM","status": "On Time"
            },
            {
                "departure_time": "9:54 AM","status": "On Time"
            },
            {
                "departure_time": "10:06 AM","status": "On Time"
            },
            {
                "departure_time": "10:18 AM","status": "On Time"
            },
            {
                "departure_time": "10:30 AM","status": "On Time"
            },
            {
                "departure_time": "10:42 AM","status": "On Time"
            },
            {
                "departure_time": "10:54 AM","status": "On Time"
            },
            {
                "departure_time": "11:06 AM","status": "On Time"
            },
            {
                "departure_time": "11:18 AM","status": "On Time"
            },
            {
                "departure_time": "11:30 AM","status": "On Time"
            },
            {
                "departure_time": "11:42 AM","status": "On Time"
            },
            {
                "departure_time": "11:54 AM","status": "On Time"
            },
            {
                "departure_time": "12:06 PM","status": "On Time"
            },
            {
                "departure_time": "12:18 PM","status": "On Time"
            },
            {
                "departure_time": "12:30 PM","status": "On Time"
            },
            {
                "departure_time": "12:42 PM","status": "On Time"
            },
            {
                "departure_time": "12:54 PM","status": "On Time"
            },
            {
                "departure_time": "1:06 PM","status": "On Time"
            },
            {
                "departure_time": "1:18 PM","status": "On Time"
            },
            {
                "departure_time": "1:30 PM","status": "On Time"
            },
            {
                "departure_time": "1:42 PM","status": "On Time"
            },
            {
                "departure_time": "1:54 PM","status": "On Time"
            },
            {
                "departure_time": "2:06 PM","status": "On Time"
            },
            {
                "departure_time": "2:18 PM","status": "On Time"
            },
            {
                "departure_time": "2:30 PM","status": "On Time"
            },
            {
                "departure_time": "2:42 PM","status": "On Time"
            },
            {
                "departure_time": "2:54 PM","status": "On Time"
            },
            {
                "departure_time": "3:06 PM","status": "On Time"
            },
            {
                "departure_time": "3:18 PM","status": "On Time"
            },
            {
                "departure_time": "3:30 PM","status": "On Time"
            },
            {
                "departure_time": "3:40 PM","status": "On Time"
            },
            {
                "departure_time": "3:50 PM","status": "On Time"
            },
            {
                "departure_time": "4:00 PM","status": "On Time"
            },
            {
                "departure_time": "4:10 PM","status": "On Time"
            },
            {
                "departure_time": "4:18 PM","status": "On Time"
            },
            {
                "departure_time": "4:22 PM","status": "On Time"
            },
            {
                "departure_time": "4:30 PM","status": "On Time"
            },
            {
                "departure_time": "4:36 PM","status": "On Time"
            },
            {
                "departure_time": "4:44 PM","status": "On Time"
            },
            {
                "departure_time": "4:51 PM","status": "On Time"
            },
            {
                "departure_time": "4:56 PM","status": "On Time"
            },
            {
                "departure_time": "5:03 PM","status": "On Time"
            },
            {
                "departure_time": "5:08 PM","status": "On Time"
            },
            {
                "departure_time": "5:12 PM","status": "On Time"
            },
            {
                "departure_time": "5:16 PM","status": "On Time"
            },
            {
                "departure_time": "5:20 PM","status": "On Time"
            },
            {
                "departure_time": "5:25 PM","status": "On Time"
            },
            {
                "departure_time": "5:30 PM","status": "On Time"
            },
            {
                "departure_time": "5:35 PM","status": "On Time"
            },
            {
                "departure_time": "5:40 PM","status": "On Time"
            },
            {
                "departure_time": "5:45 PM","status": "On Time"
            },
            {
                "departure_time": "5:50 PM","status": "On Time"
            },
            {
                "departure_time": "5:57 PM","status": "On Time"
            },
            {
                "departure_time": "6:03 PM","status": "On Time"
            },
            {
                "departure_time": "6:10 PM","status": "On Time"
            },
            {
                "departure_time": "6:15 PM","status": "On Time"
            },
            {
                "departure_time": "6:25 PM","status": "On Time"
            },
            {
                "departure_time": "6:31 PM","status": "On Time"
            },
            {
                "departure_time": "6:43 PM","status": "On Time"
            },
            {
                "departure_time": "6:54 PM","status": "On Time"
            },
            {
                "departure_time": "7:05 PM","status": "On Time"
            },
            {
                "departure_time": "7:18 PM","status": "On Time"
            },
            {
                "departure_time": "7:30 PM","status": "On Time"
            },
            {
                "departure_time": "7:42 PM","status": "On Time"
            },
            {
                "departure_time": "7:59 PM","status": "On Time"
            },
            {
                "departure_time": "8:19 PM","status": "On Time"
            },
            {
                "departure_time": "8:39 PM","status": "On Time"
            },
            {
                "departure_time": "8:59 PM","status": "On Time"
            },
            {
                "departure_time": "9:19 PM","status": "On Time"
            },
            {
                "departure_time": "9:39 PM","status": "On Time"
            },
            {
                "departure_time": "9:59 PM","status": "On Time"
            },
            {
                "departure_time": "10:19 PM","status": "On Time"
            },
            {
                "departure_time": "10:39 PM","status": "On Time"
            },
            {
                "departure_time": "10:59 PM","status": "On Time"
            },
            {
                "departure_time": "11:19 PM","status": "On Time"
            },
            {
                "departure_time": "11:39 PM","status": "On Time"
            },
            {
                "departure_time": "11:59 PM","status": "On Time"
            }
        ],
        "westBound": [
            {
                "departure_time": "12:25 AM","status": "On Time"
            },
            {
                "departure_time": "1:01 AM","status": "On Time"
            },
            {
                "departure_time": "1:46 AM","status": "On Time"
            },
            {
                "departure_time": "2:31 AM","status": "On Time"
            },
            {
                "departure_time": "3:16 AM","status": "On Time"
            },
            {
                "departure_time": "4:01 AM","status": "On Time"
            },
            {
                "departure_time": "4:46 AM","status": "On Time"
            },
            {
                "departure_time": "5:16 AM","status": "On Time"
            },
            {
                "departure_time": "5:31 AM","status": "On Time"
            },
            {
                "departure_time": "5:46 AM","status": "On Time"
            },
            {
                "departure_time": "6:01 AM","status": "On Time"
            },
            {
                "departure_time": "6:11 AM","status": "On Time"
            },
            {
                "departure_time": "6:24 AM","status": "On Time"
            },
            {
                "departure_time": "6:36 AM","status": "On Time"
            },
            {
                "departure_time": "6:46 AM","status": "On Time"
            },
            {
                "departure_time": "6:56 AM","status": "On Time"
            },
            {
                "departure_time": "7:06 AM","status": "On Time"
            },
            {
                "departure_time": "7:14 AM","status": "On Time"
            },
            {
                "departure_time": "7:19 AM","status": "On Time"
            },
            {
                "departure_time": "7:24 AM","status": "On Time"
            },
            {
                "departure_time": "7:28 AM","status": "On Time"
            },
            {
                "departure_time": "7:33 AM","status": "On Time"
            },
            {
                "departure_time": "7:38 AM","status": "On Time"
            },
            {
                "departure_time": "7:43 AM","status": "On Time"
            },
            {
                "departure_time": "7:48 AM","status": "On Time"
            },
            {
                "departure_time": "7:56 AM","status": "On Time"
            },
            {
                "departure_time": "8:02 AM","status": "On Time"
            },
            {
                "departure_time": "8:08 AM","status": "On Time"
            },
            {
                "departure_time": "8:10 AM","status": "On Time"
            },
            {
                "departure_time": "8:16 AM","status": "On Time"
            },
            {
                "departure_time": "8:18 AM","status": "On Time"
            },
            {
                "departure_time": "8:24 AM","status": "On Time"
            },
            {
                "departure_time": "8:26 AM","status": "On Time"
            },
            {
                "departure_time": "8:31 AM","status": "On Time"
            },
            {
                "departure_time": "8:34 AM","status": "On Time"
            },
            {
                "departure_time": "8:40 AM","status": "On Time"
            },
            {
                "departure_time": "8:45 AM","status": "On Time"
            },
            {
                "departure_time": "8:54 AM","status": "On Time"
            },
            {
                "departure_time": "9:03 AM","status": "On Time"
            },
            {
                "departure_time": "9:11 AM","status": "On Time"
            },
            {
                "departure_time": "9:19 AM","status": "On Time"
            },
            {
                "departure_time": "9:28 AM","status": "On Time"
            },
            {
                "departure_time": "9:40 AM","status": "On Time"
            },
            {
                "departure_time": "9:52 AM","status": "On Time"
            },
            {
                "departure_time": "10:04 AM","status": "On Time"
            },
            {
                "departure_time": "10:16 AM","status": "On Time"
            },
            {
                "departure_time": "10:28 AM","status": "On Time"
            },
            {
                "departure_time": "10:40 AM","status": "On Time"
            },
            {
                "departure_time": "10:52 AM","status": "On Time"
            },
            {
                "departure_time": "11:04 AM","status": "On Time"
            },
            {
                "departure_time": "11:16 AM","status": "On Time"
            },
            {
                "departure_time": "11:28 AM","status": "On Time"
            },
            {
                "departure_time": "11:40 AM","status": "On Time"
            },
            {
                "departure_time": "11:52 AM","status": "On Time"
            },
            {
                "departure_time": "12:04 PM","status": "On Time"
            },
            {
                "departure_time": "12:16 PM","status": "On Time"
            },
            {
                "departure_time": "12:28 PM","status": "On Time"
            },
            {
                "departure_time": "12:40 PM","status": "On Time"
            },
            {
                "departure_time": "12:52 PM","status": "On Time"
            },
            {
                "departure_time": "1:04 PM","status": "On Time"
            },
            {
                "departure_time": "1:16 PM","status": "On Time"
            },
            {
                "departure_time": "1:28 PM","status": "On Time"
            },
            {
                "departure_time": "1:40 PM","status": "On Time"
            },
            {
                "departure_time": "1:52 PM","status": "On Time"
            },
            {
                "departure_time": "2:04 PM","status": "On Time"
            },
            {
                "departure_time": "2:16 PM","status": "On Time"
            },
            {
                "departure_time": "2:28 PM","status": "On Time"
            },
            {
                "departure_time": "2:40 PM","status": "On Time"
            },
            {
                "departure_time": "2:52 PM","status": "On Time"
            },
            {
                "departure_time": "3:04 PM","status": "On Time"
            },
            {
                "departure_time": "3:16 PM","status": "On Time"
            },
            {
                "departure_time": "3:26 PM","status": "On Time"
            },
            {
                "departure_time": "3:36 PM","status": "On Time"
            },
            {
                "departure_time": "3:46 PM","status": "On Time"
            },
            {
                "departure_time": "3:55 PM","status": "On Time"
            },
            {
                "departure_time": "4:07 PM","status": "On Time"
            },
            {
                "departure_time": "4:21 PM","status": "On Time"
            },
            {
                "departure_time": "4:28 PM","status": "On Time"
            },
            {
                "departure_time": "4:40 PM","status": "On Time"
            },
            {
                "departure_time": "4:49 PM","status": "On Time"
            },
            {
                "departure_time": "5:01 PM","status": "On Time"
            },
            {
                "departure_time": "5:11 PM","status": "On Time"
            },
            {
                "departure_time": "5:22 PM","status": "On Time"
            },
            {
                "departure_time": "5:34 PM","status": "On Time"
            },
            {
                "departure_time": "5:47 PM","status": "On Time"
            },
            {
                "departure_time": "5:59 PM","status": "On Time"
            },
            {
                "departure_time": "6:06 PM","status": "On Time"
            },
            {
                "departure_time": "6:18 PM","status": "On Time"
            },
            {
                "departure_time": "6:28 PM","status": "On Time"
            },
            {
                "departure_time": "6:40 PM","status": "On Time"
            },
            {
                "departure_time": "6:53 PM","status": "On Time"
            },
            {
                "departure_time": "7:04 PM","status": "On Time"
            },
            {
                "departure_time": "7:16 PM","status": "On Time"
            },
            {
                "departure_time": "7:34 PM","status": "On Time"
            },
            {
                "departure_time": "7:46 PM","status": "On Time"
            },
            {
                "departure_time": "8:06 PM","status": "On Time"
            },
            {
                "departure_time": "8:26 PM","status": "On Time"
            },
            {
                "departure_time": "8:46 PM","status": "On Time"
            },
            {
                "departure_time": "9:06 PM","status": "On Time"
            },
            {
                "departure_time": "9:26 PM","status": "On Time"
            },
            {
                "departure_time": "9:46 PM","status": "On Time"
            },
            {
                "departure_time": "10:06 PM","status": "On Time"
            },
            {
                "departure_time": "10:26 PM","status": "On Time"
            },
            {
                "departure_time": "10:46 PM","status": "On Time"
            },
            {
                "departure_time": "11:06 PM","status": "On Time"
            },
            {
                "departure_time": "11:26 PM","status": "On Time"
            },
            {
                "departure_time": "11:46 PM","status": "On Time"
            }
        ]
    },
    {
        "title": "City Hall",
        "eastBound": [
            {
                "departure_time": "12:14 AM","status": "On Time"
            },
            {
                "departure_time": "12:52 AM","status": "On Time"
            },
            {
                "departure_time": "1:37 AM","status": "On Time"
            },
            {
                "departure_time": "2:22 AM","status": "On Time"
            },
            {
                "departure_time": "3:07 AM","status": "On Time"
            },
            {
                "departure_time": "3:52 AM","status": "On Time"
            },
            {
                "departure_time": "4:37 AM","status": "On Time"
            },
            {
                "departure_time": "5:24 AM","status": "On Time"
            },
            {
                "departure_time": "5:39 AM","status": "On Time"
            },
            {
                "departure_time": "5:54 AM","status": "On Time"
            },
            {
                "departure_time": "6:09 AM","status": "On Time"
            },
            {
                "departure_time": "6:24 AM","status": "On Time"
            },
            {
                "departure_time": "6:39 AM","status": "On Time"
            },
            {
                "departure_time": "6:49 AM","status": "On Time"
            },
            {
                "departure_time": "7:01 AM","status": "On Time"
            },
            {
                "departure_time": "7:09 AM","status": "On Time"
            },
            {
                "departure_time": "7:19 AM","status": "On Time"
            },
            {
                "departure_time": "7:29 AM","status": "On Time"
            },
            {
                "departure_time": "7:43 AM","status": "On Time"
            },
            {
                "departure_time": "7:56 AM","status": "On Time"
            },
            {
                "departure_time": "8:06 AM","status": "On Time"
            },
            {
                "departure_time": "8:25 AM","status": "On Time"
            },
            {
                "departure_time": "8:30 AM","status": "On Time"
            },
            {
                "departure_time": "8:41 AM","status": "On Time"
            },
            {
                "departure_time": "8:49 AM","status": "On Time"
            },
            {
                "departure_time": "9:02 AM","status": "On Time"
            },
            {
                "departure_time": "9:17 AM","status": "On Time"
            },
            {
                "departure_time": "9:33 AM","status": "On Time"
            },
            {
                "departure_time": "9:42 AM","status": "On Time"
            },
            {
                "departure_time": "9:53 AM","status": "On Time"
            },
            {
                "departure_time": "10:05 AM","status": "On Time"
            },
            {
                "departure_time": "10:17 AM","status": "On Time"
            },
            {
                "departure_time": "10:29 AM","status": "On Time"
            },
            {
                "departure_time": "10:41 AM","status": "On Time"
            },
            {
                "departure_time": "10:53 AM","status": "On Time"
            },
            {
                "departure_time": "11:05 AM","status": "On Time"
            },
            {
                "departure_time": "11:17 AM","status": "On Time"
            },
            {
                "departure_time": "11:29 AM","status": "On Time"
            },
            {
                "departure_time": "11:41 AM","status": "On Time"
            },
            {
                "departure_time": "11:53 AM","status": "On Time"
            },
            {
                "departure_time": "12:05 PM","status": "On Time"
            },
            {
                "departure_time": "12:17 PM","status": "On Time"
            },
            {
                "departure_time": "12:29 PM","status": "On Time"
            },
            {
                "departure_time": "12:41 PM","status": "On Time"
            },
            {
                "departure_time": "12:53 PM","status": "On Time"
            },
            {
                "departure_time": "1:05 PM","status": "On Time"
            },
            {
                "departure_time": "1:17 PM","status": "On Time"
            },
            {
                "departure_time": "1:29 PM","status": "On Time"
            },
            {
                "departure_time": "1:41 PM","status": "On Time"
            },
            {
                "departure_time": "1:53 PM","status": "On Time"
            },
            {
                "departure_time": "2:05 PM","status": "On Time"
            },
            {
                "departure_time": "2:17 PM","status": "On Time"
            },
            {
                "departure_time": "2:29 PM","status": "On Time"
            },
            {
                "departure_time": "2:41 PM","status": "On Time"
            },
            {
                "departure_time": "2:53 PM","status": "On Time"
            },
            {
                "departure_time": "3:05 PM","status": "On Time"
            },
            {
                "departure_time": "3:17 PM","status": "On Time"
            },
            {
                "departure_time": "3:29 PM","status": "On Time"
            },
            {
                "departure_time": "3:39 PM","status": "On Time"
            },
            {
                "departure_time": "3:49 PM","status": "On Time"
            },
            {
                "departure_time": "3:59 PM","status": "On Time"
            },
            {
                "departure_time": "4:09 PM","status": "On Time"
            },
            {
                "departure_time": "4:17 PM","status": "On Time"
            },
            {
                "departure_time": "4:21 PM","status": "On Time"
            },
            {
                "departure_time": "4:29 PM","status": "On Time"
            },
            {
                "departure_time": "4:35 PM","status": "On Time"
            },
            {
                "departure_time": "4:43 PM","status": "On Time"
            },
            {
                "departure_time": "4:50 PM","status": "On Time"
            },
            {
                "departure_time": "4:55 PM","status": "On Time"
            },
            {
                "departure_time": "5:02 PM","status": "On Time"
            },
            {
                "departure_time": "5:07 PM","status": "On Time"
            },
            {
                "departure_time": "5:11 PM","status": "On Time"
            },
            {
                "departure_time": "5:15 PM","status": "On Time"
            },
            {
                "departure_time": "5:19 PM","status": "On Time"
            },
            {
                "departure_time": "5:24 PM","status": "On Time"
            },
            {
                "departure_time": "5:29 PM","status": "On Time"
            },
            {
                "departure_time": "5:34 PM","status": "On Time"
            },
            {
                "departure_time": "5:39 PM","status": "On Time"
            },
            {
                "departure_time": "5:44 PM","status": "On Time"
            },
            {
                "departure_time": "5:49 PM","status": "On Time"
            },
            {
                "departure_time": "5:56 PM","status": "On Time"
            },
            {
                "departure_time": "6:02 PM","status": "On Time"
            },
            {
                "departure_time": "6:09 PM","status": "On Time"
            },
            {
                "departure_time": "6:14 PM","status": "On Time"
            },
            {
                "departure_time": "6:24 PM","status": "On Time"
            },
            {
                "departure_time": "6:30 PM","status": "On Time"
            },
            {
                "departure_time": "6:42 PM","status": "On Time"
            },
            {
                "departure_time": "6:53 PM","status": "On Time"
            },
            {
                "departure_time": "7:04 PM","status": "On Time"
            },
            {
                "departure_time": "7:17 PM","status": "On Time"
            },
            {
                "departure_time": "7:29 PM","status": "On Time"
            },
            {
                "departure_time": "7:41 PM","status": "On Time"
            },
            {
                "departure_time": "7:58 PM","status": "On Time"
            },
            {
                "departure_time": "8:18 PM","status": "On Time"
            },
            {
                "departure_time": "8:38 PM","status": "On Time"
            },
            {
                "departure_time": "8:58 PM","status": "On Time"
            },
            {
                "departure_time": "9:18 PM","status": "On Time"
            },
            {
                "departure_time": "9:38 PM","status": "On Time"
            },
            {
                "departure_time": "9:58 PM","status": "On Time"
            },
            {
                "departure_time": "10:18 PM","status": "On Time"
            },
            {
                "departure_time": "10:38 PM","status": "On Time"
            },
            {
                "departure_time": "10:58 PM","status": "On Time"
            },
            {
                "departure_time": "11:18 PM","status": "On Time"
            },
            {
                "departure_time": "11:38 PM","status": "On Time"
            },
            {
                "departure_time": "11:58 PM","status": "On Time"
            }
        ],
        "westBound": [
            {
                "departure_time": "12:27 AM","status": "On Time"
            },
            {
                "departure_time": "12:32 AM","status": "On Time"
            },
            {
                "departure_time": "1:03 AM","status": "On Time"
            },
            {
                "departure_time": "1:08 AM","status": "On Time"
            },
            {
                "departure_time": "1:48 AM","status": "On Time"
            },
            {
                "departure_time": "1:53 AM","status": "On Time"
            },
            {
                "departure_time": "2:33 AM","status": "On Time"
            },
            {
                "departure_time": "2:38 AM","status": "On Time"
            },
            {
                "departure_time": "3:18 AM","status": "On Time"
            },
            {
                "departure_time": "3:23 AM","status": "On Time"
            },
            {
                "departure_time": "4:03 AM","status": "On Time"
            },
            {
                "departure_time": "4:08 AM","status": "On Time"
            },
            {
                "departure_time": "4:48 AM","status": "On Time"
            },
            {
                "departure_time": "4:53 AM","status": "On Time"
            },
            {
                "departure_time": "5:18 AM","status": "On Time"
            },
            {
                "departure_time": "5:23 AM","status": "On Time"
            },
            {
                "departure_time": "5:33 AM","status": "On Time"
            },
            {
                "departure_time": "5:38 AM","status": "On Time"
            },
            {
                "departure_time": "5:48 AM","status": "On Time"
            },
            {
                "departure_time": "5:53 AM","status": "On Time"
            },
            {
                "departure_time": "6:03 AM","status": "On Time"
            },
            {
                "departure_time": "6:08 AM","status": "On Time"
            },
            {
                "departure_time": "6:13 AM","status": "On Time"
            },
            {
                "departure_time": "6:18 AM","status": "On Time"
            },
            {
                "departure_time": "6:26 AM","status": "On Time"
            },
            {
                "departure_time": "6:32 AM","status": "On Time"
            },
            {
                "departure_time": "6:38 AM","status": "On Time"
            },
            {
                "departure_time": "6:44 AM","status": "On Time"
            },
            {
                "departure_time": "6:48 AM","status": "On Time"
            },
            {
                "departure_time": "6:54 AM","status": "On Time"
            },
            {
                "departure_time": "6:58 AM","status": "On Time"
            },
            {
                "departure_time": "7:04 AM","status": "On Time"
            },
            {
                "departure_time": "7:08 AM","status": "On Time"
            },
            {
                "departure_time": "7:14 AM","status": "On Time"
            },
            {
                "departure_time": "7:16 AM","status": "On Time"
            },
            {
                "departure_time": "7:22 AM","status": "On Time"
            },
            {
                "departure_time": "7:21 AM","status": "On Time"
            },
            {
                "departure_time": "7:27 AM","status": "On Time"
            },
            {
                "departure_time": "7:26 AM","status": "On Time"
            },
            {
                "departure_time": "7:32 AM","status": "On Time"
            },
            {
                "departure_time": "7:30 AM","status": "On Time"
            },
            {
                "departure_time": "7:36 AM","status": "On Time"
            },
            {
                "departure_time": "7:35 AM","status": "On Time"
            },
            {
                "departure_time": "7:41 AM","status": "On Time"
            },
            {
                "departure_time": "7:40 AM","status": "On Time"
            },
            {
                "departure_time": "7:46 AM","status": "On Time"
            },
            {
                "departure_time": "7:45 AM","status": "On Time"
            },
            {
                "departure_time": "7:51 AM","status": "On Time"
            },
            {
                "departure_time": "7:50 AM","status": "On Time"
            },
            {
                "departure_time": "7:56 AM","status": "On Time"
            },
            {
                "departure_time": "7:58 AM","status": "On Time"
            },
            {
                "departure_time": "8:04 AM","status": "On Time"
            },
            {
                "departure_time": "8:04 AM","status": "On Time"
            },
            {
                "departure_time": "8:10 AM","status": "On Time"
            },
            {
                "departure_time": "8:10 AM","status": "On Time"
            },
            {
                "departure_time": "8:15 AM","status": "On Time"
            },
            {
                "departure_time": "8:12 AM","status": "On Time"
            },
            {
                "departure_time": "8:18 AM","status": "On Time"
            },
            {
                "departure_time": "8:18 AM","status": "On Time"
            },
            {
                "departure_time": "8:23 AM","status": "On Time"
            },
            {
                "departure_time": "8:20 AM","status": "On Time"
            },
            {
                "departure_time": "8:26 AM","status": "On Time"
            },
            {
                "departure_time": "8:26 AM","status": "On Time"
            },
            {
                "departure_time": "8:31 AM","status": "On Time"
            },
            {
                "departure_time": "8:28 AM","status": "On Time"
            },
            {
                "departure_time": "8:34 AM","status": "On Time"
            },
            {
                "departure_time": "8:33 AM","status": "On Time"
            },
            {
                "departure_time": "8:38 AM","status": "On Time"
            },
            {
                "departure_time": "8:36 AM","status": "On Time"
            },
            {
                "departure_time": "8:42 AM","status": "On Time"
            },
            {
                "departure_time": "8:42 AM","status": "On Time"
            },
            {
                "departure_time": "8:47 AM","status": "On Time"
            },
            {
                "departure_time": "8:47 AM","status": "On Time"
            },
            {
                "departure_time": "8:53 AM","status": "On Time"
            },
            {
                "departure_time": "8:56 AM","status": "On Time"
            },
            {
                "departure_time": "9:02 AM","status": "On Time"
            },
            {
                "departure_time": "9:05 AM","status": "On Time"
            },
            {
                "departure_time": "9:11 AM","status": "On Time"
            },
            {
                "departure_time": "9:13 AM","status": "On Time"
            },
            {
                "departure_time": "9:18 AM","status": "On Time"
            },
            {
                "departure_time": "9:21 AM","status": "On Time"
            },
            {
                "departure_time": "9:26 AM","status": "On Time"
            },
            {
                "departure_time": "9:30 AM","status": "On Time"
            },
            {
                "departure_time": "9:35 AM","status": "On Time"
            },
            {
                "departure_time": "9:42 AM","status": "On Time"
            },
            {
                "departure_time": "9:47 AM","status": "On Time"
            },
            {
                "departure_time": "9:54 AM","status": "On Time"
            },
            {
                "departure_time": "9:59 AM","status": "On Time"
            },
            {
                "departure_time": "10:06 AM","status": "On Time"
            },
            {
                "departure_time": "10:11 AM","status": "On Time"
            },
            {
                "departure_time": "10:18 AM","status": "On Time"
            },
            {
                "departure_time": "10:23 AM","status": "On Time"
            },
            {
                "departure_time": "10:30 AM","status": "On Time"
            },
            {
                "departure_time": "10:35 AM","status": "On Time"
            },
            {
                "departure_time": "10:42 AM","status": "On Time"
            },
            {
                "departure_time": "10:47 AM","status": "On Time"
            },
            {
                "departure_time": "10:54 AM","status": "On Time"
            },
            {
                "departure_time": "10:59 AM","status": "On Time"
            },
            {
                "departure_time": "11:06 AM","status": "On Time"
            },
            {
                "departure_time": "11:11 AM","status": "On Time"
            },
            {
                "departure_time": "11:18 AM","status": "On Time"
            },
            {
                "departure_time": "11:23 AM","status": "On Time"
            },
            {
                "departure_time": "11:30 AM","status": "On Time"
            },
            {
                "departure_time": "11:35 AM","status": "On Time"
            },
            {
                "departure_time": "11:42 AM","status": "On Time"
            },
            {
                "departure_time": "11:47 AM","status": "On Time"
            },
            {
                "departure_time": "11:54 AM","status": "On Time"
            },
            {
                "departure_time": "11:59 AM","status": "On Time"
            },
            {
                "departure_time": "12:06 PM","status": "On Time"
            },
            {
                "departure_time": "12:11 PM","status": "On Time"
            },
            {
                "departure_time": "12:18 PM","status": "On Time"
            },
            {
                "departure_time": "12:23 PM","status": "On Time"
            },
            {
                "departure_time": "12:30 PM","status": "On Time"
            },
            {
                "departure_time": "12:35 PM","status": "On Time"
            },
            {
                "departure_time": "12:42 PM","status": "On Time"
            },
            {
                "departure_time": "12:47 PM","status": "On Time"
            },
            {
                "departure_time": "12:54 PM","status": "On Time"
            },
            {
                "departure_time": "12:59 PM","status": "On Time"
            },
            {
                "departure_time": "1:06 PM","status": "On Time"
            },
            {
                "departure_time": "1:11 PM","status": "On Time"
            },
            {
                "departure_time": "1:18 PM","status": "On Time"
            },
            {
                "departure_time": "1:23 PM","status": "On Time"
            },
            {
                "departure_time": "1:30 PM","status": "On Time"
            },
            {
                "departure_time": "1:35 PM","status": "On Time"
            },
            {
                "departure_time": "1:42 PM","status": "On Time"
            },
            {
                "departure_time": "1:47 PM","status": "On Time"
            },
            {
                "departure_time": "1:54 PM","status": "On Time"
            },
            {
                "departure_time": "1:59 PM","status": "On Time"
            },
            {
                "departure_time": "2:06 PM","status": "On Time"
            },
            {
                "departure_time": "2:11 PM","status": "On Time"
            },
            {
                "departure_time": "2:18 PM","status": "On Time"
            },
            {
                "departure_time": "2:23 PM","status": "On Time"
            },
            {
                "departure_time": "2:30 PM","status": "On Time"
            },
            {
                "departure_time": "2:35 PM","status": "On Time"
            },
            {
                "departure_time": "2:42 PM","status": "On Time"
            },
            {
                "departure_time": "2:47 PM","status": "On Time"
            },
            {
                "departure_time": "2:54 PM","status": "On Time"
            },
            {
                "departure_time": "2:59 PM","status": "On Time"
            },
            {
                "departure_time": "3:06 PM","status": "On Time"
            },
            {
                "departure_time": "3:11 PM","status": "On Time"
            },
            {
                "departure_time": "3:18 PM","status": "On Time"
            },
            {
                "departure_time": "3:23 PM","status": "On Time"
            },
            {
                "departure_time": "3:28 PM","status": "On Time"
            },
            {
                "departure_time": "3:33 PM","status": "On Time"
            },
            {
                "departure_time": "3:38 PM","status": "On Time"
            },
            {
                "departure_time": "3:43 PM","status": "On Time"
            },
            {
                "departure_time": "3:48 PM","status": "On Time"
            },
            {
                "departure_time": "3:53 PM","status": "On Time"
            },
            {
                "departure_time": "3:57 PM","status": "On Time"
            },
            {
                "departure_time": "4:02 PM","status": "On Time"
            },
            {
                "departure_time": "4:09 PM","status": "On Time"
            },
            {
                "departure_time": "4:14 PM","status": "On Time"
            },
            {
                "departure_time": "4:23 PM","status": "On Time"
            },
            {
                "departure_time": "4:28 PM","status": "On Time"
            },
            {
                "departure_time": "4:30 PM","status": "On Time"
            },
            {
                "departure_time": "4:35 PM","status": "On Time"
            },
            {
                "departure_time": "4:42 PM","status": "On Time"
            },
            {
                "departure_time": "4:47 PM","status": "On Time"
            },
            {
                "departure_time": "4:51 PM","status": "On Time"
            },
            {
                "departure_time": "4:56 PM","status": "On Time"
            },
            {
                "departure_time": "5:03 PM","status": "On Time"
            },
            {
                "departure_time": "5:08 PM","status": "On Time"
            },
            {
                "departure_time": "5:13 PM","status": "On Time"
            },
            {
                "departure_time": "5:18 PM","status": "On Time"
            },
            {
                "departure_time": "5:24 PM","status": "On Time"
            },
            {
                "departure_time": "5:29 PM","status": "On Time"
            },
            {
                "departure_time": "5:36 PM","status": "On Time"
            },
            {
                "departure_time": "5:41 PM","status": "On Time"
            },
            {
                "departure_time": "5:49 PM","status": "On Time"
            },
            {
                "departure_time": "5:54 PM","status": "On Time"
            },
            {
                "departure_time": "6:01 PM","status": "On Time"
            },
            {
                "departure_time": "6:06 PM","status": "On Time"
            },
            {
                "departure_time": "6:08 PM","status": "On Time"
            },
            {
                "departure_time": "6:13 PM","status": "On Time"
            },
            {
                "departure_time": "6:20 PM","status": "On Time"
            },
            {
                "departure_time": "6:25 PM","status": "On Time"
            },
            {
                "departure_time": "6:30 PM","status": "On Time"
            },
            {
                "departure_time": "6:35 PM","status": "On Time"
            },
            {
                "departure_time": "6:42 PM","status": "On Time"
            },
            {
                "departure_time": "6:47 PM","status": "On Time"
            },
            {
                "departure_time": "6:55 PM","status": "On Time"
            },
            {
                "departure_time": "7:00 PM","status": "On Time"
            },
            {
                "departure_time": "7:06 PM","status": "On Time"
            },
            {
                "departure_time": "7:11 PM","status": "On Time"
            },
            {
                "departure_time": "7:18 PM","status": "On Time"
            },
            {
                "departure_time": "7:23 PM","status": "On Time"
            },
            {
                "departure_time": "7:36 PM","status": "On Time"
            },
            {
                "departure_time": "7:41 PM","status": "On Time"
            },
            {
                "departure_time": "7:48 PM","status": "On Time"
            },
            {
                "departure_time": "7:53 PM","status": "On Time"
            },
            {
                "departure_time": "8:08 PM","status": "On Time"
            },
            {
                "departure_time": "8:13 PM","status": "On Time"
            },
            {
                "departure_time": "8:28 PM","status": "On Time"
            },
            {
                "departure_time": "8:33 PM","status": "On Time"
            },
            {
                "departure_time": "8:48 PM","status": "On Time"
            },
            {
                "departure_time": "8:53 PM","status": "On Time"
            },
            {
                "departure_time": "9:08 PM","status": "On Time"
            },
            {
                "departure_time": "9:13 PM","status": "On Time"
            },
            {
                "departure_time": "9:28 PM","status": "On Time"
            },
            {
                "departure_time": "9:33 PM","status": "On Time"
            },
            {
                "departure_time": "9:48 PM","status": "On Time"
            },
            {
                "departure_time": "9:53 PM","status": "On Time"
            },
            {
                "departure_time": "10:08 PM","status": "On Time"
            },
            {
                "departure_time": "10:13 PM","status": "On Time"
            },
            {
                "departure_time": "10:28 PM","status": "On Time"
            },
            {
                "departure_time": "10:33 PM","status": "On Time"
            },
            {
                "departure_time": "10:48 PM","status": "On Time"
            },
            {
                "departure_time": "10:53 PM","status": "On Time"
            },
            {
                "departure_time": "11:08 PM","status": "On Time"
            },
            {
                "departure_time": "11:13 PM","status": "On Time"
            },
            {
                "departure_time": "11:28 PM","status": "On Time"
            },
            {
                "departure_time": "11:33 PM","status": "On Time"
            },
            {
                "departure_time": "11:48 PM","status": "On Time"
            },
            {
                "departure_time": "11:53 PM","status": "On Time"
            }
        ]
    },
    {
        "title": "Collingswood",
        "eastBound": [
            {
                "departure_time": "12:20 AM","status": "On Time"
            },
            {
                "departure_time": "12:58 AM","status": "On Time"
            },
            {
                "departure_time": "1:43 AM","status": "On Time"
            },
            {
                "departure_time": "2:28 AM","status": "On Time"
            },
            {
                "departure_time": "3:13 AM","status": "On Time"
            },
            {
                "departure_time": "3:58 AM","status": "On Time"
            },
            {
                "departure_time": "4:43 AM","status": "On Time"
            },
            {
                "departure_time": "5:30 AM","status": "On Time"
            },
            {
                "departure_time": "5:45 AM","status": "On Time"
            },
            {
                "departure_time": "6:00 AM","status": "On Time"
            },
            {
                "departure_time": "6:15 AM","status": "On Time"
            },
            {
                "departure_time": "6:30 AM","status": "On Time"
            },
            {
                "departure_time": "6:45 AM","status": "On Time"
            },
            {
                "departure_time": "6:55 AM","status": "On Time"
            },
            {
                "departure_time": "7:07 AM","status": "On Time"
            },
            {
                "departure_time": "7:15 AM","status": "On Time"
            },
            {
                "departure_time": "7:25 AM","status": "On Time"
            },
            {
                "departure_time": "7:35 AM","status": "On Time"
            },
            {
                "departure_time": "7:49 AM","status": "On Time"
            },
            {
                "departure_time": "8:02 AM","status": "On Time"
            },
            {
                "departure_time": "8:12 AM","status": "On Time"
            },
            {
                "departure_time": "8:31 AM","status": "On Time"
            },
            {
                "departure_time": "8:36 AM","status": "On Time"
            },
            {
                "departure_time": "8:47 AM","status": "On Time"
            },
            {
                "departure_time": "8:55 AM","status": "On Time"
            },
            {
                "departure_time": "9:08 AM","status": "On Time"
            },
            {
                "departure_time": "9:23 AM","status": "On Time"
            },
            {
                "departure_time": "9:39 AM","status": "On Time"
            },
            {
                "departure_time": "9:48 AM","status": "On Time"
            },
            {
                "departure_time": "9:59 AM","status": "On Time"
            },
            {
                "departure_time": "10:11 AM","status": "On Time"
            },
            {
                "departure_time": "10:23 AM","status": "On Time"
            },
            {
                "departure_time": "10:35 AM","status": "On Time"
            },
            {
                "departure_time": "10:47 AM","status": "On Time"
            },
            {
                "departure_time": "10:59 AM","status": "On Time"
            },
            {
                "departure_time": "11:11 AM","status": "On Time"
            },
            {
                "departure_time": "11:23 AM","status": "On Time"
            },
            {
                "departure_time": "11:35 AM","status": "On Time"
            },
            {
                "departure_time": "11:47 AM","status": "On Time"
            },
            {
                "departure_time": "11:59 AM","status": "On Time"
            },
            {
                "departure_time": "12:11 PM","status": "On Time"
            },
            {
                "departure_time": "12:23 PM","status": "On Time"
            },
            {
                "departure_time": "12:35 PM","status": "On Time"
            },
            {
                "departure_time": "12:47 PM","status": "On Time"
            },
            {
                "departure_time": "12:59 PM","status": "On Time"
            },
            {
                "departure_time": "1:11 PM","status": "On Time"
            },
            {
                "departure_time": "1:23 PM","status": "On Time"
            },
            {
                "departure_time": "1:35 PM","status": "On Time"
            },
            {
                "departure_time": "1:47 PM","status": "On Time"
            },
            {
                "departure_time": "1:59 PM","status": "On Time"
            },
            {
                "departure_time": "2:11 PM","status": "On Time"
            },
            {
                "departure_time": "2:23 PM","status": "On Time"
            },
            {
                "departure_time": "2:35 PM","status": "On Time"
            },
            {
                "departure_time": "2:47 PM","status": "On Time"
            },
            {
                "departure_time": "2:59 PM","status": "On Time"
            },
            {
                "departure_time": "3:11 PM","status": "On Time"
            },
            {
                "departure_time": "3:23 PM","status": "On Time"
            },
            {
                "departure_time": "3:35 PM","status": "On Time"
            },
            {
                "departure_time": "3:45 PM","status": "On Time"
            },
            {
                "departure_time": "3:55 PM","status": "On Time"
            },
            {
                "departure_time": "4:05 PM","status": "On Time"
            },
            {
                "departure_time": "4:15 PM","status": "On Time"
            },
            {
                "departure_time": "4:23 PM","status": "On Time"
            },
            {
                "departure_time": "4:27 PM","status": "On Time"
            },
            {
                "departure_time": "4:35 PM","status": "On Time"
            },
            {
                "departure_time": "4:41 PM","status": "On Time"
            },
            {
                "departure_time": "4:49 PM","status": "On Time"
            },
            {
                "departure_time": "4:56 PM","status": "On Time"
            },
            {
                "departure_time": "5:01 PM","status": "On Time"
            },
            {
                "departure_time": "5:08 PM","status": "On Time"
            },
            {
                "departure_time": "5:13 PM","status": "On Time"
            },
            {
                "departure_time": "5:17 PM","status": "On Time"
            },
            {
                "departure_time": "5:21 PM","status": "On Time"
            },
            {
                "departure_time": "5:25 PM","status": "On Time"
            },
            {
                "departure_time": "5:30 PM","status": "On Time"
            },
            {
                "departure_time": "5:35 PM","status": "On Time"
            },
            {
                "departure_time": "5:40 PM","status": "On Time"
            },
            {
                "departure_time": "5:45 PM","status": "On Time"
            },
            {
                "departure_time": "5:50 PM","status": "On Time"
            },
            {
                "departure_time": "5:55 PM","status": "On Time"
            },
            {
                "departure_time": "6:02 PM","status": "On Time"
            },
            {
                "departure_time": "6:08 PM","status": "On Time"
            },
            {
                "departure_time": "6:15 PM","status": "On Time"
            },
            {
                "departure_time": "6:20 PM","status": "On Time"
            },
            {
                "departure_time": "6:30 PM","status": "On Time"
            },
            {
                "departure_time": "6:36 PM","status": "On Time"
            },
            {
                "departure_time": "6:48 PM","status": "On Time"
            },
            {
                "departure_time": "6:59 PM","status": "On Time"
            },
            {
                "departure_time": "7:10 PM","status": "On Time"
            },
            {
                "departure_time": "7:23 PM","status": "On Time"
            },
            {
                "departure_time": "7:35 PM","status": "On Time"
            },
            {
                "departure_time": "7:47 PM","status": "On Time"
            },
            {
                "departure_time": "8:04 PM","status": "On Time"
            },
            {
                "departure_time": "8:24 PM","status": "On Time"
            },
            {
                "departure_time": "8:44 PM","status": "On Time"
            },
            {
                "departure_time": "9:04 PM","status": "On Time"
            },
            {
                "departure_time": "9:24 PM","status": "On Time"
            },
            {
                "departure_time": "9:44 PM","status": "On Time"
            },
            {
                "departure_time": "10:04 PM","status": "On Time"
            },
            {
                "departure_time": "10:24 PM","status": "On Time"
            },
            {
                "departure_time": "10:44 PM","status": "On Time"
            },
            {
                "departure_time": "11:04 PM","status": "On Time"
            },
            {
                "departure_time": "11:24 PM","status": "On Time"
            },
            {
                "departure_time": "11:44 PM","status": "On Time"
            },
            {
                "departure_time": "12:04 AM","status": "On Time"
            }
        ],
        "westBound": [
            {
                "departure_time": "12:19 AM","status": "On Time"
            },
            {
                "departure_time": "12:55 AM","status": "On Time"
            },
            {
                "departure_time": "1:40 AM","status": "On Time"
            },
            {
                "departure_time": "2:25 AM","status": "On Time"
            },
            {
                "departure_time": "3:10 AM","status": "On Time"
            },
            {
                "departure_time": "3:55 AM","status": "On Time"
            },
            {
                "departure_time": "4:40 AM","status": "On Time"
            },
            {
                "departure_time": "5:10 AM","status": "On Time"
            },
            {
                "departure_time": "5:25 AM","status": "On Time"
            },
            {
                "departure_time": "5:40 AM","status": "On Time"
            },
            {
                "departure_time": "5:55 AM","status": "On Time"
            },
            {
                "departure_time": "6:05 AM","status": "On Time"
            },
            {
                "departure_time": "6:18 AM","status": "On Time"
            },
            {
                "departure_time": "6:30 AM","status": "On Time"
            },
            {
                "departure_time": "6:40 AM","status": "On Time"
            },
            {
                "departure_time": "6:50 AM","status": "On Time"
            },
            {
                "departure_time": "7:00 AM","status": "On Time"
            },
            {
                "departure_time": "7:08 AM","status": "On Time"
            },
            {
                "departure_time": "7:13 AM","status": "On Time"
            },
            {
                "departure_time": "7:18 AM","status": "On Time"
            },
            {
                "departure_time": "7:22 AM","status": "On Time"
            },
            {
                "departure_time": "7:27 AM","status": "On Time"
            },
            {
                "departure_time": "7:32 AM","status": "On Time"
            },
            {
                "departure_time": "7:37 AM","status": "On Time"
            },
            {
                "departure_time": "7:42 AM","status": "On Time"
            },
            {
                "departure_time": "7:50 AM","status": "On Time"
            },
            {
                "departure_time": "8:02 AM","status": "On Time"
            },
            {
                "departure_time": "8:10 AM","status": "On Time"
            },
            {
                "departure_time": "8:18 AM","status": "On Time"
            },
            {
                "departure_time": "8:25 AM","status": "On Time"
            },
            {
                "departure_time": "8:34 AM","status": "On Time"
            },
            {
                "departure_time": "8:39 AM","status": "On Time"
            },
            {
                "departure_time": "8:48 AM","status": "On Time"
            },
            {
                "departure_time": "8:57 AM","status": "On Time"
            },
            {
                "departure_time": "9:05 AM","status": "On Time"
            },
            {
                "departure_time": "9:13 AM","status": "On Time"
            },
            {
                "departure_time": "9:22 AM","status": "On Time"
            },
            {
                "departure_time": "9:34 AM","status": "On Time"
            },
            {
                "departure_time": "9:46 AM","status": "On Time"
            },
            {
                "departure_time": "9:58 AM","status": "On Time"
            },
            {
                "departure_time": "10:10 AM","status": "On Time"
            },
            {
                "departure_time": "10:22 AM","status": "On Time"
            },
            {
                "departure_time": "10:34 AM","status": "On Time"
            },
            {
                "departure_time": "10:46 AM","status": "On Time"
            },
            {
                "departure_time": "10:58 AM","status": "On Time"
            },
            {
                "departure_time": "11:10 AM","status": "On Time"
            },
            {
                "departure_time": "11:22 AM","status": "On Time"
            },
            {
                "departure_time": "11:34 AM","status": "On Time"
            },
            {
                "departure_time": "11:46 AM","status": "On Time"
            },
            {
                "departure_time": "11:58 AM","status": "On Time"
            },
            {
                "departure_time": "12:10 PM","status": "On Time"
            },
            {
                "departure_time": "12:22 PM","status": "On Time"
            },
            {
                "departure_time": "12:34 PM","status": "On Time"
            },
            {
                "departure_time": "12:46 PM","status": "On Time"
            },
            {
                "departure_time": "12:58 PM","status": "On Time"
            },
            {
                "departure_time": "1:10 PM","status": "On Time"
            },
            {
                "departure_time": "1:22 PM","status": "On Time"
            },
            {
                "departure_time": "1:34 PM","status": "On Time"
            },
            {
                "departure_time": "1:46 PM","status": "On Time"
            },
            {
                "departure_time": "1:58 PM","status": "On Time"
            },
            {
                "departure_time": "2:10 PM","status": "On Time"
            },
            {
                "departure_time": "2:22 PM","status": "On Time"
            },
            {
                "departure_time": "2:34 PM","status": "On Time"
            },
            {
                "departure_time": "2:46 PM","status": "On Time"
            },
            {
                "departure_time": "2:58 PM","status": "On Time"
            },
            {
                "departure_time": "3:10 PM","status": "On Time"
            },
            {
                "departure_time": "3:20 PM","status": "On Time"
            },
            {
                "departure_time": "3:30 PM","status": "On Time"
            },
            {
                "departure_time": "3:40 PM","status": "On Time"
            },
            {
                "departure_time": "3:49 PM","status": "On Time"
            },
            {
                "departure_time": "4:01 PM","status": "On Time"
            },
            {
                "departure_time": "4:15 PM","status": "On Time"
            },
            {
                "departure_time": "4:22 PM","status": "On Time"
            },
            {
                "departure_time": "4:34 PM","status": "On Time"
            },
            {
                "departure_time": "4:43 PM","status": "On Time"
            },
            {
                "departure_time": "4:55 PM","status": "On Time"
            },
            {
                "departure_time": "5:05 PM","status": "On Time"
            },
            {
                "departure_time": "5:16 PM","status": "On Time"
            },
            {
                "departure_time": "5:28 PM","status": "On Time"
            },
            {
                "departure_time": "5:41 PM","status": "On Time"
            },
            {
                "departure_time": "5:53 PM","status": "On Time"
            },
            {
                "departure_time": "6:00 PM","status": "On Time"
            },
            {
                "departure_time": "6:12 PM","status": "On Time"
            },
            {
                "departure_time": "6:22 PM","status": "On Time"
            },
            {
                "departure_time": "6:34 PM","status": "On Time"
            },
            {
                "departure_time": "6:47 PM","status": "On Time"
            },
            {
                "departure_time": "6:58 PM","status": "On Time"
            },
            {
                "departure_time": "7:10 PM","status": "On Time"
            },
            {
                "departure_time": "7:28 PM","status": "On Time"
            },
            {
                "departure_time": "7:40 PM","status": "On Time"
            },
            {
                "departure_time": "8:00 PM","status": "On Time"
            },
            {
                "departure_time": "8:20 PM","status": "On Time"
            },
            {
                "departure_time": "8:40 PM","status": "On Time"
            },
            {
                "departure_time": "9:00 PM","status": "On Time"
            },
            {
                "departure_time": "9:20 PM","status": "On Time"
            },
            {
                "departure_time": "9:40 PM","status": "On Time"
            },
            {
                "departure_time": "10:00 PM","status": "On Time"
            },
            {
                "departure_time": "10:20 PM","status": "On Time"
            },
            {
                "departure_time": "10:40 PM","status": "On Time"
            },
            {
                "departure_time": "11:00 PM","status": "On Time"
            },
            {
                "departure_time": "11:20 PM","status": "On Time"
            },
            {
                "departure_time": "11:40 PM","status": "On Time"
            }
        ]
    },
    {
        "title": "Ferry Ave",
        "eastBound": [
            {
                "departure_time": "12:18 AM","status": "On Time"
            },
            {
                "departure_time": "12:56 AM","status": "On Time"
            },
            {
                "departure_time": "1:41 AM","status": "On Time"
            },
            {
                "departure_time": "2:26 AM","status": "On Time"
            },
            {
                "departure_time": "3:11 AM","status": "On Time"
            },
            {
                "departure_time": "3:56 AM","status": "On Time"
            },
            {
                "departure_time": "4:41 AM","status": "On Time"
            },
            {
                "departure_time": "5:28 AM","status": "On Time"
            },
            {
                "departure_time": "5:43 AM","status": "On Time"
            },
            {
                "departure_time": "5:58 AM","status": "On Time"
            },
            {
                "departure_time": "6:13 AM","status": "On Time"
            },
            {
                "departure_time": "6:28 AM","status": "On Time"
            },
            {
                "departure_time": "6:43 AM","status": "On Time"
            },
            {
                "departure_time": "6:53 AM","status": "On Time"
            },
            {
                "departure_time": "7:05 AM","status": "On Time"
            },
            {
                "departure_time": "7:13 AM","status": "On Time"
            },
            {
                "departure_time": "7:23 AM","status": "On Time"
            },
            {
                "departure_time": "7:33 AM","status": "On Time"
            },
            {
                "departure_time": "7:47 AM","status": "On Time"
            },
            {
                "departure_time": "8:00 AM","status": "On Time"
            },
            {
                "departure_time": "8:10 AM","status": "On Time"
            },
            {
                "departure_time": "8:29 AM","status": "On Time"
            },
            {
                "departure_time": "8:34 AM","status": "On Time"
            },
            {
                "departure_time": "8:45 AM","status": "On Time"
            },
            {
                "departure_time": "8:53 AM","status": "On Time"
            },
            {
                "departure_time": "9:06 AM","status": "On Time"
            },
            {
                "departure_time": "9:21 AM","status": "On Time"
            },
            {
                "departure_time": "9:37 AM","status": "On Time"
            },
            {
                "departure_time": "9:46 AM","status": "On Time"
            },
            {
                "departure_time": "9:57 AM","status": "On Time"
            },
            {
                "departure_time": "10:09 AM","status": "On Time"
            },
            {
                "departure_time": "10:21 AM","status": "On Time"
            },
            {
                "departure_time": "10:33 AM","status": "On Time"
            },
            {
                "departure_time": "10:45 AM","status": "On Time"
            },
            {
                "departure_time": "10:57 AM","status": "On Time"
            },
            {
                "departure_time": "11:09 AM","status": "On Time"
            },
            {
                "departure_time": "11:21 AM","status": "On Time"
            },
            {
                "departure_time": "11:33 AM","status": "On Time"
            },
            {
                "departure_time": "11:45 AM","status": "On Time"
            },
            {
                "departure_time": "11:57 AM","status": "On Time"
            },
            {
                "departure_time": "12:09 PM","status": "On Time"
            },
            {
                "departure_time": "12:21 PM","status": "On Time"
            },
            {
                "departure_time": "12:33 PM","status": "On Time"
            },
            {
                "departure_time": "12:45 PM","status": "On Time"
            },
            {
                "departure_time": "12:57 PM","status": "On Time"
            },
            {
                "departure_time": "1:09 PM","status": "On Time"
            },
            {
                "departure_time": "1:21 PM","status": "On Time"
            },
            {
                "departure_time": "1:33 PM","status": "On Time"
            },
            {
                "departure_time": "1:45 PM","status": "On Time"
            },
            {
                "departure_time": "1:57 PM","status": "On Time"
            },
            {
                "departure_time": "2:09 PM","status": "On Time"
            },
            {
                "departure_time": "2:21 PM","status": "On Time"
            },
            {
                "departure_time": "2:33 PM","status": "On Time"
            },
            {
                "departure_time": "2:45 PM","status": "On Time"
            },
            {
                "departure_time": "2:57 PM","status": "On Time"
            },
            {
                "departure_time": "3:09 PM","status": "On Time"
            },
            {
                "departure_time": "3:21 PM","status": "On Time"
            },
            {
                "departure_time": "3:33 PM","status": "On Time"
            },
            {
                "departure_time": "3:43 PM","status": "On Time"
            },
            {
                "departure_time": "3:53 PM","status": "On Time"
            },
            {
                "departure_time": "4:03 PM","status": "On Time"
            },
            {
                "departure_time": "4:13 PM","status": "On Time"
            },
            {
                "departure_time": "4:21 PM","status": "On Time"
            },
            {
                "departure_time": "4:25 PM","status": "On Time"
            },
            {
                "departure_time": "4:33 PM","status": "On Time"
            },
            {
                "departure_time": "4:39 PM","status": "On Time"
            },
            {
                "departure_time": "4:47 PM","status": "On Time"
            },
            {
                "departure_time": "4:54 PM","status": "On Time"
            },
            {
                "departure_time": "4:59 PM","status": "On Time"
            },
            {
                "departure_time": "5:06 PM","status": "On Time"
            },
            {
                "departure_time": "5:11 PM","status": "On Time"
            },
            {
                "departure_time": "5:15 PM","status": "On Time"
            },
            {
                "departure_time": "5:19 PM","status": "On Time"
            },
            {
                "departure_time": "5:23 PM","status": "On Time"
            },
            {
                "departure_time": "5:28 PM","status": "On Time"
            },
            {
                "departure_time": "5:33 PM","status": "On Time"
            },
            {
                "departure_time": "5:38 PM","status": "On Time"
            },
            {
                "departure_time": "5:43 PM","status": "On Time"
            },
            {
                "departure_time": "5:48 PM","status": "On Time"
            },
            {
                "departure_time": "5:53 PM","status": "On Time"
            },
            {
                "departure_time": "6:00 PM","status": "On Time"
            },
            {
                "departure_time": "6:06 PM","status": "On Time"
            },
            {
                "departure_time": "6:13 PM","status": "On Time"
            },
            {
                "departure_time": "6:18 PM","status": "On Time"
            },
            {
                "departure_time": "6:28 PM","status": "On Time"
            },
            {
                "departure_time": "6:34 PM","status": "On Time"
            },
            {
                "departure_time": "6:46 PM","status": "On Time"
            },
            {
                "departure_time": "6:57 PM","status": "On Time"
            },
            {
                "departure_time": "7:08 PM","status": "On Time"
            },
            {
                "departure_time": "7:21 PM","status": "On Time"
            },
            {
                "departure_time": "7:33 PM","status": "On Time"
            },
            {
                "departure_time": "7:45 PM","status": "On Time"
            },
            {
                "departure_time": "8:02 PM","status": "On Time"
            },
            {
                "departure_time": "8:22 PM","status": "On Time"
            },
            {
                "departure_time": "8:42 PM","status": "On Time"
            },
            {
                "departure_time": "9:02 PM","status": "On Time"
            },
            {
                "departure_time": "9:22 PM","status": "On Time"
            },
            {
                "departure_time": "9:42 PM","status": "On Time"
            },
            {
                "departure_time": "10:02 PM","status": "On Time"
            },
            {
                "departure_time": "10:22 PM","status": "On Time"
            },
            {
                "departure_time": "10:42 PM","status": "On Time"
            },
            {
                "departure_time": "11:02 PM","status": "On Time"
            },
            {
                "departure_time": "11:22 PM","status": "On Time"
            },
            {
                "departure_time": "11:42 PM","status": "On Time"
            },
            {
                "departure_time": "12:02 AM","status": "On Time"
            }
        ],
        "westBound": [
            {
                "departure_time": "12:21 AM","status": "On Time"
            },
            {
                "departure_time": "12:57 AM","status": "On Time"
            },
            {
                "departure_time": "1:42 AM","status": "On Time"
            },
            {
                "departure_time": "2:27 AM","status": "On Time"
            },
            {
                "departure_time": "3:12 AM","status": "On Time"
            },
            {
                "departure_time": "3:57 AM","status": "On Time"
            },
            {
                "departure_time": "4:42 AM","status": "On Time"
            },
            {
                "departure_time": "5:12 AM","status": "On Time"
            },
            {
                "departure_time": "5:27 AM","status": "On Time"
            },
            {
                "departure_time": "5:42 AM","status": "On Time"
            },
            {
                "departure_time": "5:57 AM","status": "On Time"
            },
            {
                "departure_time": "6:07 AM","status": "On Time"
            },
            {
                "departure_time": "6:20 AM","status": "On Time"
            },
            {
                "departure_time": "6:32 AM","status": "On Time"
            },
            {
                "departure_time": "6:42 AM","status": "On Time"
            },
            {
                "departure_time": "6:52 AM","status": "On Time"
            },
            {
                "departure_time": "7:02 AM","status": "On Time"
            },
            {
                "departure_time": "7:10 AM","status": "On Time"
            },
            {
                "departure_time": "7:15 AM","status": "On Time"
            },
            {
                "departure_time": "7:20 AM","status": "On Time"
            },
            {
                "departure_time": "7:24 AM","status": "On Time"
            },
            {
                "departure_time": "7:29 AM","status": "On Time"
            },
            {
                "departure_time": "7:34 AM","status": "On Time"
            },
            {
                "departure_time": "7:39 AM","status": "On Time"
            },
            {
                "departure_time": "7:44 AM","status": "On Time"
            },
            {
                "departure_time": "7:52 AM","status": "On Time"
            },
            {
                "departure_time": "7:58 AM","status": "On Time"
            },
            {
                "departure_time": "8:04 AM","status": "On Time"
            },
            {
                "departure_time": "8:06 AM","status": "On Time"
            },
            {
                "departure_time": "8:12 AM","status": "On Time"
            },
            {
                "departure_time": "8:14 AM","status": "On Time"
            },
            {
                "departure_time": "8:20 AM","status": "On Time"
            },
            {
                "departure_time": "8:22 AM","status": "On Time"
            },
            {
                "departure_time": "8:27 AM","status": "On Time"
            },
            {
                "departure_time": "8:30 AM","status": "On Time"
            },
            {
                "departure_time": "8:36 AM","status": "On Time"
            },
            {
                "departure_time": "8:41 AM","status": "On Time"
            },
            {
                "departure_time": "8:50 AM","status": "On Time"
            },
            {
                "departure_time": "8:59 AM","status": "On Time"
            },
            {
                "departure_time": "9:07 AM","status": "On Time"
            },
            {
                "departure_time": "9:15 AM","status": "On Time"
            },
            {
                "departure_time": "9:24 AM","status": "On Time"
            },
            {
                "departure_time": "9:36 AM","status": "On Time"
            },
            {
                "departure_time": "9:48 AM","status": "On Time"
            },
            {
                "departure_time": "10:00 AM","status": "On Time"
            },
            {
                "departure_time": "10:12 AM","status": "On Time"
            },
            {
                "departure_time": "10:24 AM","status": "On Time"
            },
            {
                "departure_time": "10:36 AM","status": "On Time"
            },
            {
                "departure_time": "10:48 AM","status": "On Time"
            },
            {
                "departure_time": "11:00 AM","status": "On Time"
            },
            {
                "departure_time": "11:12 AM","status": "On Time"
            },
            {
                "departure_time": "11:24 AM","status": "On Time"
            },
            {
                "departure_time": "11:36 AM","status": "On Time"
            },
            {
                "departure_time": "11:48 AM","status": "On Time"
            },
            {
                "departure_time": "12:00 PM","status": "On Time"
            },
            {
                "departure_time": "12:12 PM","status": "On Time"
            },
            {
                "departure_time": "12:24 PM","status": "On Time"
            },
            {
                "departure_time": "12:36 PM","status": "On Time"
            },
            {
                "departure_time": "12:48 PM","status": "On Time"
            },
            {
                "departure_time": "1:00 PM","status": "On Time"
            },
            {
                "departure_time": "1:12 PM","status": "On Time"
            },
            {
                "departure_time": "1:24 PM","status": "On Time"
            },
            {
                "departure_time": "1:36 PM","status": "On Time"
            },
            {
                "departure_time": "1:48 PM","status": "On Time"
            },
            {
                "departure_time": "2:00 PM","status": "On Time"
            },
            {
                "departure_time": "2:12 PM","status": "On Time"
            },
            {
                "departure_time": "2:24 PM","status": "On Time"
            },
            {
                "departure_time": "2:36 PM","status": "On Time"
            },
            {
                "departure_time": "2:48 PM","status": "On Time"
            },
            {
                "departure_time": "3:00 PM","status": "On Time"
            },
            {
                "departure_time": "3:12 PM","status": "On Time"
            },
            {
                "departure_time": "3:22 PM","status": "On Time"
            },
            {
                "departure_time": "3:32 PM","status": "On Time"
            },
            {
                "departure_time": "3:42 PM","status": "On Time"
            },
            {
                "departure_time": "3:51 PM","status": "On Time"
            },
            {
                "departure_time": "4:03 PM","status": "On Time"
            },
            {
                "departure_time": "4:17 PM","status": "On Time"
            },
            {
                "departure_time": "4:24 PM","status": "On Time"
            },
            {
                "departure_time": "4:36 PM","status": "On Time"
            },
            {
                "departure_time": "4:45 PM","status": "On Time"
            },
            {
                "departure_time": "4:57 PM","status": "On Time"
            },
            {
                "departure_time": "5:07 PM","status": "On Time"
            },
            {
                "departure_time": "5:18 PM","status": "On Time"
            },
            {
                "departure_time": "5:30 PM","status": "On Time"
            },
            {
                "departure_time": "5:43 PM","status": "On Time"
            },
            {
                "departure_time": "5:55 PM","status": "On Time"
            },
            {
                "departure_time": "6:02 PM","status": "On Time"
            },
            {
                "departure_time": "6:14 PM","status": "On Time"
            },
            {
                "departure_time": "6:24 PM","status": "On Time"
            },
            {
                "departure_time": "6:36 PM","status": "On Time"
            },
            {
                "departure_time": "6:49 PM","status": "On Time"
            },
            {
                "departure_time": "7:00 PM","status": "On Time"
            },
            {
                "departure_time": "7:12 PM","status": "On Time"
            },
            {
                "departure_time": "7:30 PM","status": "On Time"
            },
            {
                "departure_time": "7:42 PM","status": "On Time"
            },
            {
                "departure_time": "8:02 PM","status": "On Time"
            },
            {
                "departure_time": "8:22 PM","status": "On Time"
            },
            {
                "departure_time": "8:42 PM","status": "On Time"
            },
            {
                "departure_time": "9:02 PM","status": "On Time"
            },
            {
                "departure_time": "9:22 PM","status": "On Time"
            },
            {
                "departure_time": "9:42 PM","status": "On Time"
            },
            {
                "departure_time": "10:02 PM","status": "On Time"
            },
            {
                "departure_time": "10:22 PM","status": "On Time"
            },
            {
                "departure_time": "10:42 PM","status": "On Time"
            },
            {
                "departure_time": "11:02 PM","status": "On Time"
            },
            {
                "departure_time": "11:22 PM","status": "On Time"
            },
            {
                "departure_time": "11:42 PM","status": "On Time"
            }
        ]
    }, {
        "title": "Haddonfield",
        "eastBound": [
            {
                "departure_time": "12:24 AM","status": "On Time"
            },
            {
                "departure_time": "1:02 AM","status": "On Time"
            },
            {
                "departure_time": "1:47 AM","status": "On Time"
            },
            {
                "departure_time": "2:32 AM","status": "On Time"
            },
            {
                "departure_time": "3:17 AM","status": "On Time"
            },
            {
                "departure_time": "4:02 AM","status": "On Time"
            },
            {
                "departure_time": "4:47 AM","status": "On Time"
            },
            {
                "departure_time": "5:34 AM","status": "On Time"
            },
            {
                "departure_time": "5:49 AM","status": "On Time"
            },
            {
                "departure_time": "6:04 AM","status": "On Time"
            },
            {
                "departure_time": "6:19 AM","status": "On Time"
            },
            {
                "departure_time": "6:34 AM","status": "On Time"
            },
            {
                "departure_time": "6:49 AM","status": "On Time"
            },
            {
                "departure_time": "6:59 AM","status": "On Time"
            },
            {
                "departure_time": "7:11 AM","status": "On Time"
            },
            {
                "departure_time": "7:19 AM","status": "On Time"
            },
            {
                "departure_time": "7:29 AM","status": "On Time"
            },
            {
                "departure_time": "7:39 AM","status": "On Time"
            },
            {
                "departure_time": "7:53 AM","status": "On Time"
            },
            {
                "departure_time": "8:06 AM","status": "On Time"
            },
            {
                "departure_time": "8:16 AM","status": "On Time"
            },
            {
                "departure_time": "8:35 AM","status": "On Time"
            },
            {
                "departure_time": "8:40 AM","status": "On Time"
            },
            {
                "departure_time": "8:51 AM","status": "On Time"
            },
            {
                "departure_time": "8:59 AM","status": "On Time"
            },
            {
                "departure_time": "9:12 AM","status": "On Time"
            },
            {
                "departure_time": "9:27 AM","status": "On Time"
            },
            {
                "departure_time": "9:43 AM","status": "On Time"
            },
            {
                "departure_time": "9:52 AM","status": "On Time"
            },
            {
                "departure_time": "10:03 AM","status": "On Time"
            },
            {
                "departure_time": "10:15 AM","status": "On Time"
            },
            {
                "departure_time": "10:27 AM","status": "On Time"
            },
            {
                "departure_time": "10:39 AM","status": "On Time"
            },
            {
                "departure_time": "10:51 AM","status": "On Time"
            },
            {
                "departure_time": "11:03 AM","status": "On Time"
            },
            {
                "departure_time": "11:15 AM","status": "On Time"
            },
            {
                "departure_time": "11:27 AM","status": "On Time"
            },
            {
                "departure_time": "11:39 AM","status": "On Time"
            },
            {
                "departure_time": "11:51 AM","status": "On Time"
            },
            {
                "departure_time": "12:03 PM","status": "On Time"
            },
            {
                "departure_time": "12:15 PM","status": "On Time"
            },
            {
                "departure_time": "12:27 PM","status": "On Time"
            },
            {
                "departure_time": "12:39 PM","status": "On Time"
            },
            {
                "departure_time": "12:51 PM","status": "On Time"
            },
            {
                "departure_time": "1:03 PM","status": "On Time"
            },
            {
                "departure_time": "1:15 PM","status": "On Time"
            },
            {
                "departure_time": "1:27 PM","status": "On Time"
            },
            {
                "departure_time": "1:39 PM","status": "On Time"
            },
            {
                "departure_time": "1:51 PM","status": "On Time"
            },
            {
                "departure_time": "2:03 PM","status": "On Time"
            },
            {
                "departure_time": "2:15 PM","status": "On Time"
            },
            {
                "departure_time": "2:27 PM","status": "On Time"
            },
            {
                "departure_time": "2:39 PM","status": "On Time"
            },
            {
                "departure_time": "2:51 PM","status": "On Time"
            },
            {
                "departure_time": "3:03 PM","status": "On Time"
            },
            {
                "departure_time": "3:15 PM","status": "On Time"
            },
            {
                "departure_time": "3:27 PM","status": "On Time"
            },
            {
                "departure_time": "3:39 PM","status": "On Time"
            },
            {
                "departure_time": "3:49 PM","status": "On Time"
            },
            {
                "departure_time": "3:59 PM","status": "On Time"
            },
            {
                "departure_time": "4:09 PM","status": "On Time"
            },
            {
                "departure_time": "4:19 PM","status": "On Time"
            },
            {
                "departure_time": "4:27 PM","status": "On Time"
            },
            {
                "departure_time": "4:31 PM","status": "On Time"
            },
            {
                "departure_time": "4:39 PM","status": "On Time"
            },
            {
                "departure_time": "4:45 PM","status": "On Time"
            },
            {
                "departure_time": "4:53 PM","status": "On Time"
            },
            {
                "departure_time": "5:00 PM","status": "On Time"
            },
            {
                "departure_time": "5:05 PM","status": "On Time"
            },
            {
                "departure_time": "5:12 PM","status": "On Time"
            },
            {
                "departure_time": "5:17 PM","status": "On Time"
            },
            {
                "departure_time": "5:21 PM","status": "On Time"
            },
            {
                "departure_time": "5:25 PM","status": "On Time"
            },
            {
                "departure_time": "5:29 PM","status": "On Time"
            },
            {
                "departure_time": "5:34 PM","status": "On Time"
            },
            {
                "departure_time": "5:39 PM","status": "On Time"
            },
            {
                "departure_time": "5:44 PM","status": "On Time"
            },
            {
                "departure_time": "5:49 PM","status": "On Time"
            },
            {
                "departure_time": "5:54 PM","status": "On Time"
            },
            {
                "departure_time": "5:59 PM","status": "On Time"
            },
            {
                "departure_time": "6:06 PM","status": "On Time"
            },
            {
                "departure_time": "6:12 PM","status": "On Time"
            },
            {
                "departure_time": "6:19 PM","status": "On Time"
            },
            {
                "departure_time": "6:24 PM","status": "On Time"
            },
            {
                "departure_time": "6:34 PM","status": "On Time"
            },
            {
                "departure_time": "6:40 PM","status": "On Time"
            },
            {
                "departure_time": "6:52 PM","status": "On Time"
            },
            {
                "departure_time": "7:03 PM","status": "On Time"
            },
            {
                "departure_time": "7:14 PM","status": "On Time"
            },
            {
                "departure_time": "7:27 PM","status": "On Time"
            },
            {
                "departure_time": "7:39 PM","status": "On Time"
            },
            {
                "departure_time": "7:51 PM","status": "On Time"
            },
            {
                "departure_time": "8:08 PM","status": "On Time"
            },
            {
                "departure_time": "8:28 PM","status": "On Time"
            },
            {
                "departure_time": "8:48 PM","status": "On Time"
            },
            {
                "departure_time": "9:08 PM","status": "On Time"
            },
            {
                "departure_time": "9:28 PM","status": "On Time"
            },
            {
                "departure_time": "9:48 PM","status": "On Time"
            },
            {
                "departure_time": "10:08 PM","status": "On Time"
            },
            {
                "departure_time": "10:28 PM","status": "On Time"
            },
            {
                "departure_time": "10:48 PM","status": "On Time"
            },
            {
                "departure_time": "11:08 PM","status": "On Time"
            },
            {
                "departure_time": "11:28 PM","status": "On Time"
            },
            {
                "departure_time": "11:48 PM","status": "On Time"
            },
            {
                "departure_time": "12:08 AM","status": "On Time"
            }
        ],
        "westBound": [
            {
                "departure_time": "12:15 AM","status": "On Time"
            },
            {
                "departure_time": "12:51 AM","status": "On Time"
            },
            {
                "departure_time": "1:36 AM","status": "On Time"
            },
            {
                "departure_time": "2:21 AM","status": "On Time"
            },
            {
                "departure_time": "3:06 AM","status": "On Time"
            },
            {
                "departure_time": "3:51 AM","status": "On Time"
            },
            {
                "departure_time": "4:36 AM","status": "On Time"
            },
            {
                "departure_time": "5:06 AM","status": "On Time"
            },
            {
                "departure_time": "5:21 AM","status": "On Time"
            },
            {
                "departure_time": "5:36 AM","status": "On Time"
            },
            {
                "departure_time": "5:51 AM","status": "On Time"
            },
            {
                "departure_time": "6:01 AM","status": "On Time"
            },
            {
                "departure_time": "6:14 AM","status": "On Time"
            },
            {
                "departure_time": "6:26 AM","status": "On Time"
            },
            {
                "departure_time": "6:36 AM","status": "On Time"
            },
            {
                "departure_time": "6:46 AM","status": "On Time"
            },
            {
                "departure_time": "6:56 AM","status": "On Time"
            },
            {
                "departure_time": "7:04 AM","status": "On Time"
            },
            {
                "departure_time": "7:09 AM","status": "On Time"
            },
            {
                "departure_time": "7:14 AM","status": "On Time"
            },
            {
                "departure_time": "7:18 AM","status": "On Time"
            },
            {
                "departure_time": "7:23 AM","status": "On Time"
            },
            {
                "departure_time": "7:28 AM","status": "On Time"
            },
            {
                "departure_time": "7:33 AM","status": "On Time"
            },
            {
                "departure_time": "7:38 AM","status": "On Time"
            },
            {
                "departure_time": "7:46 AM","status": "On Time"
            },
            {
                "departure_time": "7:58 AM","status": "On Time"
            },
            {
                "departure_time": "8:06 AM","status": "On Time"
            },
            {
                "departure_time": "8:14 AM","status": "On Time"
            },
            {
                "departure_time": "8:21 AM","status": "On Time"
            },
            {
                "departure_time": "8:30 AM","status": "On Time"
            },
            {
                "departure_time": "8:35 AM","status": "On Time"
            },
            {
                "departure_time": "8:44 AM","status": "On Time"
            },
            {
                "departure_time": "8:53 AM","status": "On Time"
            },
            {
                "departure_time": "9:01 AM","status": "On Time"
            },
            {
                "departure_time": "9:09 AM","status": "On Time"
            },
            {
                "departure_time": "9:18 AM","status": "On Time"
            },
            {
                "departure_time": "9:30 AM","status": "On Time"
            },
            {
                "departure_time": "9:42 AM","status": "On Time"
            },
            {
                "departure_time": "9:54 AM","status": "On Time"
            },
            {
                "departure_time": "10:06 AM","status": "On Time"
            },
            {
                "departure_time": "10:18 AM","status": "On Time"
            },
            {
                "departure_time": "10:30 AM","status": "On Time"
            },
            {
                "departure_time": "10:42 AM","status": "On Time"
            },
            {
                "departure_time": "10:54 AM","status": "On Time"
            },
            {
                "departure_time": "11:06 AM","status": "On Time"
            },
            {
                "departure_time": "11:18 AM","status": "On Time"
            },
            {
                "departure_time": "11:30 AM","status": "On Time"
            },
            {
                "departure_time": "11:42 AM","status": "On Time"
            },
            {
                "departure_time": "11:54 AM","status": "On Time"
            },
            {
                "departure_time": "12:06 PM","status": "On Time"
            },
            {
                "departure_time": "12:18 PM","status": "On Time"
            },
            {
                "departure_time": "12:30 PM","status": "On Time"
            },
            {
                "departure_time": "12:42 PM","status": "On Time"
            },
            {
                "departure_time": "12:54 PM","status": "On Time"
            },
            {
                "departure_time": "1:06 PM","status": "On Time"
            },
            {
                "departure_time": "1:18 PM","status": "On Time"
            },
            {
                "departure_time": "1:30 PM","status": "On Time"
            },
            {
                "departure_time": "1:42 PM","status": "On Time"
            },
            {
                "departure_time": "1:54 PM","status": "On Time"
            },
            {
                "departure_time": "2:06 PM","status": "On Time"
            },
            {
                "departure_time": "2:18 PM","status": "On Time"
            },
            {
                "departure_time": "2:30 PM","status": "On Time"
            },
            {
                "departure_time": "2:42 PM","status": "On Time"
            },
            {
                "departure_time": "2:54 PM","status": "On Time"
            },
            {
                "departure_time": "3:06 PM","status": "On Time"
            },
            {
                "departure_time": "3:16 PM","status": "On Time"
            },
            {
                "departure_time": "3:26 PM","status": "On Time"
            },
            {
                "departure_time": "3:36 PM","status": "On Time"
            },
            {
                "departure_time": "3:45 PM","status": "On Time"
            },
            {
                "departure_time": "3:57 PM","status": "On Time"
            },
            {
                "departure_time": "4:11 PM","status": "On Time"
            },
            {
                "departure_time": "4:18 PM","status": "On Time"
            },
            {
                "departure_time": "4:30 PM","status": "On Time"
            },
            {
                "departure_time": "4:39 PM","status": "On Time"
            },
            {
                "departure_time": "4:51 PM","status": "On Time"
            },
            {
                "departure_time": "5:01 PM","status": "On Time"
            },
            {
                "departure_time": "5:12 PM","status": "On Time"
            },
            {
                "departure_time": "5:24 PM","status": "On Time"
            },
            {
                "departure_time": "5:37 PM","status": "On Time"
            },
            {
                "departure_time": "5:49 PM","status": "On Time"
            },
            {
                "departure_time": "5:56 PM","status": "On Time"
            },
            {
                "departure_time": "6:08 PM","status": "On Time"
            },
            {
                "departure_time": "6:18 PM","status": "On Time"
            },
            {
                "departure_time": "6:30 PM","status": "On Time"
            },
            {
                "departure_time": "6:43 PM","status": "On Time"
            },
            {
                "departure_time": "6:54 PM","status": "On Time"
            },
            {
                "departure_time": "7:06 PM","status": "On Time"
            },
            {
                "departure_time": "7:24 PM","status": "On Time"
            },
            {
                "departure_time": "7:36 PM","status": "On Time"
            },
            {
                "departure_time": "7:56 PM","status": "On Time"
            },
            {
                "departure_time": "8:16 PM","status": "On Time"
            },
            {
                "departure_time": "8:36 PM","status": "On Time"
            },
            {
                "departure_time": "8:56 PM","status": "On Time"
            },
            {
                "departure_time": "9:16 PM","status": "On Time"
            },
            {
                "departure_time": "9:36 PM","status": "On Time"
            },
            {
                "departure_time": "9:56 PM","status": "On Time"
            },
            {
                "departure_time": "10:16 PM","status": "On Time"
            },
            {
                "departure_time": "10:36 PM","status": "On Time"
            },
            {
                "departure_time": "10:56 PM","status": "On Time"
            },
            {
                "departure_time": "11:16 PM","status": "On Time"
            },
            {
                "departure_time": "11:36 PM","status": "On Time"
            }
        ]
    }, {
        "title": "Lindenwold",
        "eastBound": [
            {
                "departure_time": "12:32 AM","status": "On Time"
            },
            {
                "departure_time": "1:10 AM","status": "On Time"
            },
            {
                "departure_time": "1:55 AM","status": "On Time"
            },
            {
                "departure_time": "2:40 AM","status": "On Time"
            },
            {
                "departure_time": "3:25 AM","status": "On Time"
            },
            {
                "departure_time": "4:10 AM","status": "On Time"
            },
            {
                "departure_time": "4:55 AM","status": "On Time"
            },
            {
                "departure_time": "5:42 AM","status": "On Time"
            },
            {
                "departure_time": "5:57 AM","status": "On Time"
            },
            {
                "departure_time": "6:12 AM","status": "On Time"
            },
            {
                "departure_time": "6:27 AM","status": "On Time"
            },
            {
                "departure_time": "6:42 AM","status": "On Time"
            },
            {
                "departure_time": "6:57 AM","status": "On Time"
            },
            {
                "departure_time": "7:07 AM","status": "On Time"
            },
            {
                "departure_time": "7:19 AM","status": "On Time"
            },
            {
                "departure_time": "7:27 AM","status": "On Time"
            },
            {
                "departure_time": "7:37 AM","status": "On Time"
            },
            {
                "departure_time": "7:47 AM","status": "On Time"
            },
            {
                "departure_time": "8:01 AM","status": "On Time"
            },
            {
                "departure_time": "8:14 AM","status": "On Time"
            },
            {
                "departure_time": "8:24 AM","status": "On Time"
            },
            {
                "departure_time": "8:43 AM","status": "On Time"
            },
            {
                "departure_time": "8:48 AM","status": "On Time"
            },
            {
                "departure_time": "8:59 AM","status": "On Time"
            },
            {
                "departure_time": "9:07 AM","status": "On Time"
            },
            {
                "departure_time": "9:20 AM","status": "On Time"
            },
            {
                "departure_time": "9:35 AM","status": "On Time"
            },
            {
                "departure_time": "9:51 AM","status": "On Time"
            },
            {
                "departure_time": "10:00 AM","status": "On Time"
            },
            {
                "departure_time": "10:11 AM","status": "On Time"
            },
            {
                "departure_time": "10:23 AM","status": "On Time"
            },
            {
                "departure_time": "10:35 AM","status": "On Time"
            },
            {
                "departure_time": "10:47 AM","status": "On Time"
            },
            {
                "departure_time": "10:59 AM","status": "On Time"
            },
            {
                "departure_time": "11:11 AM","status": "On Time"
            },
            {
                "departure_time": "11:23 AM","status": "On Time"
            },
            {
                "departure_time": "11:35 AM","status": "On Time"
            },
            {
                "departure_time": "11:47 AM","status": "On Time"
            },
            {
                "departure_time": "11:59 AM","status": "On Time"
            },
            {
                "departure_time": "12:11 PM","status": "On Time"
            },
            {
                "departure_time": "12:23 PM","status": "On Time"
            },
            {
                "departure_time": "12:35 PM","status": "On Time"
            },
            {
                "departure_time": "12:47 PM","status": "On Time"
            },
            {
                "departure_time": "12:59 PM","status": "On Time"
            },
            {
                "departure_time": "1:11 PM","status": "On Time"
            },
            {
                "departure_time": "1:23 PM","status": "On Time"
            },
            {
                "departure_time": "1:35 PM","status": "On Time"
            },
            {
                "departure_time": "1:47 PM","status": "On Time"
            },
            {
                "departure_time": "1:59 PM","status": "On Time"
            },
            {
                "departure_time": "2:11 PM","status": "On Time"
            },
            {
                "departure_time": "2:23 PM","status": "On Time"
            },
            {
                "departure_time": "2:35 PM","status": "On Time"
            },
            {
                "departure_time": "2:47 PM","status": "On Time"
            },
            {
                "departure_time": "2:59 PM","status": "On Time"
            },
            {
                "departure_time": "3:11 PM","status": "On Time"
            },
            {
                "departure_time": "3:23 PM","status": "On Time"
            },
            {
                "departure_time": "3:36 PM","status": "On Time"
            },
            {
                "departure_time": "3:48 PM","status": "On Time"
            },
            {
                "departure_time": "3:58 PM","status": "On Time"
            },
            {
                "departure_time": "4:08 PM","status": "On Time"
            },
            {
                "departure_time": "4:18 PM","status": "On Time"
            },
            {
                "departure_time": "4:28 PM","status": "On Time"
            },
            {
                "departure_time": "4:36 PM","status": "On Time"
            },
            {
                "departure_time": "4:40 PM","status": "On Time"
            },
            {
                "departure_time": "4:48 PM","status": "On Time"
            },
            {
                "departure_time": "4:54 PM","status": "On Time"
            },
            {
                "departure_time": "5:02 PM","status": "On Time"
            },
            {
                "departure_time": "5:09 PM","status": "On Time"
            },
            {
                "departure_time": "5:14 PM","status": "On Time"
            },
            {
                "departure_time": "5:21 PM","status": "On Time"
            },
            {
                "departure_time": "5:26 PM","status": "On Time"
            },
            {
                "departure_time": "5:30 PM","status": "On Time"
            },
            {
                "departure_time": "5:34 PM","status": "On Time"
            },
            {
                "departure_time": "5:38 PM","status": "On Time"
            },
            {
                "departure_time": "5:43 PM","status": "On Time"
            },
            {
                "departure_time": "5:48 PM","status": "On Time"
            },
            {
                "departure_time": "5:53 PM","status": "On Time"
            },
            {
                "departure_time": "5:58 PM","status": "On Time"
            },
            {
                "departure_time": "6:03 PM","status": "On Time"
            },
            {
                "departure_time": "6:08 PM","status": "On Time"
            },
            {
                "departure_time": "6:15 PM","status": "On Time"
            },
            {
                "departure_time": "6:21 PM","status": "On Time"
            },
            {
                "departure_time": "6:28 PM","status": "On Time"
            },
            {
                "departure_time": "6:33 PM","status": "On Time"
            },
            {
                "departure_time": "6:43 PM","status": "On Time"
            },
            {
                "departure_time": "6:49 PM","status": "On Time"
            },
            {
                "departure_time": "7:01 PM","status": "On Time"
            },
            {
                "departure_time": "7:12 PM","status": "On Time"
            },
            {
                "departure_time": "7:22 PM","status": "On Time"
            },
            {
                "departure_time": "7:35 PM","status": "On Time"
            },
            {
                "departure_time": "7:47 PM","status": "On Time"
            },
            {
                "departure_time": "7:59 PM","status": "On Time"
            },
            {
                "departure_time": "8:16 PM","status": "On Time"
            },
            {
                "departure_time": "8:36 PM","status": "On Time"
            },
            {
                "departure_time": "8:56 PM","status": "On Time"
            },
            {
                "departure_time": "9:16 PM","status": "On Time"
            },
            {
                "departure_time": "9:36 PM","status": "On Time"
            },
            {
                "departure_time": "9:56 PM","status": "On Time"
            },
            {
                "departure_time": "10:16 PM","status": "On Time"
            },
            {
                "departure_time": "10:36 PM","status": "On Time"
            },
            {
                "departure_time": "10:56 PM","status": "On Time"
            },
            {
                "departure_time": "11:16 PM","status": "On Time"
            },
            {
                "departure_time": "11:36 PM","status": "On Time"
            },
            {
                "departure_time": "11:56 PM","status": "On Time"
            },
            {
                "departure_time": "12:16 AM","status": "On Time"
            }
        ],
        "westBound": [
            {
                "departure_time": "12:10 AM","status": "On Time"
            },
            {
                "departure_time": "12:45 AM","status": "On Time"
            },
            {
                "departure_time": "1:30 AM","status": "On Time"
            },
            {
                "departure_time": "2:15 AM","status": "On Time"
            },
            {
                "departure_time": "3:00 AM","status": "On Time"
            },
            {
                "departure_time": "3:45 AM","status": "On Time"
            },
            {
                "departure_time": "4:30 AM","status": "On Time"
            },
            {
                "departure_time": "5:00 AM","status": "On Time"
            },
            {
                "departure_time": "5:15 AM","status": "On Time"
            },
            {
                "departure_time": "5:30 AM","status": "On Time"
            },
            {
                "departure_time": "5:45 AM","status": "On Time"
            },
            {
                "departure_time": "5:55 AM","status": "On Time"
            },
            {
                "departure_time": "6:08 AM","status": "On Time"
            },
            {
                "departure_time": "6:20 AM","status": "On Time"
            },
            {
                "departure_time": "6:30 AM","status": "On Time"
            },
            {
                "departure_time": "6:40 AM","status": "On Time"
            },
            {
                "departure_time": "6:50 AM","status": "On Time"
            },
            {
                "departure_time": "6:58 AM","status": "On Time"
            },
            {
                "departure_time": "7:03 AM","status": "On Time"
            },
            {
                "departure_time": "7:08 AM","status": "On Time"
            },
            {
                "departure_time": "7:12 AM","status": "On Time"
            },
            {
                "departure_time": "7:17 AM","status": "On Time"
            },
            {
                "departure_time": "7:22 AM","status": "On Time"
            },
            {
                "departure_time": "7:27 AM","status": "On Time"
            },
            {
                "departure_time": "7:32 AM","status": "On Time"
            },
            {
                "departure_time": "7:40 AM","status": "On Time"
            },
            {
                "departure_time": "7:48 AM","status": "On Time"
            },
            {
                "departure_time": "7:56 AM","status": "On Time"
            },
            {
                "departure_time": "8:04 AM","status": "On Time"
            },
            {
                "departure_time": "8:12 AM","status": "On Time"
            },
            {
                "departure_time": "8:20 AM","status": "On Time"
            },
            {
                "departure_time": "8:29 AM","status": "On Time"
            },
            {
                "departure_time": "8:38 AM","status": "On Time"
            },
            {
                "departure_time": "8:47 AM","status": "On Time"
            },
            {
                "departure_time": "8:55 AM","status": "On Time"
            },
            {
                "departure_time": "9:03 AM","status": "On Time"
            },
            {
                "departure_time": "9:12 AM","status": "On Time"
            },
            {
                "departure_time": "9:24 AM","status": "On Time"
            },
            {
                "departure_time": "9:36 AM","status": "On Time"
            },
            {
                "departure_time": "9:48 AM","status": "On Time"
            },
            {
                "departure_time": "10:00 AM","status": "On Time"
            },
            {
                "departure_time": "10:12 AM","status": "On Time"
            },
            {
                "departure_time": "10:24 AM","status": "On Time"
            },
            {
                "departure_time": "10:36 AM","status": "On Time"
            },
            {
                "departure_time": "10:48 AM","status": "On Time"
            },
            {
                "departure_time": "11:00 AM","status": "On Time"
            },
            {
                "departure_time": "11:12 AM","status": "On Time"
            },
            {
                "departure_time": "11:24 AM","status": "On Time"
            },
            {
                "departure_time": "11:36 AM","status": "On Time"
            },
            {
                "departure_time": "11:48 AM","status": "On Time"
            },
            {
                "departure_time": "12:00 PM","status": "On Time"
            },
            {
                "departure_time": "12:12 PM","status": "On Time"
            },
            {
                "departure_time": "12:24 PM","status": "On Time"
            },
            {
                "departure_time": "12:36 PM","status": "On Time"
            },
            {
                "departure_time": "12:48 PM","status": "On Time"
            },
            {
                "departure_time": "1:00 PM","status": "On Time"
            },
            {
                "departure_time": "1:12 PM","status": "On Time"
            },
            {
                "departure_time": "1:24 PM","status": "On Time"
            },
            {
                "departure_time": "1:36 PM","status": "On Time"
            },
            {
                "departure_time": "1:48 PM","status": "On Time"
            },
            {
                "departure_time": "2:00 PM","status": "On Time"
            },
            {
                "departure_time": "2:12 PM","status": "On Time"
            },
            {
                "departure_time": "2:24 PM","status": "On Time"
            },
            {
                "departure_time": "2:36 PM","status": "On Time"
            },
            {
                "departure_time": "2:48 PM","status": "On Time"
            },
            {
                "departure_time": "3:00 PM","status": "On Time"
            },
            {
                "departure_time": "3:10 PM","status": "On Time"
            },
            {
                "departure_time": "3:20 PM","status": "On Time"
            },
            {
                "departure_time": "3:30 PM","status": "On Time"
            },
            {
                "departure_time": "3:39 PM","status": "On Time"
            },
            {
                "departure_time": "3:51 PM","status": "On Time"
            },
            {
                "departure_time": "4:05 PM","status": "On Time"
            },
            {
                "departure_time": "4:12 PM","status": "On Time"
            },
            {
                "departure_time": "4:24 PM","status": "On Time"
            },
            {
                "departure_time": "4:33 PM","status": "On Time"
            },
            {
                "departure_time": "4:45 PM","status": "On Time"
            },
            {
                "departure_time": "4:55 PM","status": "On Time"
            },
            {
                "departure_time": "5:06 PM","status": "On Time"
            },
            {
                "departure_time": "5:18 PM","status": "On Time"
            },
            {
                "departure_time": "5:31 PM","status": "On Time"
            },
            {
                "departure_time": "5:43 PM","status": "On Time"
            },
            {
                "departure_time": "5:50 PM","status": "On Time"
            },
            {
                "departure_time": "6:02 PM","status": "On Time"
            },
            {
                "departure_time": "6:12 PM","status": "On Time"
            },
            {
                "departure_time": "6:24 PM","status": "On Time"
            },
            {
                "departure_time": "6:37 PM","status": "On Time"
            },
            {
                "departure_time": "6:48 PM","status": "On Time"
            },
            {
                "departure_time": "7:00 PM","status": "On Time"
            },
            {
                "departure_time": "7:18 PM","status": "On Time"
            },
            {
                "departure_time": "7:30 PM","status": "On Time"
            },
            {
                "departure_time": "7:50 PM","status": "On Time"
            },
            {
                "departure_time": "8:10 PM","status": "On Time"
            },
            {
                "departure_time": "8:30 PM","status": "On Time"
            },
            {
                "departure_time": "8:50 PM","status": "On Time"
            },
            {
                "departure_time": "9:10 PM","status": "On Time"
            },
            {
                "departure_time": "9:30 PM","status": "On Time"
            },
            {
                "departure_time": "9:50 PM","status": "On Time"
            },
            {
                "departure_time": "10:10 PM","status": "On Time"
            },
            {
                "departure_time": "10:30 PM","status": "On Time"
            },
            {
                "departure_time": "10:50 PM","status": "On Time"
            },
            {
                "departure_time": "11:10 PM","status": "On Time"
            },
            {
                "departure_time": "11:30 PM","status": "On Time"
            }
        ]
    }, {
        "title": "Westmont",
        "eastBound": [
            {
                "departure_time": "12:22 AM","status": "On Time"
            },
            {
                "departure_time": "1:00 AM","status": "On Time"
            },
            {
                "departure_time": "1:45 AM","status": "On Time"
            },
            {
                "departure_time": "2:30 AM","status": "On Time"
            },
            {
                "departure_time": "3:15 AM","status": "On Time"
            },
            {
                "departure_time": "4:00 AM","status": "On Time"
            },
            {
                "departure_time": "4:45 AM","status": "On Time"
            },
            {
                "departure_time": "5:32 AM","status": "On Time"
            },
            {
                "departure_time": "5:47 AM","status": "On Time"
            },
            {
                "departure_time": "6:02 AM","status": "On Time"
            },
            {
                "departure_time": "6:17 AM","status": "On Time"
            },
            {
                "departure_time": "6:32 AM","status": "On Time"
            },
            {
                "departure_time": "6:47 AM","status": "On Time"
            },
            {
                "departure_time": "6:57 AM","status": "On Time"
            },
            {
                "departure_time": "7:09 AM","status": "On Time"
            },
            {
                "departure_time": "7:17 AM","status": "On Time"
            },
            {
                "departure_time": "7:27 AM","status": "On Time"
            },
            {
                "departure_time": "7:37 AM","status": "On Time"
            },
            {
                "departure_time": "7:51 AM","status": "On Time"
            },
            {
                "departure_time": "8:04 AM","status": "On Time"
            },
            {
                "departure_time": "8:14 AM","status": "On Time"
            },
            {
                "departure_time": "8:33 AM","status": "On Time"
            },
            {
                "departure_time": "8:38 AM","status": "On Time"
            },
            {
                "departure_time": "8:49 AM","status": "On Time"
            },
            {
                "departure_time": "8:57 AM","status": "On Time"
            },
            {
                "departure_time": "9:10 AM","status": "On Time"
            },
            {
                "departure_time": "9:25 AM","status": "On Time"
            },
            {
                "departure_time": "9:41 AM","status": "On Time"
            },
            {
                "departure_time": "9:50 AM","status": "On Time"
            },
            {
                "departure_time": "10:01 AM","status": "On Time"
            },
            {
                "departure_time": "10:13 AM","status": "On Time"
            },
            {
                "departure_time": "10:25 AM","status": "On Time"
            },
            {
                "departure_time": "10:37 AM","status": "On Time"
            },
            {
                "departure_time": "10:49 AM","status": "On Time"
            },
            {
                "departure_time": "11:01 AM","status": "On Time"
            },
            {
                "departure_time": "11:13 AM","status": "On Time"
            },
            {
                "departure_time": "11:25 AM","status": "On Time"
            },
            {
                "departure_time": "11:37 AM","status": "On Time"
            },
            {
                "departure_time": "11:49 AM","status": "On Time"
            },
            {
                "departure_time": "12:01 PM","status": "On Time"
            },
            {
                "departure_time": "12:13 PM","status": "On Time"
            },
            {
                "departure_time": "12:25 PM","status": "On Time"
            },
            {
                "departure_time": "12:37 PM","status": "On Time"
            },
            {
                "departure_time": "12:49 PM","status": "On Time"
            },
            {
                "departure_time": "1:01 PM","status": "On Time"
            },
            {
                "departure_time": "1:13 PM","status": "On Time"
            },
            {
                "departure_time": "1:25 PM","status": "On Time"
            },
            {
                "departure_time": "1:37 PM","status": "On Time"
            },
            {
                "departure_time": "1:49 PM","status": "On Time"
            },
            {
                "departure_time": "2:01 PM","status": "On Time"
            },
            {
                "departure_time": "2:13 PM","status": "On Time"
            },
            {
                "departure_time": "2:25 PM","status": "On Time"
            },
            {
                "departure_time": "2:37 PM","status": "On Time"
            },
            {
                "departure_time": "2:49 PM","status": "On Time"
            },
            {
                "departure_time": "3:01 PM","status": "On Time"
            },
            {
                "departure_time": "3:13 PM","status": "On Time"
            },
            {
                "departure_time": "3:25 PM","status": "On Time"
            },
            {
                "departure_time": "3:37 PM","status": "On Time"
            },
            {
                "departure_time": "3:47 PM","status": "On Time"
            },
            {
                "departure_time": "3:57 PM","status": "On Time"
            },
            {
                "departure_time": "4:07 PM","status": "On Time"
            },
            {
                "departure_time": "4:17 PM","status": "On Time"
            },
            {
                "departure_time": "4:25 PM","status": "On Time"
            },
            {
                "departure_time": "4:29 PM","status": "On Time"
            },
            {
                "departure_time": "4:37 PM","status": "On Time"
            },
            {
                "departure_time": "4:43 PM","status": "On Time"
            },
            {
                "departure_time": "4:51 PM","status": "On Time"
            },
            {
                "departure_time": "4:58 PM","status": "On Time"
            },
            {
                "departure_time": "5:03 PM","status": "On Time"
            },
            {
                "departure_time": "5:10 PM","status": "On Time"
            },
            {
                "departure_time": "5:15 PM","status": "On Time"
            },
            {
                "departure_time": "5:19 PM","status": "On Time"
            },
            {
                "departure_time": "5:23 PM","status": "On Time"
            },
            {
                "departure_time": "5:27 PM","status": "On Time"
            },
            {
                "departure_time": "5:32 PM","status": "On Time"
            },
            {
                "departure_time": "5:37 PM","status": "On Time"
            },
            {
                "departure_time": "5:42 PM","status": "On Time"
            },
            {
                "departure_time": "5:47 PM","status": "On Time"
            },
            {
                "departure_time": "5:52 PM","status": "On Time"
            },
            {
                "departure_time": "5:57 PM","status": "On Time"
            },
            {
                "departure_time": "6:04 PM","status": "On Time"
            },
            {
                "departure_time": "6:10 PM","status": "On Time"
            },
            {
                "departure_time": "6:17 PM","status": "On Time"
            },
            {
                "departure_time": "6:22 PM","status": "On Time"
            },
            {
                "departure_time": "6:32 PM","status": "On Time"
            },
            {
                "departure_time": "6:38 PM","status": "On Time"
            },
            {
                "departure_time": "6:50 PM","status": "On Time"
            },
            {
                "departure_time": "7:01 PM","status": "On Time"
            },
            {
                "departure_time": "7:12 PM","status": "On Time"
            },
            {
                "departure_time": "7:25 PM","status": "On Time"
            },
            {
                "departure_time": "7:37 PM","status": "On Time"
            },
            {
                "departure_time": "7:49 PM","status": "On Time"
            },
            {
                "departure_time": "8:06 PM","status": "On Time"
            },
            {
                "departure_time": "8:26 PM","status": "On Time"
            },
            {
                "departure_time": "8:46 PM","status": "On Time"
            },
            {
                "departure_time": "9:06 PM","status": "On Time"
            },
            {
                "departure_time": "9:26 PM","status": "On Time"
            },
            {
                "departure_time": "9:46 PM","status": "On Time"
            },
            {
                "departure_time": "10:06 PM","status": "On Time"
            },
            {
                "departure_time": "10:26 PM","status": "On Time"
            },
            {
                "departure_time": "10:46 PM","status": "On Time"
            },
            {
                "departure_time": "11:06 PM","status": "On Time"
            },
            {
                "departure_time": "11:26 PM","status": "On Time"
            },
            {
                "departure_time": "11:46 PM","status": "On Time"
            },
            {
                "departure_time": "12:06 AM","status": "On Time"
            }
        ],
        "westBound": [
            {
                "departure_time": "12:17 AM","status": "On Time"
            },
            {
                "departure_time": "12:53 AM","status": "On Time"
            },
            {
                "departure_time": "1:38 AM","status": "On Time"
            },
            {
                "departure_time": "2:23 AM","status": "On Time"
            },
            {
                "departure_time": "3:08 AM","status": "On Time"
            },
            {
                "departure_time": "3:53 AM","status": "On Time"
            },
            {
                "departure_time": "4:38 AM","status": "On Time"
            },
            {
                "departure_time": "5:08 AM","status": "On Time"
            },
            {
                "departure_time": "5:23 AM","status": "On Time"
            },
            {
                "departure_time": "5:38 AM","status": "On Time"
            },
            {
                "departure_time": "5:53 AM","status": "On Time"
            },
            {
                "departure_time": "6:03 AM","status": "On Time"
            },
            {
                "departure_time": "6:16 AM","status": "On Time"
            },
            {
                "departure_time": "6:28 AM","status": "On Time"
            },
            {
                "departure_time": "6:38 AM","status": "On Time"
            },
            {
                "departure_time": "6:48 AM","status": "On Time"
            },
            {
                "departure_time": "6:58 AM","status": "On Time"
            },
            {
                "departure_time": "7:06 AM","status": "On Time"
            },
            {
                "departure_time": "7:11 AM","status": "On Time"
            },
            {
                "departure_time": "7:16 AM","status": "On Time"
            },
            {
                "departure_time": "7:20 AM","status": "On Time"
            },
            {
                "departure_time": "7:25 AM","status": "On Time"
            },
            {
                "departure_time": "7:30 AM","status": "On Time"
            },
            {
                "departure_time": "7:35 AM","status": "On Time"
            },
            {
                "departure_time": "7:40 AM","status": "On Time"
            },
            {
                "departure_time": "7:48 AM","status": "On Time"
            },
            {
                "departure_time": "8:00 AM","status": "On Time"
            },
            {
                "departure_time": "8:08 AM","status": "On Time"
            },
            {
                "departure_time": "8:16 AM","status": "On Time"
            },
            {
                "departure_time": "8:23 AM","status": "On Time"
            },
            {
                "departure_time": "8:32 AM","status": "On Time"
            },
            {
                "departure_time": "8:37 AM","status": "On Time"
            },
            {
                "departure_time": "8:46 AM","status": "On Time"
            },
            {
                "departure_time": "8:55 AM","status": "On Time"
            },
            {
                "departure_time": "9:03 AM","status": "On Time"
            },
            {
                "departure_time": "9:11 AM","status": "On Time"
            },
            {
                "departure_time": "9:20 AM","status": "On Time"
            },
            {
                "departure_time": "9:32 AM","status": "On Time"
            },
            {
                "departure_time": "9:44 AM","status": "On Time"
            },
            {
                "departure_time": "9:56 AM","status": "On Time"
            },
            {
                "departure_time": "10:08 AM","status": "On Time"
            },
            {
                "departure_time": "10:20 AM","status": "On Time"
            },
            {
                "departure_time": "10:32 AM","status": "On Time"
            },
            {
                "departure_time": "10:44 AM","status": "On Time"
            },
            {
                "departure_time": "10:56 AM","status": "On Time"
            },
            {
                "departure_time": "11:08 AM","status": "On Time"
            },
            {
                "departure_time": "11:20 AM","status": "On Time"
            },
            {
                "departure_time": "11:32 AM","status": "On Time"
            },
            {
                "departure_time": "11:44 AM","status": "On Time"
            },
            {
                "departure_time": "11:56 AM","status": "On Time"
            },
            {
                "departure_time": "12:08 PM","status": "On Time"
            },
            {
                "departure_time": "12:20 PM","status": "On Time"
            },
            {
                "departure_time": "12:32 PM","status": "On Time"
            },
            {
                "departure_time": "12:44 PM","status": "On Time"
            },
            {
                "departure_time": "12:56 PM","status": "On Time"
            },
            {
                "departure_time": "1:08 PM","status": "On Time"
            },
            {
                "departure_time": "1:20 PM","status": "On Time"
            },
            {
                "departure_time": "1:32 PM","status": "On Time"
            },
            {
                "departure_time": "1:44 PM","status": "On Time"
            },
            {
                "departure_time": "1:56 PM","status": "On Time"
            },
            {
                "departure_time": "2:08 PM","status": "On Time"
            },
            {
                "departure_time": "2:20 PM","status": "On Time"
            },
            {
                "departure_time": "2:32 PM","status": "On Time"
            },
            {
                "departure_time": "2:44 PM","status": "On Time"
            },
            {
                "departure_time": "2:56 PM","status": "On Time"
            },
            {
                "departure_time": "3:08 PM","status": "On Time"
            },
            {
                "departure_time": "3:18 PM","status": "On Time"
            },
            {
                "departure_time": "3:28 PM","status": "On Time"
            },
            {
                "departure_time": "3:38 PM","status": "On Time"
            },
            {
                "departure_time": "3:47 PM","status": "On Time"
            },
            {
                "departure_time": "3:59 PM","status": "On Time"
            },
            {
                "departure_time": "4:13 PM","status": "On Time"
            },
            {
                "departure_time": "4:20 PM","status": "On Time"
            },
            {
                "departure_time": "4:32 PM","status": "On Time"
            },
            {
                "departure_time": "4:41 PM","status": "On Time"
            },
            {
                "departure_time": "4:53 PM","status": "On Time"
            },
            {
                "departure_time": "5:03 PM","status": "On Time"
            },
            {
                "departure_time": "5:14 PM","status": "On Time"
            },
            {
                "departure_time": "5:26 PM","status": "On Time"
            },
            {
                "departure_time": "5:39 PM","status": "On Time"
            },
            {
                "departure_time": "5:51 PM","status": "On Time"
            },
            {
                "departure_time": "5:58 PM","status": "On Time"
            },
            {
                "departure_time": "6:10 PM","status": "On Time"
            },
            {
                "departure_time": "6:20 PM","status": "On Time"
            },
            {
                "departure_time": "6:32 PM","status": "On Time"
            },
            {
                "departure_time": "6:45 PM","status": "On Time"
            },
            {
                "departure_time": "6:56 PM","status": "On Time"
            },
            {
                "departure_time": "7:08 PM","status": "On Time"
            },
            {
                "departure_time": "7:26 PM","status": "On Time"
            },
            {
                "departure_time": "7:38 PM","status": "On Time"
            },
            {
                "departure_time": "7:58 PM","status": "On Time"
            },
            {
                "departure_time": "8:18 PM","status": "On Time"
            },
            {
                "departure_time": "8:38 PM","status": "On Time"
            },
            {
                "departure_time": "8:58 PM","status": "On Time"
            },
            {
                "departure_time": "9:18 PM","status": "On Time"
            },
            {
                "departure_time": "9:38 PM","status": "On Time"
            },
            {
                "departure_time": "9:58 PM","status": "On Time"
            },
            {
                "departure_time": "10:18 PM","status": "On Time"
            },
            {
                "departure_time": "10:38 PM","status": "On Time"
            },
            {
                "departure_time": "10:58 PM","status": "On Time"
            },
            {
                "departure_time": "11:18 PM","status": "On Time"
            },
            {
                "departure_time": "11:38 PM","status": "On Time"
            }
        ]
    }, {
        "title": "Woodcrest",
        "eastBound": [
            {
                "departure_time": "12:27 AM","status": "On Time"
            },
            {
                "departure_time": "1:05 AM","status": "On Time"
            },
            {
                "departure_time": "1:50 AM","status": "On Time"
            },
            {
                "departure_time": "2:35 AM","status": "On Time"
            },
            {
                "departure_time": "3:20 AM","status": "On Time"
            },
            {
                "departure_time": "4:05 AM","status": "On Time"
            },
            {
                "departure_time": "4:50 AM","status": "On Time"
            },
            {
                "departure_time": "5:37 AM","status": "On Time"
            },
            {
                "departure_time": "5:52 AM","status": "On Time"
            },
            {
                "departure_time": "6:07 AM","status": "On Time"
            },
            {
                "departure_time": "6:22 AM","status": "On Time"
            },
            {
                "departure_time": "6:37 AM","status": "On Time"
            },
            {
                "departure_time": "6:52 AM","status": "On Time"
            },
            {
                "departure_time": "7:02 AM","status": "On Time"
            },
            {
                "departure_time": "7:14 AM","status": "On Time"
            },
            {
                "departure_time": "7:22 AM","status": "On Time"
            },
            {
                "departure_time": "7:32 AM","status": "On Time"
            },
            {
                "departure_time": "7:42 AM","status": "On Time"
            },
            {
                "departure_time": "7:56 AM","status": "On Time"
            },
            {
                "departure_time": "8:09 AM","status": "On Time"
            },
            {
                "departure_time": "8:19 AM","status": "On Time"
            },
            {
                "departure_time": "8:38 AM","status": "On Time"
            },
            {
                "departure_time": "8:43 AM","status": "On Time"
            },
            {
                "departure_time": "8:54 AM","status": "On Time"
            },
            {
                "departure_time": "9:02 AM","status": "On Time"
            },
            {
                "departure_time": "9:15 AM","status": "On Time"
            },
            {
                "departure_time": "9:30 AM","status": "On Time"
            },
            {
                "departure_time": "9:46 AM","status": "On Time"
            },
            {
                "departure_time": "9:55 AM","status": "On Time"
            },
            {
                "departure_time": "10:06 AM","status": "On Time"
            },
            {
                "departure_time": "10:18 AM","status": "On Time"
            },
            {
                "departure_time": "10:30 AM","status": "On Time"
            },
            {
                "departure_time": "10:42 AM","status": "On Time"
            },
            {
                "departure_time": "10:54 AM","status": "On Time"
            },
            {
                "departure_time": "11:06 AM","status": "On Time"
            },
            {
                "departure_time": "11:18 AM","status": "On Time"
            },
            {
                "departure_time": "11:30 AM","status": "On Time"
            },
            {
                "departure_time": "11:42 AM","status": "On Time"
            },
            {
                "departure_time": "11:54 AM","status": "On Time"
            },
            {
                "departure_time": "12:06 PM","status": "On Time"
            },
            {
                "departure_time": "12:18 PM","status": "On Time"
            },
            {
                "departure_time": "12:30 PM","status": "On Time"
            },
            {
                "departure_time": "12:42 PM","status": "On Time"
            },
            {
                "departure_time": "12:54 PM","status": "On Time"
            },
            {
                "departure_time": "1:06 PM","status": "On Time"
            },
            {
                "departure_time": "1:18 PM","status": "On Time"
            },
            {
                "departure_time": "1:30 PM","status": "On Time"
            },
            {
                "departure_time": "1:42 PM","status": "On Time"
            },
            {
                "departure_time": "1:54 PM","status": "On Time"
            },
            {
                "departure_time": "2:06 PM","status": "On Time"
            },
            {
                "departure_time": "2:18 PM","status": "On Time"
            },
            {
                "departure_time": "2:30 PM","status": "On Time"
            },
            {
                "departure_time": "2:42 PM","status": "On Time"
            },
            {
                "departure_time": "2:54 PM","status": "On Time"
            },
            {
                "departure_time": "3:06 PM","status": "On Time"
            },
            {
                "departure_time": "3:18 PM","status": "On Time"
            },
            {
                "departure_time": "3:31 PM","status": "On Time"
            },
            {
                "departure_time": "3:43 PM","status": "On Time"
            },
            {
                "departure_time": "3:53 PM","status": "On Time"
            },
            {
                "departure_time": "4:03 PM","status": "On Time"
            },
            {
                "departure_time": "4:13 PM","status": "On Time"
            },
            {
                "departure_time": "4:23 PM","status": "On Time"
            },
            {
                "departure_time": "4:31 PM","status": "On Time"
            },
            {
                "departure_time": "4:35 PM","status": "On Time"
            },
            {
                "departure_time": "4:43 PM","status": "On Time"
            },
            {
                "departure_time": "4:49 PM","status": "On Time"
            },
            {
                "departure_time": "4:57 PM","status": "On Time"
            },
            {
                "departure_time": "5:04 PM","status": "On Time"
            },
            {
                "departure_time": "5:09 PM","status": "On Time"
            },
            {
                "departure_time": "5:16 PM","status": "On Time"
            },
            {
                "departure_time": "5:21 PM","status": "On Time"
            },
            {
                "departure_time": "5:25 PM","status": "On Time"
            },
            {
                "departure_time": "5:29 PM","status": "On Time"
            },
            {
                "departure_time": "5:33 PM","status": "On Time"
            },
            {
                "departure_time": "5:38 PM","status": "On Time"
            },
            {
                "departure_time": "5:43 PM","status": "On Time"
            },
            {
                "departure_time": "5:48 PM","status": "On Time"
            },
            {
                "departure_time": "5:53 PM","status": "On Time"
            },
            {
                "departure_time": "5:58 PM","status": "On Time"
            },
            {
                "departure_time": "6:03 PM","status": "On Time"
            },
            {
                "departure_time": "6:10 PM","status": "On Time"
            },
            {
                "departure_time": "6:16 PM","status": "On Time"
            },
            {
                "departure_time": "6:23 PM","status": "On Time"
            },
            {
                "departure_time": "6:28 PM","status": "On Time"
            },
            {
                "departure_time": "6:38 PM","status": "On Time"
            },
            {
                "departure_time": "6:44 PM","status": "On Time"
            },
            {
                "departure_time": "6:56 PM","status": "On Time"
            },
            {
                "departure_time": "7:07 PM","status": "On Time"
            },
            {
                "departure_time": "7:17 PM","status": "On Time"
            },
            {
                "departure_time": "7:30 PM","status": "On Time"
            },
            {
                "departure_time": "7:42 PM","status": "On Time"
            },
            {
                "departure_time": "7:54 PM","status": "On Time"
            },
            {
                "departure_time": "8:11 PM","status": "On Time"
            },
            {
                "departure_time": "8:31 PM","status": "On Time"
            },
            {
                "departure_time": "8:51 PM","status": "On Time"
            },
            {
                "departure_time": "9:11 PM","status": "On Time"
            },
            {
                "departure_time": "9:31 PM","status": "On Time"
            },
            {
                "departure_time": "9:51 PM","status": "On Time"
            },
            {
                "departure_time": "10:11 PM","status": "On Time"
            },
            {
                "departure_time": "10:31 PM","status": "On Time"
            },
            {
                "departure_time": "10:51 PM","status": "On Time"
            },
            {
                "departure_time": "11:11 PM","status": "On Time"
            },
            {
                "departure_time": "11:31 PM","status": "On Time"
            },
            {
                "departure_time": "11:51 PM","status": "On Time"
            },
            {
                "departure_time": "12:11 AM","status": "On Time"
            }
        ],
        "westBound": [
            {
                "departure_time": "12:12 AM","status": "On Time"
            },
            {
                "departure_time": "12:48 AM","status": "On Time"
            },
            {
                "departure_time": "1:33 AM","status": "On Time"
            },
            {
                "departure_time": "2:18 AM","status": "On Time"
            },
            {
                "departure_time": "3:03 AM","status": "On Time"
            },
            {
                "departure_time": "3:48 AM","status": "On Time"
            },
            {
                "departure_time": "4:33 AM","status": "On Time"
            },
            {
                "departure_time": "5:03 AM","status": "On Time"
            },
            {
                "departure_time": "5:18 AM","status": "On Time"
            },
            {
                "departure_time": "5:33 AM","status": "On Time"
            },
            {
                "departure_time": "5:48 AM","status": "On Time"
            },
            {
                "departure_time": "5:58 AM","status": "On Time"
            },
            {
                "departure_time": "6:11 AM","status": "On Time"
            },
            {
                "departure_time": "6:23 AM","status": "On Time"
            },
            {
                "departure_time": "6:33 AM","status": "On Time"
            },
            {
                "departure_time": "6:43 AM","status": "On Time"
            },
            {
                "departure_time": "6:53 AM","status": "On Time"
            },
            {
                "departure_time": "7:01 AM","status": "On Time"
            },
            {
                "departure_time": "7:06 AM","status": "On Time"
            },
            {
                "departure_time": "7:11 AM","status": "On Time"
            },
            {
                "departure_time": "7:15 AM","status": "On Time"
            },
            {
                "departure_time": "7:20 AM","status": "On Time"
            },
            {
                "departure_time": "7:25 AM","status": "On Time"
            },
            {
                "departure_time": "7:30 AM","status": "On Time"
            },
            {
                "departure_time": "7:35 AM","status": "On Time"
            },
            {
                "departure_time": "7:43 AM","status": "On Time"
            },
            {
                "departure_time": "7:51 AM","status": "On Time"
            },
            {
                "departure_time": "7:55 AM","status": "On Time"
            },
            {
                "departure_time": "7:59 AM","status": "On Time"
            },
            {
                "departure_time": "8:03 AM","status": "On Time"
            },
            {
                "departure_time": "8:07 AM","status": "On Time"
            },
            {
                "departure_time": "8:11 AM","status": "On Time"
            },
            {
                "departure_time": "8:15 AM","status": "On Time"
            },
            {
                "departure_time": "8:18 AM","status": "On Time"
            },
            {
                "departure_time": "8:23 AM","status": "On Time"
            },
            {
                "departure_time": "8:27 AM","status": "On Time"
            },
            {
                "departure_time": "8:32 AM","status": "On Time"
            },
            {
                "departure_time": "8:41 AM","status": "On Time"
            },
            {
                "departure_time": "8:50 AM","status": "On Time"
            },
            {
                "departure_time": "8:58 AM","status": "On Time"
            },
            {
                "departure_time": "9:06 AM","status": "On Time"
            },
            {
                "departure_time": "9:15 AM","status": "On Time"
            },
            {
                "departure_time": "9:27 AM","status": "On Time"
            },
            {
                "departure_time": "9:39 AM","status": "On Time"
            },
            {
                "departure_time": "9:51 AM","status": "On Time"
            },
            {
                "departure_time": "10:03 AM","status": "On Time"
            },
            {
                "departure_time": "10:15 AM","status": "On Time"
            },
            {
                "departure_time": "10:27 AM","status": "On Time"
            },
            {
                "departure_time": "10:39 AM","status": "On Time"
            },
            {
                "departure_time": "10:51 AM","status": "On Time"
            },
            {
                "departure_time": "11:03 AM","status": "On Time"
            },
            {
                "departure_time": "11:15 AM","status": "On Time"
            },
            {
                "departure_time": "11:27 AM","status": "On Time"
            },
            {
                "departure_time": "11:39 AM","status": "On Time"
            },
            {
                "departure_time": "11:51 AM","status": "On Time"
            },
            {
                "departure_time": "12:03 PM","status": "On Time"
            },
            {
                "departure_time": "12:15 PM","status": "On Time"
            },
            {
                "departure_time": "12:27 PM","status": "On Time"
            },
            {
                "departure_time": "12:39 PM","status": "On Time"
            },
            {
                "departure_time": "12:51 PM","status": "On Time"
            },
            {
                "departure_time": "1:03 PM","status": "On Time"
            },
            {
                "departure_time": "1:15 PM","status": "On Time"
            },
            {
                "departure_time": "1:27 PM","status": "On Time"
            },
            {
                "departure_time": "1:39 PM","status": "On Time"
            },
            {
                "departure_time": "1:51 PM","status": "On Time"
            },
            {
                "departure_time": "2:03 PM","status": "On Time"
            },
            {
                "departure_time": "2:15 PM","status": "On Time"
            },
            {
                "departure_time": "2:27 PM","status": "On Time"
            },
            {
                "departure_time": "2:39 PM","status": "On Time"
            },
            {
                "departure_time": "2:51 PM","status": "On Time"
            },
            {
                "departure_time": "3:03 PM","status": "On Time"
            },
            {
                "departure_time": "3:13 PM","status": "On Time"
            },
            {
                "departure_time": "3:23 PM","status": "On Time"
            },
            {
                "departure_time": "3:33 PM","status": "On Time"
            },
            {
                "departure_time": "3:42 PM","status": "On Time"
            },
            {
                "departure_time": "3:54 PM","status": "On Time"
            },
            {
                "departure_time": "4:08 PM","status": "On Time"
            },
            {
                "departure_time": "4:15 PM","status": "On Time"
            },
            {
                "departure_time": "4:27 PM","status": "On Time"
            },
            {
                "departure_time": "4:36 PM","status": "On Time"
            },
            {
                "departure_time": "4:48 PM","status": "On Time"
            },
            {
                "departure_time": "4:58 PM","status": "On Time"
            },
            {
                "departure_time": "5:09 PM","status": "On Time"
            },
            {
                "departure_time": "5:21 PM","status": "On Time"
            },
            {
                "departure_time": "5:34 PM","status": "On Time"
            },
            {
                "departure_time": "5:46 PM","status": "On Time"
            },
            {
                "departure_time": "5:53 PM","status": "On Time"
            },
            {
                "departure_time": "6:05 PM","status": "On Time"
            },
            {
                "departure_time": "6:15 PM","status": "On Time"
            },
            {
                "departure_time": "6:27 PM","status": "On Time"
            },
            {
                "departure_time": "6:40 PM","status": "On Time"
            },
            {
                "departure_time": "6:51 PM","status": "On Time"
            },
            {
                "departure_time": "7:03 PM","status": "On Time"
            },
            {
                "departure_time": "7:21 PM","status": "On Time"
            },
            {
                "departure_time": "7:33 PM","status": "On Time"
            },
            {
                "departure_time": "7:53 PM","status": "On Time"
            },
            {
                "departure_time": "8:13 PM","status": "On Time"
            },
            {
                "departure_time": "8:33 PM","status": "On Time"
            },
            {
                "departure_time": "8:53 PM","status": "On Time"
            },
            {
                "departure_time": "9:13 PM","status": "On Time"
            },
            {
                "departure_time": "9:33 PM","status": "On Time"
            },
            {
                "departure_time": "9:53 PM","status": "On Time"
            },
            {
                "departure_time": "10:13 PM","status": "On Time"
            },
            {
                "departure_time": "10:33 PM","status": "On Time"
            },
            {
                "departure_time": "10:53 PM","status": "On Time"
            },
            {
                "departure_time": "11:13 PM","status": "On Time"
            },
            {
                "departure_time": "11:33 PM","status": "On Time"
            }
        ]
    }]
    async createStation(data: Station) {
        this.test.forEach(element => {
            this.db.collection('stations').add(element);
        });
        return null;
    }

    /**
     * Get all boards owned by current user
     */
    geStations(station: string) {
        return this.db
            .collection<Station>('stations', ref => ref.where('title', '==', station)
            )
            .valueChanges({ idField: 'id' });
    }

    //   /**
    //    * Run a batch write to change the priority of each board for sorting
    //    */
    //   sortBoards(stations: Station[]) {
    //     const db = firebase.firestore();
    //     const batch = db.batch();
    //     const refs = boards.map(b => db.collection('boards').doc(b.id));
    //     refs.forEach((ref, idx) => batch.update(ref, { priority: idx }));
    //     batch.commit();
    //   }

    /**
     * Delete board
     */
    //   deleteBoard(boardId: string) {
    //     return this.db
    //       .collection('boards')
    //       .doc(boardId)
    //       .delete();
    //   }

    /**
     * Updates the tasks on board
     */
    //   updateTasks(boardId: string, tasks: Task[]) {
    //     return this.db
    //       .collection('boards')
    //       .doc(boardId)
    //       .update({ tasks });
    //   }

    /**
     * Remove a specifc task from the board
     */
    //   removeTask(boardId: string, task: Task) {
    //     return this.db
    //       .collection('boards')
    //       .doc(boardId)
    //       .update({
    //         tasks: firebase.firestore.FieldValue.arrayRemove(task)
    //       });
    //   }
}
