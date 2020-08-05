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
 
 
})  
 return lookupObj
};

exports.formatComments = (comments, articleRef) => {
 
  return comments.map(comment=>{
    const formattedComments = {}
    formattedComments.body = comment.body;
    formattedComments.article_id=articleRef[comment.belongs_to]
    formattedComments.author=comment.created_by;
    formattedComments.votes=comment.votes;
    formattedComments.created_at=new Date(comment.created_at)
 

return formattedComments
  })

};
