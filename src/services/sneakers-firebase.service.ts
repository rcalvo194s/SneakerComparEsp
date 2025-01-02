import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Sneaker } from '../app/models/sneaker.model';

@Injectable({
  providedIn: 'root'
})
export class SneakersFirebaseService {

  constructor(private firestore: Firestore) {}

  getSneakers(): Observable<Sneaker[]> {
    const sneakersCollection = collection(this.firestore, 'sneakers');
    return collectionData(sneakersCollection);
  }

  getSneakerById(sneakerId: string): Observable<Sneaker> {
    const sneakersCollection = collection(this.firestore, 'sneakers');
    const sneakersQuery = query(sneakersCollection, where('id', '==', sneakerId));
    return collectionData(sneakersQuery, { id: 'id' }).pipe(
      map((sneakers: Sneaker[]) => sneakers[0])
    );
  }

  createSneaker(sneaker: Sneaker): Promise<any> {
    const sneakerDocument = doc(this.firestore, `sneakers/${sneaker.id}`);
    return setDoc(sneakerDocument, sneaker);
  }
  
  editSneaker(sneaker: Sneaker): Promise<void> { 
    const sneakerDoc = doc(this.firestore, `sneakers/${sneaker.id}`);
    return updateDoc(sneakerDoc, { ...sneaker });
  }

  deleteSneaker(id: string): Promise<void> {
    const sneakerDoc = doc(this.firestore, `sneakers/${id}`);
    return deleteDoc(sneakerDoc);
  }
}
