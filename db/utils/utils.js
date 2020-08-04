exports.formatDates = list => {
    if (list.length===0){ return []}
 
//     list.forEach((item) => {
// console.log(new Date(item.created_at))
//     })

return list.map(item=>{
const timeStamp = new Date(item.created_at);
return {...item, created_at:timeStamp};
 
 
});

};

exports.makeRefObj = list => {
    if(list.length===0){return {}}
  const lookupObj = {};  
  list.map(item=>{
const key = item.title
lookupObj[key]  = item.article_id
console.log(lookupObj)
 
})  
 return lookupObj
};

exports.formatComments = (comments, articleRef) => {};
