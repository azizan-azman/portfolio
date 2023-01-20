import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  sidebarNavigations = [
    // { title: 'About Me', link: '/about-me' },
    { title: 'Skills', link: '/skills' },
    { title: 'Education', link: '/education' },
    { title: 'Work Experience', link: '/work-experience' },
    { title: 'Recent Projects', link: '/recent-projects' },

    // { title: 'Contact Me', link: '/contact-me' },
  ];
  constructor(public router: Router, private titleService: Title, private breakpoint: BreakpointObserver) {}

  ngOnInit() {}

  get isMobile(): boolean {
    return this.breakpoint.isMatched(Breakpoints.Small) || this.breakpoint.isMatched(Breakpoints.XSmall);
  }

  get title(): string {
    return this.titleService.getTitle();
  }
}
