import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {API} from "../Constants";
import axios from 'axios'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  data;
  detail;
  parent;
  constructor(
      private modal:  ModalController

  ) {

  }




  ngOnInit() {
    console.log('modal passing data', this.detail);

  }


  closeIt = () => this.modal.dismiss()



}
