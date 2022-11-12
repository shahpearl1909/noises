function classifier(){
    navigator.mediaDevices.getUserMedia({audio:true });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/VLgqEbvkm/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error, result){
    if(error){
        console.log(error);
    }else{
        console.log(result);

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;

        document.getElementById("sound_name").innerHTML="I can hear - "+result[0].label;
        document.getElementById("confident").innerHTML="accuracy - "+(result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("sound_name").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("confident").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1=document.getElementById("alien_1");
        img2=document.getElementById("alien_2");
        img3=document.getElementById("alien_3");
        img4=document.getElementById("alien_4");

        if (result[0].label == "clapping"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }else if (result[0].label == "snapping"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }else if (result[0].label == "raining"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";
        }else {
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";
        }
    }
}
