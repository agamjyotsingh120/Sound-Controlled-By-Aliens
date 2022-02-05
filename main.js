function start1()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gsnGQUqsR/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if(error) {
        console.error(error);

    } else {
        console.log(results);
        randomr = Math.floor(Math.random() * 255) + 1;
        randomg = Math.floor(Math.random() * 255) + 1;
        randomb = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result").innerHTML = "I can hear - "+
        results[0].label;
        document.getElementById("confidence").innerHTML = "Accuracy - "+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result").style.color = "rgb("
        + randomr + "," +randomg + "," + randomb +")";
        document.getElementById("confidence").style.color = "rgb("
        + randomr + "," +randomg + "," + randomb +")";


        img = document.getElementById('alien1');
        img2 = document.getElementById('alien2');
        img3 = document.getElementById('alien3');
        img4 = document.getElementById('alien4');


        if(results[0].label == "Clap") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'alien-03.png';
            img3.src = 'aliens-04.png';
        }  else if (results[0].label == "Bell"){
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.gif';
        img2.src = 'alien-03.png';
        img3.src = 'aliens-04.png';
        
    } else if (results[0].label == "Snapping")  {
           img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'alien-03.gif';
            img3.src = 'aliens-04.png';
    }else { 
        img.src = 'aliens-01.png';
         img1.src = 'aliens-02.png';
         img2.src = 'alien-03.png';
         img3.src = 'aliens-04.gif';
    }
}

}