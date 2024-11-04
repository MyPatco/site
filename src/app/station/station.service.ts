import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
import { Station } from './station.model';

@Injectable({
    providedIn: 'root'
})
export class StationService {
    constructor() { } //private afAuth: AngularFireAuth, private db: AngularFirestore

    async createStation() {
        // this.test.forEach(element => {
        //     this.db.collection('stations').add(element);
        // });
        return null;
    }

    /**
     * Get all boards owned by current user
     */
    geStations(station: string) {
        // return this.db
        //     .collection<Station>('stations', ref => ref.where('title', '==', station)
        //     )
        //     .valueChanges({ idField: 'id' });
        return null;
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
