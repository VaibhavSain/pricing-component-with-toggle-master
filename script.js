document.getElementById('toggleSwitch').addEventListener('change', function() {
    const valueDiv1 = document.getElementById('rate1');
    const valueDiv2 = document.getElementById('rate2');
    const valueDiv3 = document.getElementById('rate3')

    if (this.checked) {
         valueDiv1.innerText  = '$24.99'; 
        valueDiv2.innerText =    '$19.99';         
        valueDiv3.innerText =     '$39.99';        
    } else
        valueDiv1.innerText =     '$249.99';           
        valueDiv2.innerText =     '$199.99';           
        valueDiv3.innerText =      '$399.99';          
    });