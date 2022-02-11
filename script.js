let count = 0;
document.getElementById('input-btn').addEventListener('click', function(){
    const getInput = document.getElementById('input-value');
  if(getInput.value == ''){
      alert('Enter proper Value');
  }
  else{
    count++;
    const tableBody = document.getElementById('table-body');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML= `
    <tr>
    <th scope="row">${count} </th>
    <td class="text-center">${getInput.value}</td>
    <td class="text-center">
    <button id="done-btn" class="btn btn-success status-done-btn">Done</button>
    <button id="delete-btn" class="btn btn-danger status-delete-btn">Delete</button>
    </td>
  </tr>`;
  tableBody.appendChild(tableRow);
  
//clear input value
getInput.value = '';

const doneButton  = document.getElementsByClassName('status-done-btn');
const deleteButton =document.getElementsByClassName('status-delete-btn');


for( const btn of doneButton){
btn.addEventListener('click', function(e){
e.target.parentNode.parentNode.style.textDecoration ="line-through"
})
}
for( const btn of deleteButton){
     btn.addEventListener('click', function(e){
        e.target.parentNode.parentNode.style.display ="none"
    })
  }
  }
});