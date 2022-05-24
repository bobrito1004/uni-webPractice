async function doesSessionExist() {
  console.log(supertokens);
  if (await supertokens.doesSessionExist()) {
    // Nothing
  } else {
    location.replace('http://localhost:12345/login');
  }
}

doesSessionExist().then(() => console.log('Hello'));