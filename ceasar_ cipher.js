const cipherBreaker = (cipher, shift) => {
    const charsUpArray = ['A','B','C','D','E','F','G','H','I','J',
        'K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const charsLowArray = ['a','b','c','d','e','f','g','h','i','j',
        'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const cipherSplit = cipher.split('');
    const tabOfIndex = [];
    const breakCipher = [];
    let readyTekst = '';

    if (cipher === cipher.toUpperCase()) {

        cipherSplit.forEach(element => {
            if(element === ' '){
                tabOfIndex.push(27);
            }
            if( charsUpArray.includes(element) === true){
                if(charsUpArray.indexOf(element)+shift < 26){
                    tabOfIndex.push(charsUpArray.indexOf(element)+shift);
                }else{
                    let div = 25-charsUpArray.indexOf(element);
                    let newShift = shift-div;
                    tabOfIndex.push(newShift-1);
                }
            }
        })

        for(let i = 0; i < tabOfIndex.length; i++){
            breakCipher.push(charsUpArray[tabOfIndex[i]]);
        }

    } else {

        cipherSplit.forEach(element => {
            if(element === ' '){
                tabOfIndex.push(27);
            }
            if( charsLowArray.includes(element) === true){
                if(charsLowArray.indexOf(element)+shift < 26){
                    tabOfIndex.push(charsLowArray.indexOf(element)+shift);
                }else{
                    let div = 25-charsLowArray.indexOf(element);
                    let newShift = shift-div;
                    tabOfIndex.push(newShift-1);
                }
            }
        })

        for(let i = 0; i < tabOfIndex.length; i++){
            breakCipher.push(charsLowArray[tabOfIndex[i]]);
        }
    }

    for(let i = 0; i < breakCipher.length; i++){
        if(breakCipher[i] === undefined){
            breakCipher[i] = ' ';
        }
    }

    readyTekst = breakCipher.join();

    for (let i = 0; i < readyTekst.length; i++){
        readyTekst = readyTekst.replace(',','');
    }

    return readyTekst;
}



let cipherUp = 'XFO OXFA LK MBXOI EXOYLO U QEFP FP KLQ AOFII';
let cipherLow = cipherUp.toLowerCase();
let sentence = 'WP NSTQQCP OP GTRPYPCP PDE FY DJDEPXP OP NSTQQCPXPYE AZWJLWASLMPETBFP';
let sentenceLow = sentence.toLowerCase();
let shift = 3;
let shift2 = 15;

console.log(cipherBreaker(cipherUp,shift));
console.log(cipherBreaker(sentence, shift2));
console.log(cipherBreaker(cipherLow,shift));
console.log(cipherBreaker(sentenceLow,shift2));
