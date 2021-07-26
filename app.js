const semi_input =document.getElementById( 'semi_input');
const credit_input=document.getElementById( 'credit_input');
const SGPA_input =document.getElementById( 'SGPA_input');
const add_CGPA =document.getElementById( 'add_CGPA');
const btn_reset =document.getElementById( 'btn_reset');
const btn_success =document.getElementById( 'btn_success');
const dynamic__cgpa =document.getElementById( 'dynamic__cgpa');
const cgpa_text =document.getElementById( 'cgpa_text');
const tbody =document.getElementById( 'tbody');
const table =document.getElementById( 'table');
const calc_gp =document.getElementById('calc_gp');
const tfoot =document.getElementById('tfoot');

let gpArry = [];



function cgpacalculate(){
    let SGPA_input,credit_input;
    ProductOfcredit_inputAndSGPA_input = 0,
    sumOfProductOfcredit_inputAndSGPA_input = 0;
    ProductOfcredit_inputAndSGPA_input+= SGPA_input * credit_input;
    sumOfProductOfcredit_inputAndSGPA_input += ProductOfcredit_inputAndSGPA_input;

    const tr = document.createElement("tr");
    tdTotalcredit_input = document.createElement("td");
    tdSGPA_input = document.createElement("td");
    SGPA = sumOfProductOfcredit_inputAndSGPA_input / tdTotalcredit_input;
   console.log(SGPA);
    tr.appendChild(tdTotalcredit_input);
    tr.appendChild(tdSGPA_input);
}

add_CGPA.addEventListener("click", () => {
    if (
        credit_input.value === "" ||
        semi_input.value <= 0 ||
        SGPA_input.selectedIndex === 0
    ) {
      alert("Wrong input,check and try again");
    } else {
      const tr = document.createElement("tr");
      const tdsemi_input = document.createElement("td");
      tdsemi_input.innerHTML = semi_input.value;
      const tdcredit_input = document.createElement("td");
      tdcredit_input.innerHTML = credit_input.value;
      const tdSGPA_input = document.createElement("td");
      tdSGPA_input.innerHTML = SGPA_input.value;
      tr.appendChild(tdsemi_input);
      tr.appendChild(tdcredit_input);
      tr.appendChild(tdSGPA_input);
      tbody.appendChild(tr);

    
      semi_input.value = "";
      credit_input.value = "";
      SGPA_input.value = "";
    }
  });


  function showMessage( SGPAvalue){
    if(SGPAvalue < 4.00){
        return "Outstanding"
    } else if(SGPAvalue >= 3.80 ){
        return "Excellent"
    } else if(SGPAvalue > 3.50){
        return "Very good"
    } else if(SGPAvalue > 3.00){
        return "Average"
    } else if(SGPAvalue > 2.50 ){
        return "SGPAvalueBellow Average"
    }
    else if(SGPAvalue > 00 ){
        return "Fail"
    }
}

btn_reset.addEventListener("click", () => {

    semi_input.value = "";
    credit_input.value = "";
    SGPA_input.value="";

});


calc_gp.addEventListener('click', cgpacalculate );
    
