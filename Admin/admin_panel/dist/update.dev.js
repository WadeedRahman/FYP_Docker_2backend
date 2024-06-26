"use strict";

function showUpdateOptions() {
  var medicineId = document.getElementById('medicineId').value;

  if (medicineId) {
    document.getElementById('updateOptions').style.display = 'block';
  } else {
    alert('Please enter a valid Medicine ID');
  }
}

function showUpdateDialog(field) {
  var dialogContent = '';

  switch (field) {
    case 'name':
      dialogContent = "\n                <h3>Update Medicine Name</h3>\n                <label for=\"oldName\">Current Name:</label>\n                <input type=\"text\" id=\"oldName\" name=\"oldName\">\n                <label for=\"newName\">New Name:</label>\n                <input type=\"text\" id=\"newName\" name=\"newName\">\n                <button onclick=\"confirmUpdate('name')\">Confirm</button>\n            ";
      break;

    case 'price':
      dialogContent = "\n                <h3>Update Medicine Price</h3>\n                <label for=\"oldPrice\">Current Price:</label>\n                <input type=\"number\" id=\"oldPrice\" name=\"oldPrice\" step=\"0.01\">\n                <label for=\"newPrice\">New Price:</label>\n                <input type=\"number\" id=\"newPrice\" name=\"newPrice\" step=\"0.01\">\n                <button onclick=\"confirmUpdate('price')\">Confirm</button>\n            ";
      break;

    case 'image':
      dialogContent = "\n                <h3>Update Medicine Image</h3>\n                <label for=\"oldImage\">Current Image:</label>\n                <input type=\"file\" id=\"oldImage\" name=\"oldImage\" disabled>\n                <label for=\"newImage\">New Image:</label>\n                <input type=\"file\" id=\"newImage\" name=\"newImage\" accept=\"image/*\">\n                <button onclick=\"confirmUpdate('image')\">Confirm</button>\n            ";
      break;

    case 'description':
      dialogContent = "\n                <h3>Update Medicine Description</h3>\n                <label for=\"oldDescription\">Current Description:</label>\n                <textarea id=\"oldDescription\" name=\"oldDescription\" disabled></textarea>\n                <label for=\"newDescription\">New Description:</label>\n                <textarea id=\"newDescription\" name=\"newDescription\"></textarea>\n                <button onclick=\"confirmUpdate('description')\">Confirm</button>\n            ";
      break;

    default:
      return;
  }

  document.getElementById('dialogContent').innerHTML = dialogContent;
  document.getElementById('updateDialog').style.display = 'block';
}

function closeDialog() {
  document.getElementById('updateDialog').style.display = 'none';
}

function confirmUpdate(field) {
  switch (field) {
    case 'name':
      var oldName = document.getElementById('oldName').value;
      var newName = document.getElementById('newName').value;
      console.log("Updating Name from ".concat(oldName, " to ").concat(newName));
      break;

    case 'price':
      var oldPrice = document.getElementById('oldPrice').value;
      var newPrice = document.getElementById('newPrice').value;
      console.log("Updating Price from ".concat(oldPrice, " to ").concat(newPrice));
      break;

    case 'image':
      var newImage = document.getElementById('newImage').files[0];
      console.log("Updating Image to ".concat(newImage.name));
      break;

    case 'description':
      var newDescription = document.getElementById('newDescription').value;
      console.log("Updating Description to ".concat(newDescription));
      break;
  }

  closeDialog();
  alert('Medicine updated successfully!');
}
//# sourceMappingURL=update.dev.js.map
