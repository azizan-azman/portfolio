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
          skillYearOfExperience: '4 years experience',
          skillLogoPath: './output/images/skills/logo_angular.png',
        },
        {
          skillTitle: 'Tailwindcss',
          skillYearOfExperience: '4 years experience',
          skillLogoPath: './output/images/skills/logo_tailwindcss.png',
        },
        {
          skillTitle: 'Ionic',
          skillYearOfExperience: '3 years experience',
          skillLogoPath: './output/images/skills/logo_ionic.png',
        },
        {
          skillTitle: 'Bootstrap',
          skillYearOfExperience: '3 years experience',
          skillLogoPath: './output/images/skills/logo_bootstrap.png',
        },
        {
          skillTitle: 'Nx Monorepo',
          skillYearOfExperience: '1 year experience',
          skillLogoPath: './output/images/skills/logo_nx.png',
        },
        {
          skillTitle: 'Flutter',
          skillYearOfExperience: '1 year experience',
          skillLogoPath: './output/images/skills/logo_flutter.png',
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
          skillTitle: 'Gitlab',
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
