import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skillList = [
    {
      skillGroupTitle: 'Framework',
      skillHasImage: true,
      skillGroupList: [
        {
          skillTitle: 'Angular',
          skillYearOfExperience: "4 years' experience",

          skillLogoPath: '',
        },
        {
          skillTitle: 'Tailwindcss',
          skillYearOfExperience: "4 years' experience",

          skillLogoPath: '',
        },
        {
          skillTitle: 'Ionic',
          skillYearOfExperience: "3 years' experience",

          skillLogoPath: '',
        },
        {
          skillTitle: 'Bootstrap',
          skillYearOfExperience: "3 years' experience",

          skillLogoPath: '',
        },
        {
          skillTitle: 'Nx',
          skillYearOfExperience: "1 year's experience",

          skillLogoPath: '',
        },
        {
          skillTitle: 'Flutter',
          skillYearOfExperience: "1 year's experience",

          skillLogoPath: '',
        },
      ],
    },
    {
      skillGroupTitle: 'Tools',
      skillHasImage: false,
      skillGroupList: [
        {
          skillTitle: 'Visual Studio Code',
          skillYearOfExperience: '',
          skillLogoPath: '',
        },
        {
          skillTitle: 'Postman',
          skillYearOfExperience: '',
          skillLogoPath: '',
        },
        {
          skillTitle: 'GitLab',
          skillYearOfExperience: '',
          skillLogoPath: '',
        },
        {
          skillTitle: 'Figma',
          skillYearOfExperience: '',
          skillLogoPath: '',
        },
        {
          skillTitle: 'Adobe XD',
          skillYearOfExperience: '',
          skillLogoPath: '',
        },
        {
          skillTitle: 'Adobe Photoshop',
          skillYearOfExperience: '',
          skillLogoPath: '',
        },
        {
          skillTitle: 'Adobe Premiere Pro',
          skillYearOfExperience: '',
          skillLogoPath: '',
        },
        {
          skillTitle: 'Sony Vegas Pro',
          skillYearOfExperience: '',
          skillLogoPath: '',
        },
        {
          skillTitle: 'Microsoft Office (Word, Excel, Powerpoint)',
          skillYearOfExperience: '',
          skillLogoPath: '',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
