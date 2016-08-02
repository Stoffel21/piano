var rows = 5;
var colNum = 3;
var totalNotes = 12;
var musicScale = ["A", "B", "C", "D", "E", "F", "G"]
var notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
var octave = 2;

$(document).ready(function() {

    // var synth2 = new Tone.SimpleSynth({
    //     "oscillator": {
    //         "type": "pwm",
    //         "modulationFrequency": 0.2
    //     },
    //     "envelope": {
    //         "attack": 0.02,
    //         "decay": 0.5,
    //         "sustain": 0.2,
    //         "release": 2.9,
    //     }
    // }).toMaster();

    var synth = new Tone.MonoSynth({
        "portamento": 0.01,
        "oscillator": {
            "type": "square"
        },
        "envelope": {
            "attack": 0.005,
            "decay": 0.2,
            "sustain": 0.4,
            "release": 1.4,
        },
        "filterEnvelope": {
            "attack": 0.005,
            "decay": 0.1,
            "sustain": 0.05,
            "release": 0.8,
            "baseFrequency": 300,
            "octaves": 4
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

        imageObject.mousedown(function(evt) {
            console.log('clicked', imageObject)
            // console.log("\"" + musicScale[i] + $('#octave-selected').val() + "\"")
                // console.log("\""+musicScale[i]+(octave+1)+"\"")
            if (i <= 6) {

                synth.triggerAttack("\"" + musicScale[i] + ($('#octave-selected').val()) + "\"");
            } else {
                synth.triggerAttack("\"" + musicScale[i] + (($('#octave-selected').val()) + 1) + "\"");
            }
        })

        imageObject.mouseup(function(evt) {
            synth.triggerRelease();
        })

        $('body').append(imageObject);
    }







});
