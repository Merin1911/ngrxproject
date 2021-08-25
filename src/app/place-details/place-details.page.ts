import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PlaceService } from '../addplace/place.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
  place: { id: string; title: string; description: string; imgUrl: string; price: number};

  constructor(  private aRoute: ActivatedRoute,
    private placeService: PlaceService,private loadingCtrl: LoadingController,
    private route: Router) { }

  ngOnInit() {
    this.aRoute.paramMap.subscribe(paramMap =>{
      // this.placeid = this.placeService.getPlace(paramMap.get('placeId'));
      this.placeService.getPlace(paramMap.get('placeId')).subscribe(placeDetail => {
        this.place = placeDetail;
      });
      console.log(this.place);
    });
  }
  addPlace() {
    this.loadingCtrl.create({
      message: 'Creating dummy place...'
    }).then(loadingEl => {
      loadingEl.present();
      const d = {
        id: Math.random().toString(),
        title: 'dummy 2',
        desc: 'desc 2',
        img: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
        price: 444,
      };
      this.placeService.addPlaceOb(d).subscribe(() =>{
        loadingEl.dismiss();
        this.route.navigate(['/addplace']);
      });
    });
  }
}
