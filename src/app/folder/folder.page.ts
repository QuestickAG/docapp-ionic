import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalController} from "@ionic/angular";
import {DetailComponent} from "../detail/detail.component";
import {API} from "../Constants";
import axios from 'axios';
import {NavController} from "@ionic/angular";

@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
})


export class FolderPage implements OnInit {
    public folder: string;
    public themeList: any;
    public item: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private modalController: ModalController,
        private navCtrl: NavController

    ) {
        this.getThemes();
    }

    ngOnInit() {
        this.item = JSON.parse(localStorage.getItem('getWindow'))
        this.folder = this.item.name
    }


    async modalWindow(theme) {
        axios.get(API.themeList + `/${theme.id}`).then(res => {
            console.log(res.data);
            this.openModal(theme, res.data[0])

        })
    }

    openModal = async (theme, data) => {
      const modal = await this.modalController.create({
        component: DetailComponent,
        componentProps: {
          data: theme,
          detail: data,
            parent: this.folder
        }
      });
      await modal.present();
    }

    getThemes = () => {
        axios.get(API.themeList).then(res => {
            console.log(res.data)
            this.themeList = res.data

        })
    }

    goBack = () => {
        this.navCtrl.back()
    }

}
