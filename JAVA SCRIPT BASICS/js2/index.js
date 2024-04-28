 console.log("chaliye shuru karte hai")
// let rectangle={
//     length:1,
//     breadth:2
//     draw : function(){
//        console.log('draw');
//     }

    
        
    
// };
// function createRectangle(){
//     return rectangle={
//         length:1,
//         breadth:2,
//         draw: function() {
//            console.log('draw');
//         }
    
        
//          };
// }
// function createRectangle(){
//     let rectangleObject = ();
// rectangle.length;
function Rectangle( len,bre){
    this.length =len;
    this.breadth = bre;
    this.draw = function(){
        console.log('drawing');
    }
}
let rectangleObject = new Rectangle( 1,2);
rectangleObject.color = 'yellow';
delete rectangleObject.color;