let cameraBtn = document.getElementById("cameraBtn")
let uploadmodal = document.querySelector(".uploadmodal")
let closeBtn = document.querySelector(".close-modal")

cameraBtn.onclick = function(){
  uploadmodal.style.display = "block"
}
closeBtn.onclick = function(){
  uploadmodal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    uploadmodal.style.display = "none"
  }
}

// some Jquery script: uploading the image and drawing to canvas

var img = new Image();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fileName = '';
const	maxWidth = 430;
const maxHeight = 430;
 
$("#upload-file").on("change", function(){
    var file = document.querySelector('#upload-file').files[0];
    var reader = new FileReader();
    if (file) {
        fileName = file.name;
        reader.readAsDataURL(file);
    }
    reader.addEventListener("load", function () {
        img = new Image();
        img.src = reader.result;
        img.onload = function () {

            $('.upload-area').hide();

        	if (img.width >= maxWidth || img.height >= maxHeight) {

                        // The image is too large,
                        // resize it to fit a 430x430 square!

                        if (img.width > img.height) {

                            // Wide
                            ratio = img.width / maxWidth;
                            canvas.width = maxWidth;
                            canvas.height = img.height / ratio; 
                        } else {

                            // Tall or square
                            ratio = img.height / maxHeight;
                            canvas.height = maxHeight;
                            canvas.width = img.width / ratio;

                        } } else {
                       
            				canvas.width = img.width;
            				canvas.height = img.height;
            			}
         
                    	// Draw the image to the canvas
            				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            				$("#canvas").removeAttr("data-caman-id");

                        //Show the filter and action-buttons containers
                           $('.filterContainer').show();
                           $('.action-buttons').show();
        				}
    }, false);
});

// Save edited image...

$('#download-btn').on('click', function (e) {
    var fileExtension = fileName.slice(-4);
    if (fileExtension == '.jpg' || fileExtension == '.png') {
        var actualName = fileName.substring(0, fileName.length - 4);
    }
    download(canvas, actualName + '-edited.jpg');
});
 
function download(canvas, filename) {
    var  e;
    var lnk = document.createElement('a');
     
    lnk.download = filename;
    lnk.href = canvas.toDataURL("image/jpeg", 0.8);
     
    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        lnk.dispatchEvent(e);
    }
    else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
    }
}

// Image filters: normal editor

$('#normal').on('click', function (e) {
    Caman('#canvas', img, function () {
        this.revert(false);
        this.render (); 
    });
});
 
// Caman JS in-built filters...

$('#clarity').on('click', function (e) {
    Caman('#canvas', img, function () {
        this.revert(false);
        this.clarity().render();
    });
});


$('#crossProcess').on('click', function (e) {
    Caman('#canvas', img, function () {
        this.revert(false);
        this.crossProcess().render();
    });
});

$('#glowingSun').on('click', function (e) {
    Caman('#canvas', img, function () {
        this.revert(false);
        this.glowingSun();
        this.render();
    });
});

$('#herMajesty').on('click', function (e) {
    Caman('#canvas', img, function () {
        this.revert(false);
        this.herMajesty();
        this.render();
    });
});

$('#jarques').on('click', function (e) {
    Caman('#canvas', img, function () {
        this.revert(false);
        this.jarques();
        this.render();
    });
});

$('#nostalgia').on('click', function (e) {
    Caman('#canvas', img, function () {
        this.revert(false);
        this.nostalgia();

        this.newLayer(function () {
        this.setBlendingMode("softLight");
        this.opacity(25);
        this.fillColor('#ec8a00');
        });
        this.render();
    });
});

$('#sunrise').on('click', function (e) {
    Caman('#canvas', img, function () {
        this.revert(false);
        this.sunrise();
        this.render();
    });
});

// filters list ends here ... 

