var rows = 5;
var colNum = 3;
var totalNotes = 12;
var musicScale = ["A","B","C","D","E","F","G"]
var octave = 4;

$(document).ready(function () {

    var synth = new Tone.SimpleSynth({
            "oscillator" : {
                "type" : "square"
            },
            "envelope" : {
                "attack" : 0.01,
                "decay" : 0.2,
                "sustain" : 0.2,
                "release" : 0.2,
            }
        }).toMaster();




/////////draw all the boxes with their notes///////////////
 for (i = 0; i < totalNotes; i++) {

        allBoxes(i);
    }

 ////////////////   


function allBoxes(i) {
    
    // var radius = 100;
    var imageObject = $("<div class='boxes'></div>")

    imageObject.attr('id', 'layer' + i);

    imageObject.mousedown(function (evt) {
    console.log('clicked', imageObject)
       console.log("\""+musicScale[i%musicScale.length]+octave+"\"")
       synth.triggerAttack("\""+musicScale[i%musicScale.length]+"\"", 3);
    })

    imageObject.mouseup(function (evt) {
        console.log('up')
         synth.triggerRelease();
     })
  
    $('body').append(imageObject);
}







});

