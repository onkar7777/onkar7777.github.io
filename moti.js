var totalElement = ["one",'two','three','four','five','six',"seven","eight","nine","ten","elevan","twelve","thirteen","fourteen"];
// i  = row AND  j = elements;
//var l = 0,n=2;
console.log(Math.round(totalElement.length/3))
for(var i=1; i<= Math.round(totalElement.length/3); i++ ){
    console.log(i)
    if(i==1){
        var l = 0;
        var n = 2
    }else{
    var l = l+3;
    var n = n+3;}
    // if(i==1){
    //     var l = 0;
    //     var n = 2;
    // }else if(i==2){
    //     var l = 3;
    //     var n = 5;
    // }else if(i==3){
    //     var l = 6;
    //     var n = 8;
    // }
    // if(i != 1){
    // var m = 0;
    // var l = m+3; // 
    // var m = l;
    // var k = 2;
    // var n = k+3; // 
    // }else{
    //     var l = 0;
    //     var n = 2
    // }
    for(var j=l; j<= n; j++){
        console.log(totalElement[j]);

    }  
}