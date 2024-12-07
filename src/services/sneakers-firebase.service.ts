import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SneakersFirebaseService {

  constructor(private firestore: Firestore) {}

  getSneakers(): Observable<any[]> {
    const sneakersCollection = collection(this.firestore, 'sneakers');
    return collectionData(sneakersCollection);
  }
}
