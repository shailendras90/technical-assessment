import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-admin-layout',
  animations: [
    trigger('navAnimation', [
      state('true', style({
        backgroundColor: 'rgb(6 101 144 / 39%)'
      })),
      state('false', style({
        backgroundColor: '#383d48'
      })),
      transition('true => false', animate('1000ms linear')),
      transition('false => true', animate('1000ms linear'))
    ])
  ],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})

export class AdminLayoutComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  public applyAnimation: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
