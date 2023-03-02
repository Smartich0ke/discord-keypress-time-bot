var robot = require("kbm-robot");
var cron = require('node-cron');

robot.startJar();

cron.schedule('0 0 * * *', () => {
  robot
    .typeString("00:00")
    .press("enter")
    .go();
});
cron.schedule('1 1 * * *', () => {
    robot
      .typeString("01:01")
      .press("enter")
      .go();
  });
  cron.schedule('23 1 * * *', () => {
    robot
      .typeString("1:23")
      .press("enter")
      .go();
  });
  cron.schedule('33 3 * * *', () => {
    robot
      .typeString("33:33")
      .press("enter")
      .go();
  });
  cron.schedule('55 5 * * *', () => {
    robot
      .typeString("5:55")
      .press("enter")
      .go();
  });