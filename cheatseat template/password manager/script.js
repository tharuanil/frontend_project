document.querySelector('.btn').addEventListener("click", () =>{

  e.preventDefault()
  console.log("clicked....")
  console.log(username.value, password.value)
  let passwords = localstorage.getItem ("passwords")
  console.log(passwords)

  if(passwords==null){
    let json = []
    json.push({username:username.value, passwords:passwords.value})
    alert ("password saved");
    localStorage.setItem("password", json.stringfy(json))
  }
  else{
    let  json= json.parse (localStorage.getItem("passwords"))
    alert ("password saved");
    localStorage.setItem("password", json.stringfy(json))
  }
})