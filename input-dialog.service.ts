import { Injectable } from '@angular/core';
import { ProviderService } from '../provider.service';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public alertController: AlertController, public dataService: ProviderService) { }


  async showPrompt(item?, index?) {
    const alert = document.createElement('ion-alert');
    alert.title = item ? 'Edit Item' : 'Add Item';
    alert.message = item ? 'Please edit item:' : 'Please add item:';

    alert.inputs = [
      {
        name: 'name',
        placeholder: 'Name',
        value: item ? item.name : null
      },
      {
        name: 'quantity',
        placeholder: 'Quantity',
        value: item ? item.quantity : null
      }
    ];
    alert.buttons = [{
      text: 'Cancel',
      handler: data => {
        console.log('Cancel clicked');
      }
    },
    {
      text: 'Save',
      handler: item => {
        console.log('Saved clicked', item);
        if (index !== undefined) {
          this.dataService.editItem(item, index);
        }
        else {
          this.dataService.addItem(item)
        }
      }
    },

    ];

    document.body.appendChild(alert);
    await alert.present();
  }

}
