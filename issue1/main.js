window.onload = function () {
  GetFileInfo();
};

var myArray = [];

function addArray() {
  var theDiv = document.getElementById("myArray");
  for (let i = 0; i < myArray.length; i++) {
    var node = document.createElement("p");
    var textnode = document.createTextNode(`${myArray[i][0].name}`);
    node.appendChild(textnode);
    theDiv.appendChild(node);
  }
}

function clearArray() {
  var parent = document.getElementById("myArray");
  if(parent) {
      parent.innerHTML = "";
      addArray();
  }
}

function GetFileInfo() {
  var fileInput = document.getElementById("fileInput");
  if (fileInput && fileInput.files.length > 0) {
    myArray.push(fileInput.files);
  }

  console.log("myArray ", myArray);
  clearArray();

  //   uncomment it and check the different
  //   var fileInput = document.getElementById("fileInput");
  //   var clonedElement = document.getElementById('fileInput').cloneNode(true);
  //   clonedElement.value = '';
  //   fileInput.replaceWith(clonedElement)
}

function navigate(e) {
  if (e == 0) {
    location.href = "how.html";
  } else {
    location.href = "home.html";
  }
}
