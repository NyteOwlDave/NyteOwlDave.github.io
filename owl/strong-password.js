
function generateStrongPassword( length = 16 ) {

  // Define the strict character pools
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  // Combine all characters for general pool
  const allChars = uppercase + lowercase + numbers + symbols;

  // Ensure the password length is reasonable
  if (length < 12) {
    throw new Error("Password length should be at least 12 characters for strong security.");
  }

  // Cryptographically Secure Pseudo-Random Number Generator (CSPRNG)
  const getRandomUint32 = () => {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0];
  };

  let password = [];

  // 1. Guarantee at least one character from each required set to prevent bad luck
  password.push(uppercase[getRandomUint32() % uppercase.length]);
  password.push(lowercase[getRandomUint32() % lowercase.length]);
  password.push(numbers[getRandomUint32() % numbers.length]);
  password.push(symbols[getRandomUint32() % symbols.length]);

  // 2. Fill the remaining length of the password from the unified pool
  for (let i = password.length; i < length; i++) {
    password.push(allChars[getRandomUint32() % allChars.length]);
  }

  // 3. Shuffle the array using Durstenfeld shuffle to remove structure predictability
  for (let i = password.length - 1; i > 0; i--) {
    const j = getRandomUint32() % (i + 1);
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join("");
}

// Example Usage:
// console.log( generateStrongPassword( 16 ) );


