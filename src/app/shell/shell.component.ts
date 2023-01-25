import { Title } from '@angular/platform-browser';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  sidebarNavigations = [
    // { title: 'About Me', link: '/about-me' },
    { title: 'Skills', link: '/skills' },
    { title: 'Education', link: '/education' },
    { title: 'Work Experience', link: '/work-experience' },
    { title: 'Recent Projects', link: '/recent-projects' },

    // { title: 'Contact Me', link: '/contact-me' },
  ];
  private _unsubscribeAll: Subject<void> = new Subject<void>();
  constructor(public router: Router, private titleService: Title, private breakpoint: BreakpointObserver) {}

  ngOnInit() {
    // this.router.events.pipe(takeUntil(this._unsubscribeAll)).subscribe((event: Event) => {
    //   if (event instanceof NavigationStart) {
    //     // Show loading indicator
    //     console.log('Route change detected');
    //   }
    //   if (event instanceof NavigationEnd) {
    //     // Hide loading indicator
    //     if (this.isMobile === true) {
    //       this.sidenav.close();
    //     } else {
    //       return;
    //     }
    //     console.log(event);
    //   }
    //   if (event instanceof NavigationError) {
    //     // Hide loading indicator
    //     // Present error to user
    //     console.log(event.error);
    //   }
    // });
  }

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
