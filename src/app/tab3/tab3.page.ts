import {Component, OnInit} from '@angular/core';
import {Photo} from "../models/photo";
import {PhotosService} from "../services/photos.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
photos: Photo[];

  constructor(
      private PhotosService: PhotosService,
      private router: Router,
      private activatedRout: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRout.queryParamMap.subscribe((res: any)=> {
      this.getPhoto(res.params);
    })
  }

  getPhoto(query: {}) {
    this.PhotosService.getPhotos(query).subscribe(res => {
      this.photos = res;
      console.log(res);
    })
  }
}
