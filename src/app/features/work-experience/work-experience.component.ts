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
      jobPoisiton2: 'Front-end Developer',
      jobResponsibilities: [
        {
          responsibility:
            'Worked with an agile team of 12 in providing end-to-end solutions for a client, using tools such as JIRA to manage development progress and resulting in a 50% increase in client satisfaction and trust.',
        },
        {
          responsibility:
            'Implemented best coding practices such as DRY and KIS, and enforced strict compiler rules, resulting in a cleaner codebase and a 70% reduction in the number of bugs identified.',
        },
        {
          responsibility:
            'Served as Front-end Team Lead, mentored two front-end developers and provided them thorough documentations, which helped improved their code quality by 50%.',
        },
        {
          responsibility:
            'Designed the UI/UX of a project using tools such as Figma, and implemented Atomic Design (by Brad Fost) in our design system which resulted in a more efficient design process.',
        },
        {
          responsibility:
            'Developed user-friendly web and mobile applications, regularly updating the UI/UX to improve overall app performance.',
        },
        {
          responsibility:
            'Collaborated with the Backend Team to integrate RESTful APIs and designed and developed components and pages with CRUD operations.',
        },
        {
          responsibility:
            'Managed code version control using Git and Gitlab, and deployed web applications to our server using web-serving tools such as Nginx.',
        },
      ],
      emptyLine: true,
    },
    {
      companyName: 'TNBR QATS Sdn Bhd',
      companyYearsOfService: 'Jan 2018 - March 2018',
      companyLocation: 'Bangi, Selangor',
      jobPoisiton: 'Sijil Guna Pakai (SGP) Technical Evaluator',
      jobPoisiton2Flag: true,
      jobPoisiton2: 'Internship',
      jobResponsibilities: [
        {
          responsibility:
            'Evaluated documents submitted by SGP applicants for compliance with TNB requirements for electrical products such as low and medium voltage cables and fire protection systems.',
        },
        {
          responsibility:
            'Assessed field trial results of electrical products applied for SGP to ensure compliance with TNB requirements.',
        },
        {
          responsibility:
            'Compiled detailed reports on the results of document evaluation and field trial phases, including products that passed or failed.',
        },
      ],
      emptyLine: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
