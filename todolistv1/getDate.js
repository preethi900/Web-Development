exports.getDate = function getDate() {
const todayDate = new Date();
const options = {
  weekday : "long",
  day : "numeric",
  month : "long"
};
return todayDate.toLocaleDateString("en-US",options);
};

exports.getDay = function getDay() {
const todayDate = new Date();
const options = {
  weekday : "long"
};
return todayDate.toLocaleDateString("en-US",options);
};
