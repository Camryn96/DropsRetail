var selectedRow = null


function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow ==null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
		
    }
}

function readFormData() {
    var formData = {};
    formData["itemCode"] = document.getElementById("itemCode").value;
    formData["itemName"] = document.getElementById("itemName").value;
    formData["itemPrice"] = document.getElementById("itemPrice").value;
    formData["itemAvail"] = document.getElementById("itemAvail").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("itemList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.itemCode;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.itemName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.itemPrice;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.itemAvail;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
	
    document.getElementById("Code").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("Price").value = "";
    document.getElementById("Avail").value = "";
    selectedRow = null;
	
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("itemCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("itemName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("itemPrice").value = selectedRow.cells[2].innerHTML;
    document.getElementById("itemAvail").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.code;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.price;
    selectedRow.cells[3].innerHTML = formData.avail;
}

function onDelete(td) {
    if (confirm('If you delete there is NO undo.')) {
        row = td.parentElement.parentElement;
        document.getElementById("itemList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("itemCode").value == "") {
        isValid = false;
        document.getElementById("itemCodeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("itemCodeValidationError").classList.contains("hide"))
            document.getElementById("itemCodeValidationError").classList.add("hide");
    }
    return isValid;

}

