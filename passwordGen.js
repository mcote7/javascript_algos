const VALID_CHARACTERS = [ 
  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], ['!','@','#','$','%','^','&','&','*'] ];

const NEW_PASSWAORD_LENGTH = 16;

const generateNewPassword = (characters, passwordLen) => {

  const getRandom = (param) => {
    return Math.floor(Math.random()*param);
  };

  let newPassword = "";
  const charactersLen = characters.length;

  for(let i = 0; i < passwordLen; i++) {

    let random_1st = getRandom(charactersLen);
    let subChars = characters[random_1st];

    if(characters.indexOf(subChars) === 3) {
      subChars = characters[getRandom(charactersLen)];
    }

    let random_2nd = getRandom(subChars.length);
    newPassword += subChars[random_2nd];
  }

  return newPassword;
};

console.log("new password", generateNewPassword(VALID_CHARACTERS, NEW_PASSWAORD_LENGTH));