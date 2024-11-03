var images = [];
for (var i = 0; i < 4; i++) {
    images[i] = new Image();
    images[i].src = "Anh/" + i +"jpg"; 
}

var index = 0;
function next() {
    alert("hhh");
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
}