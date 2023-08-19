
function  generatePassword(){
    password = ''; 
    const alphabets = ['a','b','c','d','e','f','g','h',
                        'i','j','k','l','m','n','o','p',
                        'q','r','s','t','u','v','w','x',
                        'y','z'];
    const upperCase = ['A','B','C','D','E','F','G','H',
                        'I','J','K','L','M','N','O','P',
                        'Q','R','S','T','U','V','W','X',
                        'Y','Z'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const symbols = ['~', '!', '@', '#', '$', '%', '&', '*', '_', '-'];

    function getRandomItem(list){
        return list[Math.floor((Math.random() * (list.length - 1)) + 1)];
    };
    randomLength = getRandomItem([12, 10, 8, 8, 12, 10]);
    let numList = [0, 1, 2, 3];
    let randomNum = getRandomItem(numList);
    for (let i=0; i< 4; ++i){
        num = randomNum;
        let list = [getRandomItem(alphabets), getRandomItem(symbols), getRandomItem(upperCase), getRandomItem(numbers)] 
        password += list[num];
        numList.splice(num, 1);
    };
    for (let i=0; i< randomLength; i+=2){
        password += getRandomItem(getRandomItem([alphabets, numbers, upperCase, symbols, alphabets, numbers]));
        password += getRandomItem(getRandomItem([alphabets, symbols, symbols, numbers, alphabets, upperCase]));
    };  
    return password
};

document.getElementById('create-pw-btn').addEventListener('click', () => {
    document.getElementById('password').value = generatePassword();
});
document.getElementById('copy-pw-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(
        document.getElementById('password').value
    );
});

