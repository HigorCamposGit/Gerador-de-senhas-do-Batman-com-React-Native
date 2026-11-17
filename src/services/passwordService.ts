export default function generatePass(passwordLength: number = 8) {
    let password: string = '';
    let characters: string = 'aA@$#12345679abcdefghijFGHIJLMNOPQWUVXYZT&!';

    for (let index = 0; index < passwordLength; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return password;
}