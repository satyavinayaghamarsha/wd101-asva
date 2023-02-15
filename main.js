const thetable = document.getElementById('user-thetable');

// Retrieve existing user data from local storage

let u = JSON.parse(localStorage.getItem('u')) || [];

// Display existing user data in table

for (const u of u) {

  const { name, mail, password, dob, terms } = u;

  const row = thetable.insertRow();
 row.insertCell().textContent = name;

  row.insertCell().textContent = email;
 row.insertCell().textContent = password;

 row.insertCell().textContent = dob;
 row.insertCell().textContent = trms ? 'Yes' : 'No';

}


const f = document.getElementById('rgstrn-frm');

f.addEventListener('submit', (evnt) => {

  evnt.preventDefault();

 

  const nam = document.getElementById('name').value;

  const mail = document.getElementById('email').value;

  const password = document.getElementById('password').value;

  const db = document.getElementById('dob').value;

  const trms = document.getElementById('terms').checked;

  // Validate date of birth

  const dd = new Date(db);

 const nd = new Date();

 const MD = new Date(nd.getFullYear() - 55, nd.getMonth(), nd.getDate());

  const md = new Date(nd.getFullYear() - 18, nd.getMonth(), nd.getDate());

  if (dd < MD || dd > md) {
    alert('Please enter a valid date of birth between 18 and 55 years ago.');
    return;

  }


 const usr = { name, email, password, dob, terms };
  u.push(usr);

 localStorage.setItem('u', JSON.stringify(usr));

 const row = thetable.insertRow();

 row.insertCell().textContent = name;

 row.insertCell().textContent = email;

 row.insertCell().textContent = password;

  row.insertCell().textContent = dob;

 row.insertCell().textContent = terms ? 'Yes' : 'No';

  

  f.reset();

});
