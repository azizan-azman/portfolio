import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import { RecentProject } from '../recent-projects.model';

@Component({
  selector: 'app-recent-projects-detail',
  templateUrl: './recent-projects-detail.component.html',
  styleUrls: ['./recent-projects-detail.component.scss'],
})
export class RecentProjectsDetailComponent implements OnInit {
  testDataList: BehaviorSubject<RecentProject | null> = new BehaviorSubject<RecentProject | null>(null);
  activeRoute: string | null = this._activatedRoute.snapshot.paramMap.get('id');
  nextProject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  previousProject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private _dialog: MatDialog, private _activatedRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    if (this.activeRoute === '001') {
      this.getHighwayManagementTcsTcssData();
    } else if (this.activeRoute === '002') {
      this.getHighwayManagementUserSmartappData();
    } else if (this.activeRoute === '003') {
      this.getVehicleTowingUserSmartappData();
    }

    this._router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/recent-projects/project/001') {
          this.getHighwayManagementTcsTcssData();
        } else if (event.url === '/recent-projects/project/002') {
          this.getHighwayManagementUserSmartappData();
        } else if (event.url === '/recent-projects/project/003') {
          this.getVehicleTowingUserSmartappData();
        }
      }
    });
  }

  getHighwayManagementTcsTcssData() {
    console.log('im in 1');
    this.testDataList.next({
      pageTitle1: 'Toll Collection System',
      pageTitle2: 'Traffic Control Surveillance System',
      pageSubtitle: 'Highway Management',
      dataList: [
        {
          imageList: [
            {
              imagePathList: [
                {
                  imagePath: './output/images/recent-projects/project-001/tcs/project-001-introduction-tcs-list.png',
                  imageTitle: 'TCS Agent Dashboard - Data Table with pagination.',
                },
                {
                  imagePath: './output/images/recent-projects/project-001/tcs/project-001-introduction-tcs-delete.png',
                  imageTitle: 'TCS Agent Dashboard - Delete item dialog.',
                },
                {
                  imagePath: './output/images/recent-projects/project-001/tcs/project-001-introduction-tcs-create.png',
                  imageTitle: 'TCS Agent Dashboard - Create item form.',
                },
                {
                  imagePath: './output/images/recent-projects/project-001/tcs/project-001-introduction-tcs-edit.png',
                  imageTitle: 'TCS Agent Dashboard - Edit item form.',
                },
                {
                  imagePath: './output/images/recent-projects/project-001/tcs/project-001-introduction-tcs-list-sm.png',
                  imageTitle: 'TCS Agent Dashboard (Mobile screen) -  Data Table with pagination.',
                },

                {
                  imagePath:
                    './output/images/recent-projects/project-001/tcs/project-001-introduction-tcs-create-sm.png',
                  imageTitle: 'TCS Agent Dashboard (Mobile screen) -  Create item form.',
                },
                {
                  imagePath: './output/images/recent-projects/project-001/tcs/project-001-introduction-tcs-edit-sm.png',
                  imageTitle: 'TCS Agent Dashboard (Mobile screen) -  Edit item form.',
                },
              ],
              title: 'Agent Dashboard',
              tag: 'TCS',
              detailPage: true,
              detailPageRootLink: 'highway-management-tcs-tcss',
              detailPageLink: 'tcs-agent-dasboard',
            },
            {
              imagePathList: [
                {
                  imagePath: './output/images/recent-projects/project-001/tcss/project-001-introduction-tcss-list.png',
                  imageTitle: 'TCSS Agent Dashboard -  Data Table with pagination.',
                },

                {
                  imagePath: './output/images/recent-projects/project-001/tcss/project-001-introduction-tcss-edit.png',
                  imageTitle: 'TCSS Agent Dashboard -  Edit item form.',
                },
                {
                  imagePath:
                    './output/images/recent-projects/project-001/tcss/project-001-introduction-tcss-list-sm.png',
                  imageTitle: 'TCSS Agent Dashboard (Mobile screen) -  Data Table with pagination.',
                },
                {
                  imagePath:
                    './output/images/recent-projects/project-001/tcss/project-001-introduction-tcss-create-sm.png',
                  imageTitle: 'TCSS Agent Dashboard (Mobile screen) -  Create item form.',
                },
                {
                  imagePath:
                    './output/images/recent-projects/project-001/tcss/project-001-introduction-tcss-edit-sm.png',
                  imageTitle: 'TCSS Agent Dashboard (Mobile screen) -  Edit item form.',
                },
              ],
              title: 'Agent Dashboard',
              tag: 'TCSS',
              detailPage: true,
              detailPageRootLink: 'highway-management-tcs-tcss',
              detailPageLink: 'tcss-agent-dasboard',
            },
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-001/wallboard/project-001-introduction-wallboard-1.png',
                  imageTitle: 'Vehicle Detection & Toll Collection Wallboard.',
                },
              ],
              title: 'Vehicle Detection & Toll Collection Wallboard',
              tag: 'TCS',
              detailPage: true,
              detailPageRootLink: 'highway-management-tcs-tcss',
              detailPageLink: 'tcs-wallboard',
            },
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-001/homescreen/project-001-introduction-homescreen.png',
                  imageTitle: 'Agent Homescreen -  Availabe Application access.',
                },
              ],
              title: 'Agent Homescreen',
              tag: '',
              detailPage: true,
              detailPageRootLink: 'highway-management-tcs-tcss',
              detailPageLink: 'agent-homescreen',
            },
          ],
          topicTitle: 'Introduction',
          topicBulletPoints: false,
          topicParagraphList: [
            {
              highlight: '',
              paragraph:
                'As a system tool, Toll Collection System (TCS) manages and configures everything related to vehicle detection and toll fare collection on highways.',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'Traffic Control and Surveillance System (TCSS), on the other hand, is a system tool that handles the management and configuration of traffic control and surveillance on highways.',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'In a highway management project, I was responsible for researching, designing, and developing apps including the Agent Dashboard for TCS and TCSS, the Vehicle Detection and Toll Collection Wallboard, and the Agent Homescreen.',
              bullet: false,
            },
          ],
        },
        {
          imageList: [
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-001/framework-used/project-001-framework-used.png',
                  imageTitle: 'Nx + Angular + Tailwindcss.',
                },
              ],
              title: 'Nx + Angular + Tailwindcss.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
          ],
          topicTitle: 'Framework Used',
          topicBulletPoints: false,
          topicParagraphList: [
            {
              highlight: '',
              paragraph:
                'A monorepo strategy was used in the Highway Management System due to the presence of multiple apps. Nx monorepo is a framework that enables the management of multiple JavaScript-based frameworks or libraries within a single repository. Nx was selected for this project because it can handle multiple Angular apps.',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'Angular was chosen for this project because it follows the Model-View-Controller (MVC) pattern and utilizes TypeScript to facilitate the writing of cleaner and type-safe code.',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'Tailwindcss was chosen to improve the efficiency and speed of writing CSS. It was also used to facilitate the creation of responsive design in a more efficient manner.',
              bullet: false,
            },
          ],
        },
        {
          imageList: [
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-001/strategy/project-001-strategy-shared-breadcrumbs.png',
                  imageTitle:
                    'Using the DRY principle to create a breadcrumbs component that is shared across multiple apps inside the monorepo.',
                },
              ],
              title: 'Shareable breadcrumbs component.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-001/strategy/project-001-strategy-tailwindcss-breakpoints.png',
                  imageTitle: 'Responsive design using Mobile-first approach and Tailwindcss breakpoints.',
                },
              ],
              title: 'Responsive design using Mobile-first approach.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-001/strategy/project-001-strategy-typescript-error.png',
                  imageTitle: 'Error handling using Typescript.',
                },
              ],
              title: 'Error handling using Typescript.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-001/strategy/project-001-strategy-lazy-loading.png',
                  imageTitle: 'Loading components using lazy-loading strategy.',
                },
              ],
              title: 'Loading components using lazy-loading strategy.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
          ],
          topicTitle: 'Coding Principles & Strategies',
          topicBulletPoints: true,
          topicParagraphList: [
            {
              highlight: '',
              paragraph:
                'As a team of three front-end developers, we prioritize writing clear, effective, and maintainable code. Some of the coding principles and strategies we use include:',
              bullet: false,
            },
            {
              highlight: "Don't Repeat Yourself (DRY) & Keep it Simple (KIS). ",
              paragraph:
                "In the Highway Management project, multiple apps will have the same styling and components. We are using Nx monorepo to adhere to the DRY (Don't Repeat Yourself) principle and ensure that repeated components are only developed once and can be shared across multiple apps within the monorepo.",
              // paragraph:
              //   'In this Highway Management project, multiple apps will have the same stylings and components. Using Nx monorepo enhances our DRY KIS principle, as repeated components are only developed once and can be shared across multiple apps inside the monorepo.',
              bullet: true,
            },
            {
              highlight: 'Styling using Tailwindcss. ',
              paragraph:
                'We used Tailwind CSS because it is highly customizable and enables us to write CSS at the HTML class level. This allowed my team and I to write CSS more efficiently.',
              bullet: true,
            },
            {
              highlight: 'Responsive design using Mobile-first approach. ',

              paragraph:
                'We implemented a mobile-first approach and utilized Tailwindcss breakpoints to ensure responsive design for our apps.',
              // paragraph:
              //   'To ensure a responsive design for our apps, we adopted a mobile-first approach. We also used Tailwindcss breakpoints to code the responsive design.',
              bullet: true,
            },
            {
              highlight: 'Lazy-loading for route navigation. ',
              paragraph:
                'We implemented a lazy-loading strategy for our Angular route navigation to improve the performance of our application. This allowed us to load components faster and more efficiently.',
              bullet: true,
            },
            {
              highlight: "Enabling TypeScript's Strict Mode in Angular. ",
              paragraph:
                'Since we are using Angular with built-in TypeScript, my team and I enabled strict mode. This ensured that we wrote cleaner, type-safe code and helped us identify errors more quickly.',
              bullet: true,
            },
          ],
        },
        {
          imageList: [
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-001/role/project-001-role-balsamic-wireframe-2.png',
                  imageTitle: 'Balsamic Wireframe for UI/UX design.',
                },
              ],
              title: 'Balsamic Wireframe for UI/UX design.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
            {
              imagePathList: [
                {
                  imagePath: './output/images/recent-projects/project-001/role/project-001-role-documentation.png',
                  imageTitle: 'Documentations for code writing & UI/UX standardization.',
                },
              ],
              title: 'Documentations for code writing & UI/UX standardization.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
          ],
          topicTitle: 'Role and Responsibilities',
          topicBulletPoints: true,
          topicParagraphList: [
            {
              highlight: '',
              paragraph: 'In my role as Front-end Team Lead, my main responsibilities include:',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'Designing, developing, and maintaining the user interface (UI) and user experience (UX) for the project.',
              bullet: true,
            },
            {
              highlight: '',
              paragraph: 'Collaborating with the Backend team to integrate their RESTful APIs into the project.',
              bullet: true,
            },
            {
              highlight: '',
              paragraph:
                'Collaborating with an agile team of 12 members, updating development progress and fixing bug issues for each scrum sprint using JIRA.',
              bullet: true,
            },
            {
              highlight: '',
              paragraph: 'Mentoring and guiding fellow team members.',
              bullet: true,
            },
            // {
            //   highlight: '',
            //   paragraph:
            //     'Setting up the project infrastructure and ensuring that all necessary tools and resources are in place.',
            //   bullet: true,
            // },
            {
              highlight: '',
              paragraph: 'Providing clear and thorough documentation for the project.',
              bullet: true,
            },
            {
              highlight: '',
              paragraph: 'Conducting research on appropriate technologies to use for the project.',
              bullet: true,
            },
          ],
        },
      ],
    });

    this.nextProject.next('002');
    this.previousProject.next('003');
  }
  getHighwayManagementUserSmartappData() {
    console.log('im in 2');
    this.testDataList.next({
      pageTitle1: 'User eWallet',
      pageTitle2: '',
      pageSubtitle: 'Highway Management',
      dataList: [
        {
          imageList: [
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-002/introduction/project-002-introduction-ewallet-1.png',
                  imageTitle: 'User eWallet - Home screen.',
                },
                {
                  imagePath:
                    './output/images/recent-projects/project-002/introduction/project-002-introduction-ewallet-2.png',
                  imageTitle: 'User eWallet - Settings.',
                },
                {
                  imagePath:
                    './output/images/recent-projects/project-002/introduction/project-002-introduction-ewallet-3.png',
                  imageTitle: 'User eWallet - User Profile settings.',
                },
                {
                  imagePath:
                    './output/images/recent-projects/project-002/introduction/project-002-introduction-ewallet-4.png',
                  imageTitle: "User eWallet - List of User's registered vehicle.",
                },
                {
                  imagePath:
                    './output/images/recent-projects/project-002/introduction/project-002-introduction-ewallet-5.png',
                  imageTitle: 'User eWallet - Outstanding Payment.',
                },
              ],
              title: 'User eWallet Smartapp',
              tag: '',
              detailPage: true,
              detailPageRootLink: 'highway-management-tcs-tcss',
              detailPageLink: 'agent-homescreen',
            },
          ],
          topicTitle: 'Introduction',
          topicBulletPoints: false,
          topicParagraphList: [
            {
              highlight: '',
              paragraph:
                'In the Highway Management project, the User eWallet mobile app requires users to register their information before they can use our highway.',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'The app includes features such as an ewallet for transactions on the highway or at rest areas, the ability to receive announcements about events or accidents on the highway, and an emergency call feature.',
              bullet: false,
            },
          ],
        },
        {
          imageList: [
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-002/framework-used/project-002-framework-used.png',
                  imageTitle: 'Ionic + Angular + Tailwindcss.',
                },
              ],
              title: 'Ionic + Angular + Tailwindcss.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
          ],
          topicTitle: 'Framework Used',
          topicBulletPoints: false,
          topicParagraphList: [
            {
              highlight: '',
              paragraph:
                'To deliver a Proof of Concept (POC) for the User eWallet app within 3 months, my team and I decided to use Progressive Web App (PWA) technology to build the app.',

              // paragraph:
              //   'To deliver the POC of the User eWallet app within 3 months and with a small team of 3 frontend developers, 3 backend developers and 3 testers, my team and I decided to build the app as a PWA.',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'Ionic was chosen for this project because it has a powerful UI toolkit for building mobile apps using web technologies, and it also supports Angular, which we used as the frontend framework.',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'We selected Angular for this project because it follows the Model-View-Controller (MVC) pattern, and it utilizes TypeScript to enable us to write cleaner and more type-safe code. Angular also has a built-in PWA package that is easy to set up.',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'Tailwindcss was chosen to improve the efficiency and speed of writing CSS. It was also used to facilitate the creation of responsive design in a more efficient manner.',
              bullet: false,
            },
          ],
        },

        {
          imageList: [
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-001/strategy/project-001-strategy-shared-breadcrumbs.png',
                  imageTitle:
                    'Using the DRY principle to create a breadcrumbs component that is shared across multiple apps inside the monorepo.',
                },
              ],
              title: 'Shareable breadcrumbs component.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-001/strategy/project-001-strategy-tailwindcss-breakpoints.png',
                  imageTitle: 'Responsive design using Mobile-first approach and Tailwindcss breakpoints.',
                },
              ],
              title: 'Responsive design using Mobile-first approach.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-001/strategy/project-001-strategy-typescript-error.png',
                  imageTitle: 'Error handling using Typescript.',
                },
              ],
              title: 'Error handling using Typescript.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-001/strategy/project-001-strategy-lazy-loading.png',
                  imageTitle: 'Loading components using lazy-loading strategy.',
                },
              ],
              title: 'Loading components using lazy-loading strategy.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
          ],
          topicTitle: 'Coding Principles & Strategies',
          topicBulletPoints: true,
          topicParagraphList: [
            {
              highlight: '',
              paragraph:
                'As a team of three front-end developers, we prioritize writing clear, effective, and maintainable code. Some of the coding principles and strategies we use include:',
              bullet: false,
            },
            {
              highlight: "Don't Repeat Yourself (DRY) & Keep it Simple (KIS). ",
              paragraph:
                " To make our codebase cleaner, and easier to read, we applied the principles of DRY (Don't Repeat Yourself) and KIS (Keep it Simple). We also established a set of standardized code-writing rules to make our codebase more organized and easier to maintain.",

              bullet: true,
            },
            {
              highlight: 'Styling using Tailwindcss. ',
              paragraph:
                'We used Tailwind CSS because it is highly customizable and enables us to write CSS at the HTML class level. This allowed my team and I to write CSS more efficiently.',
              bullet: true,
            },

            {
              highlight: 'Lazy-loading for route navigation. ',
              paragraph:
                'We implemented a lazy-loading strategy for our Angular route navigation to improve the performance of our application. This allowed us to load components faster and more efficiently.',
              bullet: true,
            },
            {
              highlight: "Enabling TypeScript's Strict Mode in Angular. ",
              paragraph:
                'Since we are using Angular with built-in TypeScript, my team and I enabled strict mode. This ensured that we wrote cleaner, type-safe code and helped us identify errors more quickly.',
              bullet: true,
            },
          ],
        },
        {
          imageList: [
            {
              imagePathList: [
                {
                  imagePath: './output/images/recent-projects/project-002/role/project-002-role-figma-1.png',
                  imageTitle: 'Designing the UI/UX of the app and adding prototype flow using figma.',
                },
              ],
              title: 'UI/UX design and prototype flow.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
            {
              imagePathList: [
                {
                  imagePath: './output/images/recent-projects/project-002/role/project-002-role-figma-2.png',
                  imageTitle: 'Atomic Design System - Colors.',
                },
              ],
              title: 'Atomic Design System - Colors.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
            {
              imagePathList: [
                {
                  imagePath: './output/images/recent-projects/project-002/role/project-002-role-figma-3.png',
                  imageTitle: 'Atomic Design System - Typography.',
                },
              ],
              title: 'Atomic Design System - Typography.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
          ],
          topicTitle: 'Role and Responsibilities',
          topicBulletPoints: true,
          topicParagraphList: [
            {
              highlight: '',
              paragraph: 'In my role as Front-end support and UI/UX designer, my main responsibilities include:',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'Designing the user interface (UI) and user experience (UX) for the project using Figma, and implemented the principles of Atomic Design by Bradfost in my design system.',
              bullet: true,
            },
            {
              highlight: '',
              paragraph:
                'Developing, and maintaining the user interface (UI) and user experience (UX) of the project using best coding practices.',
              bullet: true,
            },

            {
              highlight: '',
              paragraph: 'Collaborating with the Backend team to integrate their RESTful APIs into the project.',
              bullet: true,
            },
            {
              highlight: '',
              paragraph: 'Mentoring and guiding fellow team members to help improve their code quality.',
              bullet: true,
            },
          ],
        },
      ],
    });
    this.nextProject.next('003');
    this.previousProject.next('001');
  }
  getVehicleTowingUserSmartappData() {
    console.log('im in 3');
    this.testDataList.next({
      pageTitle1: 'User Towing App',
      pageTitle2: '',
      pageSubtitle: 'Vehicle Towing',
      dataList: [
        {
          imageList: [
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-003/introduction/project-003-introduction-home.png',
                  imageTitle: 'User Vehicle Towing - Homescreen.',
                },
                {
                  imagePath:
                    './output/images/recent-projects/project-003/introduction/project-003-introduction-register-vehicle.png',
                  imageTitle: 'User Vehicle Towing - Vehicle registration form.',
                },
                {
                  imagePath:
                    './output/images/recent-projects/project-003/introduction/project-003-introduction-call-HQ.png',
                  imageTitle: 'User Vehicle Towing - Emergency call feature.',
                },
              ],
              title: 'User Vehicle Towing',
              tag: '',
              detailPage: true,
              detailPageRootLink: 'highway-management-tcs-tcss',
              detailPageLink: 'agent-homescreen',
            },
          ],
          topicTitle: 'Introduction',
          topicBulletPoints: false,
          topicParagraphList: [
            {
              highlight: '',
              paragraph:
                'In the Vehicle Towing project, the User Towing App is a mobile app that allows users to request our towing services anytime, anywhere they need help with their vehicle.',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'The app includes seamless emergency call and auto user location detection features, as well as an easy towing request feature.',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'It also allows users to easily monitor the real-time tracking and progress of the towing agent from the start of the towing process until the vehicle arrives at the chosen destination.',
              bullet: false,
            },
          ],
        },
        {
          imageList: [
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-003/framework-used/project-003-framework-used.png',
                  imageTitle: 'Ionic + Angular + Cordova. ',
                },
              ],
              title: 'Ionic + Angular + Cordova.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
          ],
          topicTitle: 'Framework Used',
          topicBulletPoints: false,
          topicParagraphList: [
            {
              highlight: '',
              paragraph:
                'To deliver a Proof of Concept (POC) of the User Towing app, my team and I decided to use Progressive Web App (PWA) technology to build the app.',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'Ionic was chosen for this project because it has a powerful UI toolkit for building mobile apps using web technologies, and it also supports Angular, which we used as the frontend framework.',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'We selected Angular for this project because it follows the Model-View-Controller (MVC) pattern, and it utilizes TypeScript to enable us to write cleaner and more type-safe code. Angular also has a built-in PWA package that is easy to set up.',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'Cordova was chosen for this project to enable the use of native mobile app features such as geolocation and phone call services.',
              bullet: false,
            },
          ],
        },

        {
          imageList: [
            {
              imagePathList: [
                {
                  imagePath:
                    './output/images/recent-projects/project-001/strategy/project-001-strategy-lazy-loading.png',
                  imageTitle: 'Loading components using lazy-loading strategy.',
                },
              ],
              title: 'Loading components using lazy-loading strategy.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
          ],
          topicTitle: 'Coding Principles & Strategies',
          topicBulletPoints: true,
          topicParagraphList: [
            {
              highlight: '',
              paragraph:
                'As a team of three front-end developers, we prioritize writing clear, effective, and maintainable code. Some of the coding principles and strategies we use include:',
              bullet: false,
            },
            {
              highlight: "Don't Repeat Yourself (DRY) & Keep it Simple (KIS). ",
              paragraph:
                "To make our codebase cleaner, and easier to read, we applied the principles of DRY (Don't Repeat Yourself) and KIS (Keep it Simple).",
              // paragraph:
              //   'In this Highway Management project, multiple apps will have the same stylings and components. Using Nx monorepo enhances our DRY KIS principle, as repeated components are only developed once and can be shared across multiple apps inside the monorepo.',
              bullet: true,
            },

            {
              highlight: 'Lazy-loading for route navigation. ',
              paragraph:
                'We implemented a lazy-loading strategy for our Angular route navigation to improve the performance of our application. This allowed us to load components faster and more efficiently.',
              bullet: true,
            },
          ],
        },
        {
          imageList: [
            {
              imagePathList: [
                {
                  imagePath: './output/images/recent-projects/project-003/role/project-003-role-update-profile.png',
                  imageTitle: 'Developed a user profile form as one of my tasks.',
                },
              ],
              title: 'Update user profile page.',
              tag: '',
              detailPage: false,
              detailPageLink: '',
              detailPageRootLink: '',
            },
          ],
          topicTitle: 'Role and Responsibilities',
          topicBulletPoints: true,
          topicParagraphList: [
            {
              highlight: '',
              paragraph: 'As a Junior Front-end Developer, my main responsibilities include:',
              bullet: false,
            },
            {
              highlight: '',
              paragraph:
                'Developing, and maintaining the user interface (UI) and user experience (UX) for the project.',
              bullet: true,
            },
            {
              highlight: '',
              paragraph: 'Completing all tasks assigned by my seniors.',
              bullet: true,
            },

            {
              highlight: '',
              paragraph: 'Seeking guidance and learning from my seniors to improve my code quality.',
              bullet: true,
            },
            {
              highlight: '',
              paragraph:
                'Self-training using online courses such as Udemy to speed up my learning process and improve my skills.',
              bullet: true,
            },
          ],
        },
      ],
    });
    this.nextProject.next('001');
    this.previousProject.next('002');
  }

  navigateToProject(id: any) {
    this._router.navigate([`/recent-projects/project/${id}`]);
    // document.getElementsByTagName('mat-drawer-content')[0].scrollTo(0, 0);
  }

  openDialog(imageData: any) {
    const dialogRef = this._dialog.open(DialogComponent, {
      data: { imagePath: imageData },
    });
  }
}
