import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-projects-list',
  templateUrl: './recent-projects-list.component.html',
  styleUrls: ['./recent-projects-list.component.scss'],
})
export class RecentProjectsListComponent implements OnInit {
  projects = [
    {
      image: './output/images/recent-projects/list/project_hm_tcs_0.png',
      projectCategory: 'Highway Management',
      projectTitle: 'Toll Collection System & Traffic Control Surveillance System',
      projectType: 'Web Development',
      projectDate: 'Jan 2022 - Dec 2022',
      id: '001',
    },
    {
      image: './output/images/recent-projects/list/project_hm_ewallet_0.png',
      projectCategory: 'Highway Management',
      projectTitle: 'User eWallet SmartApp',
      projectType: 'Progressive Web App',
      projectDate: 'Jan 2022 - Dec 2022',
      id: '002',
    },

    {
      image: './output/images/recent-projects/list/project_towing_smartapp_0.png',
      projectCategory: 'Vehicle Towing',
      projectTitle: 'User SmartApp',
      projectType: 'Progressive Web App',
      projectDate: 'Jan 2022 - Dec 2022',
      id: '003',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
