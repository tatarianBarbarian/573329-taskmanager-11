import {createSiteMenuTemplate} from './components/site-menu';
import {createFilterTemplate} from './components/filters';
import {createBoardTemplate} from './components/cards-board';
import {createTaskTemplate} from './components/card';
import {createTaskEditTemplate} from './components/edit-card';
import {createLoadMoreButtonTemplate} from './components/load-more-button';
import {generateFilters} from "./mock/filter.js";

const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate(filters));
render(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
render(taskListElement, createTaskEditTemplate());

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate());
}

const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createLoadMoreButtonTemplate());
