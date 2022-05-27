async function doesSessionExist() {
  console.log(supertokens);
  if (await supertokens.doesSessionExist()) {
    // Nothing
  } else {
    location.replace('/register');
  }
}

doesSessionExist().then(() => console.log('Hello'));