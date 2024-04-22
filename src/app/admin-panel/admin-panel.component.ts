import { Component } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {
  contactDataArray: any;
  searchText:any;
  // notificationMessage: string = '';
  
  constructor(private contact_data: ApiServicesService,private notificationService:NotificationService) {
    contact_data.getcontactdata().subscribe((data: any) => {
      this.contactDataArray = data;
      // this.contactDataArray = this.contactDataArray;
      console.log(this.contactDataArray)
    });
  }
  publishNotification(message:string) {
    localStorage.setItem('message', message);
  }
}
