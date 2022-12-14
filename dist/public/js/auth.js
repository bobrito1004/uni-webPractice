async function save() {
  const email = document.getElementById('formEmail').value;
  const pass = document.getElementById('formMess').value;
  const body = {
    formFields: [
      { id: 'email', value: email },
      { id: 'password', value: pass },
    ],
  };
  const bodyJson = JSON.stringify(body);
  console.log(bodyJson);

  await fetch('/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: bodyJson,
  })
    .then((resp) => {
      console.log(resp);
      if (resp.status !== 200) {
        console.log('Error');
      }
      return resp.json();
    })
    .then((resp) => {
      console.log(resp);
      if (resp.status === 'OK') {
        location.replace('/');
      } else {
        console.log('Error');
      }
    });
}

async function login() {
  const email = document.getElementById('formEmail').value;
  const pass = document.getElementById('formMess').value;
  const body = {
    formFields: [
      { id: 'email', value: email },
      { id: 'password', value: pass },
    ],
  };
  const bodyJson = JSON.stringify(body);
  console.log(bodyJson);

 await fetch('/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: bodyJson,
  })
    .then((resp) => {
      console.log(resp);
      if (resp.status !== 200) {
        console.log('Error');
      }
      return resp.json();
    })
    .then((resp) => {
      console.log(resp);
      if (resp.status === 'OK') {
        location.replace('/');
      } else {
        console.log('Error');
      }
    });
}

async function ex() {
  await fetch('/auth/signout', {
    method: 'POST',
  }).then((res) => console.log(res));
}