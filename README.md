<p align="center">
  <a href="https://culture-portal-gatsby.netlify.com">
    <img alt="Gatsby" src="https://dl.dropbox.com/s/fxsze8566o9f8jv/react_js-512.png" width="60" />
  </a>
</p>
<h1 align="center">
  <a href="https://culture-portal-gatsby.netlify.com">Culture Portal</a>
</h1>

# Worklog and self evaluation:

## Worklog

|                                                   | Time       | Done          |
|---------------------------------------------------| ---------- | ------------- |
[**Shirmurad Akmamedau**](https://github.com/muratx10)  | 3  | Basic project structure and page templates (with Petro) |
|                                                   | 2  | Search for poets page (with Petro) |
|                                                   | 3  | <code>timeline</code> component |
|                                                   | 2  | refactor <code>md</code>-files of authors |
|                                                   | 10 | styles / responsible / other minor refactoring |
|                                                   | 4  | Translation of some components to TypeScript |
|                                                   | 3  | code review |
|<hr>|<hr>|<hr>
[**Pavel Okun**](https://github.com/pavelokun)          | 4  | 404 page |
|                                                   | 2  | <code>head</code> component |
|                                                   | 1  | <code>footer</code> component |
|                                                   | 4  | <code>worklog</code> page |
|                                                   | 1  | refactor <code>md</code>-files of authors |
|                                                   | 3  | code review |
|<hr>|<hr>|<hr>
[**Evgeny	Ivanov**](https://github.com/ineg22)          | 3  | <code>header</code> (<code>nav</code> + <code>languages</code>) |
|                                                   | 2  | <code>gallery</code> component |
|                                                   | 1  | <code>preview</code> |
|                                                   | 8  | styles / responsible / other minor refactoring |
|                                                   | 3  | code review |
|<hr>|<hr>|<hr>
[**Oleh	Maliarenko**](https://github.com/olegmalyarenko)| 12 | fill data |
|                                                   | 4  | fix errors |
|                                                   | 6  | add and config <code>map</code> component |
|                                                   | 4  | add <code>video</code> component |
|                                                   | 3  | code review |
|<hr>|<hr>|<hr>
[**Petro Yuskiv**](https://github.com/yuskivpm)         | 6  | Basic project structure and page templates (with Murat) |
|                                                   | 3  | Auto generation of static pages |
|                                                   | 2  | Translation mechanics |
|                                                   | 2  | Multilanguage mechanics |
|                                                   | 2  | Support for Netlify cms |
|                                                   | 1  | Author of the Day selection method |
|                                                   | 4  | Search for poets page (with Murat) |
|                                                   | 1  | <code>Pagination</code> component |
|                                                   | 1  | <code>LocalizedLink</code> component |
|                                                   | 3  | code review |
|<hr>|<hr>|<hr>
[**Denis Duzh**](https://github.com/dermeister)         | 4  | <code>teampage</code> |
|                                                   | 6  | <code>styleguide</code> |
|                                                   | 3  | code review |

## Self evaluation:

1. ### Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/codejam-culture-portal.md
2. ### 15.02.2020 / 29.02.2020

## Total

### Task ( 20 / 20 )

---

### Navigation ( 1 / 1 )

### Main page with: ( 3 / 3 )

- [ ] portal's description
- [ ] 'author of the day' block
- [ ] developer team description

### Page of an author with: ( 11 / 11 )

- [ ] Page with a list of authors on the given topic with search widget
- [ ] search should be on the current language with ability to search by name, city/place of birth
- [ ] 5-7 authors are enough to complete the task successfully.

---

- [ ] Author's name
- [ ] Years of life
- [ ] his/her picture
- [ ] biography in the form of timeline (example here)
- [ ] list of artist's works with the date of creation
- [ ] photo gallery with author's picture and pictures of his/her works
- [ ] youtube video about the author / works / period of time author lived. Video must open in a new overlay (modal)
- [ ] place of author's major activity on a map: google / openstreetmap (leaflet) / yandex

### General: ( 5 / 5 )

- [ ] Web portal must be deployed on Github Pages / netlify / google firebase / etc
- [ ] Web portal has to be in 3 languages - by, ru, en. Content may vary for each version but interface elements have to be translated.
- [ ] Portal should be relatively correctly displayed on tablets and mobile phones.
- [ ] You should develop portal using libraries of visual components such as material-ui or bootstrap.
- [ ] You should use Reactjs or use gatsbyjs to get additional points.

## Evaluation: ( 40 + 130 + 70 = 240 )

### Min scope - **50**
- [ ] **10** Main page + page with a list of authors + author's page (only pages with content without widgets);
- [ ] **10** Page with team members + page with worklog
- [ ] **10** Page with list of authors contains search widget;
- [ ] **20** Portal has two languages;


### Normal scope - **140**
- [ ] **20** Portal has page with styleguide;
- [ ] **10** Mobile version is okey
- [ ] **10** Ipad/tablet version is okey
- [ ] **10** Author's page contains timeline;
- [ ] **10** Author's page contains video overlay;
- [ ] **20** Author's page contains photo gallery;
- [ ] **10** Author's page contains map (geowidget);
- [ ] **from 0 to 20** Design (typography, icons, colors, links + buttons + input are styled)
- [ ] **20** Material-ui / bootstrap is used
- [ ] **10** Portal has third language;

### Extra scope - **70**
- [ ] **10** Confidence of the project presentation;
- [ ] **10** Project is made using gatsbyjs;
- [ ] **10** Contentful / netlify cms is used for content management
- [ ] **20** Animations / special effects like paralax 
- [ ] **up to 20** Outstanding design;
- [ ] **20** Storybook/styleguidist/other react styleguide tool usage for the page with styles


### Fines
- **-50** if there are less than 5 commits from each active team member. Everyone should merge their own PRs.
- up to **-50** points for violations
[stage2-tasks-requirements](https://github.com/rolling-scopes-school/docs/blob/master/docs/stage2.md)
- **-40** if there is no worklog for team
- **-20** too primitive (ugly for 2020) design / UX


---
