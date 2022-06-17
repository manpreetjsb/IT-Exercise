import { Component, Injectable } from '@angular/core';
import { IBottle, IBottleView } from './interface';
import { AppView } from './constants';
import { DataService } from './services/DataService';
import { Subscription } from 'rxjs';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dataService: DataService) {}
  getBottlesSubscription: Subscription | undefined;
  bottleViewData: IBottleView[] = [];
  appView = AppView;

  ngOnInit() {
    this.getBottlesSubscription = this.dataService.getBottles().subscribe({
      next: (bottles) => this.setBottleData(bottles),
      error: (error) => console.log(error),
    });
  }
  setBottleData(bottles: IBottle[]) {
    bottles.forEach((bottle) => {
      const { name, articles } = bottle;
      articles.forEach((article) => {
        const { id, image, shortDescription, price } = article;
        this.bottleViewData.push({
          id,
          name,
          image,
          shortDescription,
          price,
        });
      });
    });
  }

  ngOnDestroy() {
    this.getBottlesSubscription?.unsubscribe();
  }
}
