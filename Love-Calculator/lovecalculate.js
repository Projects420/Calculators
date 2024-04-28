function love() {
    let f = document.getElementById("first").value;
    let s = document.getElementById("second").value;
    if (f && s) {
      let total = Math.floor(Math.random() * 100);
      s = f + s;
      if (localStorage.getItem(s)) {
        total = localStorage.getItem(s);
      } else {
        localStorage.setItem(s, total);
      }
      document.getElementById("result").innerText = total;
    } else {
      alert("Please Enter Valid Name");
    }
  }