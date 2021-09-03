
function updateCaseNumber(isIncreasing){

    const caseInput = document.getElementById('case-number');

    let  caseNumber = caseInput.value ;
    
    
    // caseInput.value = parseInt(caseNumber) + 1 ;

    if (isIncreasing  == true   ){
        caseNumber = parseInt(caseNumber) + 1 ;
    }

    else if  (caseNumber > 0) {

    caseNumber = parseInt(caseNumber)  - 1 ; 
    }
caseInput.value = caseNumber;

//  update case total 

const  caseTotal = document.getElementById('case-total');

caseTotal.innerText = caseNumber * 59 ;
    
}









// For increasing 

document.getElementById('case-plus') .addEventListener('click' , function() {



// // const caseInput = document.getElementById('case-number');

// // const caseNumber = caseInput.value ;


// // caseInput.value = parseInt(caseNumber) + 1 ;
  updateCaseNumber(true);

});





// console.log('this is another file')
//  for minus or decreasing 


document.getElementById('case-minus').addEventListener('click' ,function(){

// const caseInput = document.getElementById('case-number');

// const caseNumber = caseInput.value;

// caseInput.value = parseInt(caseNumber)  - 1 ; 

// console.log(caseNumber);


updateCaseNumber(false);

});

