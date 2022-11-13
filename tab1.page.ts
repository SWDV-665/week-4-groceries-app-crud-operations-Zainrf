import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ProviderService } from '../service/provider.service';
import { InputDialogService } from '../service/input-dialog/input-dialog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  [x: string]: any;

  title = "Grocery List";
  constructor(public NavController: NavController,public toastController: ToastController, 
    public alertController: AlertController, public dataService: ProviderService, public inputDialogService: InputDialogService) {}


  loadItems(){
    return this.dataService.getItems();
  }
  async removeItem(item, index) {
      console.log("Removing Item -", item, index);
      const toast = await this.toastController.create({
        message: 'Removing Item -' + index + "...",
        duration: 3000
      });
       await toast.present();
       this.dataService.removeItem(index);
    }

    async editItem(item, index) {
      console.log("Edit Item -", item, index);
      const toast = await this.toastController.create({
        message: 'Editing Item -' + index + "...",
        duration: 3000
      });
       await toast.present();
       this.inputDialogService.showPrompt(item, index);
    }


    addItem(){
      console.log("Adding Item");
      this.inputDialogService.showPrompt();
    }

  
}
