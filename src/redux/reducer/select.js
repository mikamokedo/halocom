import db from '../../db.json';
db.sort((a,b) =>{
    if(a.points > b.points){
      return -1;
    } 
    if(a.points < b.points){
      return 1;
    } 
  })
const InitialState = {
    category : "stories",
    by : "popular",
    time : "alltime",
    fillterVal : "",
    database : db
}
const select = (state = InitialState, action) => {
    switch (action.type) {
        case "CHANGE_CATEGORY":
            let tempdb3;
            if(action.payload === "comment"){
                tempdb3 = [];
                state.database.forEach((ele) =>{
                ele.comment.forEach((ele) =>{
                    tempdb3.push(ele);
                });
            })

        }
        else if(action.payload === "stories"){
            tempdb3 = db;
        }
            return {...state,category : action.payload, database: tempdb3};
        case "CHANGE_BY":
            let tempdb2 = [...state.database];
            if(action.payload === "date"){
                tempdb2.sort((a,b) =>{
                    if(a.time > b.time){
                      return -1;
                    } 
                    if(a.time < b.time){
                      return 1;
                    } 
                  })
            }
            else{
                tempdb2.sort((a,b) =>{
                    if(a.points > b.points){
                      return -1;
                    } 
                    if(a.points < b.points){
                      return 1;
                    } 
                  })      
            }
            return {...state,by : action.payload,database : tempdb2}
        case "CHANGE_TIME":
            var someDate = new Date();
            var numberOfDaysToAdd = 7;
            someDate.setDate(someDate.getDate() - numberOfDaysToAdd);
            
            console.log("being update")
            

            return {...state}
        case "CHANGE_FILLTER":
            let tempdb1 = db;
            if(state.category === "stories"){
                tempdb1 = tempdb1.filter(ele =>{
                    return ele.title.trim().toLowerCase().includes(action.payload.toLowerCase().trim());
                })
            }
            else{
                tempdb1 = [];
                db.forEach((ele) =>{
                ele.comment.forEach((ele) =>{
                    tempdb1.push(ele);
                });
                 });
                 tempdb1 = tempdb1.filter((ele) =>{
                    return ele.content.trim().toLowerCase().includes(action.payload.trim().toLowerCase());
                })

            }
            return {...state,fillterVal : action.payload,database: tempdb1}
             
        default:
            return state
    }
}
export default select;