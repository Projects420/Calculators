function cal(n) {
    r.value += n;
  }
  function calculate() {
    var finalnumber = r.value;
    var finalresult = eval(finalnumber);
    r.value = finalresult;
  }
  function clr() {
    r.value = "";
  }
  function delet(){
    r.value = r.value.slice(0,-1);
  }