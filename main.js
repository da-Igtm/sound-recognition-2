function identifySound(){
        navigator.mediaDevices.getUserMedia({
audio:true
     });
     classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZrhAkRb8O/model.json",model_ready); 
}
function model_ready(){
        console.log("model is ready");
        classifier.classify(gotResults); 
}
function gotResults(error,results){
console.error(error);
}