import { getFormatDate } from "../helpers/getFormatDate";
import { ProjectTypes, type ProjectDetail } from "../types/types";

export const projects: ProjectDetail[] = [
  {
    client: "Client Example 1",
    description: 'Ad irure id pariatur irure exercitation minim non amet culpa velit sit deserunt ullamco enim. Ea dolor adipisicing cillum ullamco sit Lorem aliqua. Aute est culpa Lorem fugiat consequat sit. Culpa elit in laborum excepteur. Nulla quis laboris voluptate in ex laborum. Exercitation elit laborum ut culpa excepteur nulla nulla Lorem sit exercitation sunt dolore. Laborum nostrud ex voluptate officia et ad ad.',
    type: ProjectTypes.EDIFICIOS,
    img: ['example'],
    project_date: getFormatDate(new Date().toString()),
    title: 'Project example'
  },
  {
    client: "Client Example 2",
    description: 'Ad irure id pariatur irure exercitation minim non amet culpa velit sit deserunt ullamco enim. Ea dolor adipisicing cillum ullamco sit Lorem aliqua. Aute est culpa Lorem fugiat consequat sit. Culpa elit in laborum excepteur. Nulla quis laboris voluptate in ex laborum. Exercitation elit laborum ut culpa excepteur nulla nulla Lorem sit exercitation sunt dolore. Laborum nostrud ex voluptate officia et ad ad.',
    type: ProjectTypes.INSTITUCIONAL,
    img: ['example'],
    project_date: getFormatDate(new Date().toString()),
    title: 'Project example 2'
  },
  {
    client: "Client Example 3",
    description: 'Ad irure id pariatur irure exercitation minim non amet culpa velit sit deserunt ullamco enim. Ea dolor adipisicing cillum ullamco sit Lorem aliqua. Aute est culpa Lorem fugiat consequat sit. Culpa elit in laborum excepteur. Nulla quis laboris voluptate in ex laborum. Exercitation elit laborum ut culpa excepteur nulla nulla Lorem sit exercitation sunt dolore. Laborum nostrud ex voluptate officia et ad ad.',
    type: ProjectTypes.INTERIORISMO,
    img: ['example'],
    project_date: getFormatDate(new Date().toString()),
    title: 'Project example 3'
  },
  {
    client: "Client Example 4",
    description: 'Ad irure id pariatur irure exercitation minim non amet culpa velit sit deserunt ullamco enim. Ea dolor adipisicing cillum ullamco sit Lorem aliqua. Aute est culpa Lorem fugiat consequat sit. Culpa elit in laborum excepteur. Nulla quis laboris voluptate in ex laborum. Exercitation elit laborum ut culpa excepteur nulla nulla Lorem sit exercitation sunt dolore. Laborum nostrud ex voluptate officia et ad ad.',
    type: ProjectTypes.RESIDENCIAL,
    img: ['example'],
    project_date: getFormatDate(new Date().toString()),
    title: 'Project example 4'
  },
  {
    client: "Client Example 5",
    description: 'Ad irure id pariatur irure exercitation minim non amet culpa velit sit deserunt ullamco enim. Ea dolor adipisicing cillum ullamco sit Lorem aliqua. Aute est culpa Lorem fugiat consequat sit. Culpa elit in laborum excepteur. Nulla quis laboris voluptate in ex laborum. Exercitation elit laborum ut culpa excepteur nulla nulla Lorem sit exercitation sunt dolore. Laborum nostrud ex voluptate officia et ad ad.',
    type: ProjectTypes.INSTITUCIONAL,
    img: ['example'],
    project_date: getFormatDate(new Date().toString()),
    title: 'Project example 5'
  },
  {
    client: "Client Example 6",
    description: 'Ad irure id pariatur irure exercitation minim non amet culpa velit sit deserunt ullamco enim. Ea dolor adipisicing cillum ullamco sit Lorem aliqua. Aute est culpa Lorem fugiat consequat sit. Culpa elit in laborum excepteur. Nulla quis laboris voluptate in ex laborum. Exercitation elit laborum ut culpa excepteur nulla nulla Lorem sit exercitation sunt dolore. Laborum nostrud ex voluptate officia et ad ad.',
    type: ProjectTypes.RESIDENCIAL,
    img: ['example'],
    project_date: getFormatDate(new Date().toString()),
    title: 'Project example 6'
  },
]