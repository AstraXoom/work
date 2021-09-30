function encrypt(oAlpabet, nAlpabet, string) {
    let S = [];
    for (let i = 0; i < string.length; i++){
        for (let j = 0; j < oAlpabet.length; j++){
            if (string[i] == oAlpabet[j]) {
                S.push(nAlpabet[j]);
            }
        }
    }
    return S.join('');
}




function reader(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        let fileText = reader.result;
        let fileTextWithoutPunctuationMarks = fileText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"']/g,'');
        let fileTextWithoutPunctuationMarksAndSpace = fileTextWithoutPunctuationMarks.replace(/\s/g, '');
        let ftwpmasCombineLetters = fileTextWithoutPunctuationMarksAndSpace.replace(/ё/g,'е').replace(/й/g,'и').replace(/ъ/g,'ь');
        let ftwpmasUpperCase =  ftwpmasCombineLetters.toUpperCase();
        let temp, withThis;
        let oldAlpabet = ['А','Б','В','Г','Д','Е','Ж','З','И','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы','Э','Ю','Я'];
        let newAlpabet = ['М','Г','Ш','Ф','Е','Р','Э','Ч','Ь','Л','Ы','Н','Я','А','Д','П','Т','У','С','Ц','И','Б','З','В','К','Х','Щ','Ж','О','Ю'];
        let arr1 = new Map();
        let arr2 = new Map();
        let S1 = encrypt(oldAlpabet,newAlpabet,ftwpmasUpperCase);
        let coincidences = 0;
        for (let i = 0; i < S1.length; i++) {
            if (S1[i] == ftwpmasUpperCase[i]) {
                coincidences++;
            }
        }
        for (let i = 0; i < oldAlpabet.length; i++) {
            let f = 0;
            for(let k = 0; k < ftwpmasUpperCase.length; k++) {
                if (ftwpmasUpperCase[k] == oldAlpabet[i]) {
                    f++
                }
            }
            arr1.set(oldAlpabet[i],f);
        }
        for (let i = 0; i < oldAlpabet.length; i++) {
            let f = 0;
            for(let k = 0; k < S1.length; k++) {
                if (S1[k] == newAlpabet[i]) {
                    f++
                }
            }
            arr2.set(newAlpabet[i],f);
        }
        console.log(fileText.length);
        console.log(ftwpmasUpperCase.length);
        console.log(coincidences);
        console.log(S1);
        console.log(ftwpmasUpperCase);
        console.log(arr1);
        console.log(arr2);
    }
    reader.onerror = () => {
        console.log(reader.error);
    }
}
