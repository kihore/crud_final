var selectedRow = null

function onFormSubmit() {
    
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
        }
        else {
            updateRecord(formData);
        }
        resetForm();
        
}

function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["surname"] = document.getElementById("surname").value;
    formData["gender"]= document.querySelector('input[name=gender]:checked').value;
    formData["phone"] = document.getElementById("phone").value;
    formData["hobby"] = document.getElementById("hobby").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
   let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
   let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.surname;
   let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phone;
   let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.hobby;
    let cell6 = newRow.insertCell();
    cell6.innerHTML =  `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("phone").value = "";
    var gender = document.getElementsByClassName("gender");
    for(let index of gender)
        index.checked = false;
    document.getElementById("hobby").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("surname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
    var gender = selectedRow.cells[3].innerHTML;
    if(gender=="Male")
        document.getElementById("male").checked=true;
    else if(gender=='female') {
        document.getElementById("female").checked=true;
    } else {
        document.getElementById("others").checked=true;
    }
    document.getElementById("hobby").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.surname;
    selectedRow.cells[2].innerHTML = formData.phone;
    selectedRow.cells[3].innerHTML = formData.gender;
    selectedRow.cells[4].innerHTML = formData.hobby;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        let row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
      resetForm();
    }
}
function isphone(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;

    return true;
}
function myFunction() {
   
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("employeeList");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  


















