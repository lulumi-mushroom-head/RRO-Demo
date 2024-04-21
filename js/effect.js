/*  ----------- tab menu ------------*/ 
function openCity(evt, tabPageName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("this-is-tab-page");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("cora-menu");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        
        document.getElementById(tabPageName).style.display = "block";
        evt.currentTarget.className += " active";
      }

/*  ----------- tab menu ------------*/ 


function callBlackMask(){
  const theBkmsk=document.querySelector('.when-exp-blk-msk')
  theBkmsk.style.display="block";
}



/*  ---------------- multi select------------------*/ 
var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "grid";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function showCheckboxes2() {
  var checkboxes = document.getElementById("checkboxes2");
  if (!expanded) {
    checkboxes.style.display = "grid";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function showCheckboxes3() {
  var checkboxes = document.getElementById("checkboxes3");
  if (!expanded) {
    checkboxes.style.display = "grid";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}


/*---------- date picker ------------*/ 
let startDate = document.getElementById('startDate')
let endDate = document.getElementById('endDate')

if(startDate!==null){
  startDate.addEventListener('change',(e)=>{
    let startDateVal = e.target.value
    // document.getElementById('startDateSelected').innerText = startDateVal
  })
}


if(endDate!==null){
endDate.addEventListener('change',(e)=>{
  let endDateVal = e.target.value
  // document.getElementById('endDateSelected').innerText = endDateVal
})  
}