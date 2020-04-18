import {COLORS} from "../const.js";

const descriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];

const DefaultRepeatingDays = {
  "mo": false,
  "tu": false,
  "we": false,
  "th": false,
  "fr": false,
  "sa": false,
  "su": false,
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = getRandomBool() ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 8);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const getRandomBool = () => Math.random() > 0.5;

const generateRepeatingDays = () => {
  return Object.assign({}, DefaultRepeatingDays, {
    "mo": getRandomBool(),
    "tu": getRandomBool(),
    "we": getRandomBool(),
    "th": getRandomBool(),
    "fr": getRandomBool(),
    "sa": getRandomBool(),
    "su": getRandomBool()
  });
};

const generateTask = () => {
  const dueDate = getRandomBool() ? null : getRandomDate();

  return {
    description: getRandomArrayItem(descriptionItems),
    dueDate,
    repeatingDays: dueDate ? DefaultRepeatingDays : generateRepeatingDays(),
    color: getRandomArrayItem(COLORS),
    isArchive: getRandomBool(),
    isFavorite: getRandomBool(),
  };
};

const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};


export {generateTask, generateTasks};
