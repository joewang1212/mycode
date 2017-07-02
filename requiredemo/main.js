require.config({
   path:{
       "a":"a",
       "b":"b"
   } 
});

require(['a'],function(a){
    console.log("main");
});