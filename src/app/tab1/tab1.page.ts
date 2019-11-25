import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";
import {Post} from "../models/post";
import {ActivatedRoute, Router} from "@angular/router";
import {Vibration} from "@ionic-native/vibration/ngx";
import {AlertController} from "@ionic/angular";
import {json} from "@angular-devkit/core";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  posts: Post[];

  constructor(
      private postService: PostService,
      private router: Router,
      private activatedRout: ActivatedRoute,
      private vibration: Vibration,
      private AlertController: AlertController,
  ) {}

  ngOnInit() {
    this.activatedRout.queryParamMap.subscribe((res: any)=> {
      this.getPost(res.params);
    })
  }

  getPost(query: {}) {
    this.postService.getPosts(query).subscribe(res => {
      this.posts = res;
      console.log(res);
    })
  }

  vibrate() {
    this.vibration.vibrate([1000, 1000, 3000, 1000, 5000])
  }

  async presentAlertConfirm() {
    const alert = await this.AlertController.create({
      message: 'Would you like to see photos?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigate(['tabs/tab3'])
          }
        }
      ]
    });
    await alert.present();
  }
}


