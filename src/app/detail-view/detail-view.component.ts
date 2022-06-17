import { Component, Input, OnInit } from '@angular/core';
import { IBottleView } from '../interface';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent implements OnInit {
  constructor() {}
  @Input() data: IBottleView[] = [];
  ngOnInit(): void {}
}
