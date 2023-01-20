import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {
  workExperienceList = [
    {
      companyName: 'Silverline Dynamics Sdn Bhd',
      companyYearsOfService: 'Jan 2019 - Current',
      companyLocation: 'Cyberjaya, Selangor',
      jobPoisiton: 'System Engineer',
      jobPoisiton2Flag: true,
      jobPoisiton2: 'Frontend Developer',
      jobResponsibilities: [
        { responsibility: 'Research, design, and develop.' },
        { responsibility: 'Mentored team-member.' },
        {
          responsibility: 'Collaborated with backend team to integrate their RESTful APIs.',
        },
      ],
      emptyLine: true,
    },
    {
      companyName: 'TNBR QATS Sdn Bhd',
      companyYearsOfService: 'Jan 2018 - March 2018',
      companyLocation: 'Bangi, Selangor',
      jobPoisiton: 'Quality Assurance',
      jobPoisiton2Flag: true,
      jobPoisiton2: 'Internship',
      jobResponsibilities: [
        { responsibility: 'Produce detailed reports.' },
        { responsibility: 'Conducted field tests.' },
        {
          responsibility: 'Work closely with client.',
        },
      ],
      emptyLine: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
