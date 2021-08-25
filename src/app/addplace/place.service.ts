import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Place } from './place.model';
import { take, map, delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      '1',
      'Taj Mahal',
      'Seven wonders in the world',
      'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
      232
    ),
    new Place(
      '2',
      'Nayagra',
      'wer',
      'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
      232
    ),
    new Place(
      '3',
      'India',
      'ewr',
      'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
      232
    ),
  ]);
  constructor() { }
  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return this._places.asObservable();
  }
  getPlace(id: string) {
    return this.places.pipe(
      take(1),
      map((places) => ({ ...places.find((p) => p.id === id) }))
    );
  }

  addPlaceOb(d: any) {
    const newPlace = new Place(d.id, d.title, d.desc, d.img, d.price);
    console.log(newPlace);
   return this.places.pipe(
     take(1),
     delay(1000),
     tap(places => {
       // eslint-disable-next-line no-underscore-dangle
       this._places.next(places.concat(newPlace));
     })
   );
  }
}
