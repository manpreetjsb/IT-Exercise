import { Component, Input, OnInit } from '@angular/core';
import { IBottleView } from '../interface';

@Component({
  selector: 'app-bottle-view',
  templateUrl: './bottle-view.component.html',
  styleUrls: ['./bottle-view.component.css'],
})
export class BottleViewComponent implements OnInit {
  constructor() {}
  @Input() data: IBottleView[] = [];
  ngOnInit(): void {}
}
