export const menu = [
  {
    topLabel: 'Courses',
    topId: 'coursesId',
    targetId: 'coursesub',
    topIcon: 'fa fa-book',
    subMenu: [
      {
        label: 'Course List',
        routerLink: [''],
        icon: 'unordered-list',
      },
      {
        label: 'Course Create',
        routerLink: ['/addcourse'],
        icon: 'appstore-add',
      },
      {
        label: 'Course Inquiry',
        routerLink: ['/searchcourse'],
        icon: 'delete-row',
      },
    ],
  },
];
