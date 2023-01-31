import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educationHistoryList = [
    {
      institutionCertificate: 'BEng. in Electronics-Computer and Information (Hons)',
      institutionName: 'International Islamic University Malaysia (IIUM)',
      institutionLocation: 'Gombak, Selangor',
      institutionDuration: 'Jan 2015 - Jan 2019',
      institutionResult: 'CGPA: 3.01',
    },
    {
      institutionCertificate: 'Foundation in Engineering and Computer Science',
      institutionName: 'Centre for Foundation Studies IIUM',
      institutionLocation: 'Petaling Jaya, Selangor',
      institutionDuration: '2013 - 2014',
      institutionResult: 'CGPA: 3.00',
    },
    {
      institutionCertificate: 'SPM',
      institutionName: 'SMK Bandar Tun Hussein Onn 2',
      institutionLocation: 'Cheras Perdana, Selangor',
      institutionDuration: '2007 - 2012',
      institutionResult: 'Results: 5A+, 2A, 1A-, 1B+',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
