import moment from "moment" ;

function formatDate (date) {
  return moment(date).format("dddd Do MMMM YYYY");};
formatDate("2000-05-31");  // Wednesday 31st May 2000


function yearsSinceDate(date){
  console.log(moment().diff(date));
  return  moment().diff(date, "years");};
yearsSinceDate("2000-05-31"); // 20




function daysSinceDate(date){
  let a = moment().diff(date, "day");
  let b = a + 1;
  return b ;
};

daysSinceDate("2000-05-31"); // 7394

function getDayFromDate(date){
  return moment(date).format("dddd");
};
getDayFromDate("2000-05-31"); // Wednesday

export { formatDate,yearsSinceDate,daysSinceDate,getDayFromDate };
