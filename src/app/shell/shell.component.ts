import { Title } from '@angular/platform-browser';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  sidebarNavigations = [
    { title: 'Skills', link: '/skills' },
    { title: 'Education', link: '/education' },
    { title: 'Work Experience', link: '/work-experience' },
    { title: 'Recent Projects', link: '/recent-projects' },
  ];
  private _unsubscribeAll: Subject<void> = new Subject<void>();
  constructor(public router: Router, private titleService: Title, private breakpoint: BreakpointObserver) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  get isMobile(): boolean {
    return this.breakpoint.isMatched(Breakpoints.Small) || this.breakpoint.isMatched(Breakpoints.XSmall);
  }

  get title(): string {
    return this.titleService.getTitle();
  }
}
