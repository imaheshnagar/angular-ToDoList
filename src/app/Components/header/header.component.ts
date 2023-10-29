import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/Services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  

  
  toggleButton() {
    console.log("toggled");
    }

    ngOnDestroy() {
      // Unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
    }
 
   toggleAddTask() {
     this.uiService.toggleAddTask();
   }
 
   hasRoute(route: string) {
     return this.router.url === route;
   }

}
