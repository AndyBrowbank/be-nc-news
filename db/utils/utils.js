exports.formatDates = list => {
    if (list.length===0){ return []}
 
//     list.forEach((item) => {
// console.log(new Date(item.created_at))
//     })

const timeStamp = list[0].created_at;
const newTimeStamp = new Date(timeStamp);
const object = list[0]
object.created_at = newTimeStamp
return [object];
 
 
 

};

exports.makeRefObj = list => {};

exports.formatComments = (comments, articleRef) => {};
