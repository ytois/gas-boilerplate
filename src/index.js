import moment from 'moment';

global.main = function () {
  let now = moment().format("YYYY-MM-DD HH:mm:ss");
  Logger.log(now);
}
