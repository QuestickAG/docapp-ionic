import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {API} from "../Constants";
import {DetailComponent} from "../detail/detail.component";
import {ActivatedRoute, Router} from "@angular/router";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-category-block',
  templateUrl: './category-block.page.html',
  styleUrls: ['./category-block.page.scss'],
})
export class CategoryBlockPage implements OnInit {
  public block: string;
  public categoryBlock;
  public category;

  constructor(
      private activatedRoute: ActivatedRoute,
      private modalController: ModalController,
      private router: Router
  ) {
    this.getData();
    this.category = JSON.parse(localStorage.getItem('course'))
  }


  getData = () => {
    axios.get(API.categoryBlock).then(res => {
      console.log('get data ', res.data)
      if (res.data.length) {
        this.categoryBlock = res.data
      }
    })
  }

  ngOnInit() {
    this.block = this.activatedRoute.snapshot.paramMap.get('id');
  }


  async modalWindow() {
    const modal = await this.modalController.create({
      component: DetailComponent
    });
    await  modal.present();
  }

  openTheme(val) {
    localStorage.setItem('getWindow', JSON.stringify(val))
    this.router.navigateByUrl("/folder/"+val.id)
  }

}
