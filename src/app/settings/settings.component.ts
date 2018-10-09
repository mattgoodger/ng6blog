import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from "@angular/animations";
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter',
        [
          style({ opacity: 0, transform: 'translateY(-15px)'}),
          stagger('50ms', 
          animate('550ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px'})))
        ], {optional: true}),
        query(':leave', animate('50ms', style({opacity: 0})),{
          optional: true
        })
      ])
    ])
  ]
})
export class SettingsComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
