import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from './place.model';
import { PlaceService } from './place.service';

@Component({
  selector: 'app-addplace',
  templateUrl: './addplace.page.html',
  styleUrls: ['./addplace.page.scss'],
})
export class AddplacePage implements OnInit {
  loadedPlace: Place[] = [];
  private placesSub: Subscription;
  constructor(private placeService: PlaceService,
    private loadingCtrl: LoadingController,
    private route: Router) { }

  ngOnInit() {
    this.placesSub = this.placeService.places.subscribe(places => {
      this.loadedPlace = places;
    });
  }
  addPlace() {
    this.loadingCtrl.create({
      message: 'Creating dummy place...'
    }).then(loadingEl => {
      loadingEl.present();
      const d = {
        id: Math.random().toString(),
        title: 'dummy',
        desc: 'desc',
        img: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
        price: 444,
      };
      this.placeService.addPlaceOb(d).subscribe(() =>{
        loadingEl.dismiss();
        this.route.navigate(['/addplace']);
      });
    });
  }
  ngOnDesctroy(){
    if(this.placesSub){
      this.placesSub.unsubscribe();
    }
  }
}
