var input = document.getElementById("input");
var EncryptValue = document.getElementById("EncryptValue");
var sy = document.getElementById("sy");
var Decrypt = [];
EncryptValue.addEventListener("click", () => {
    sy.style.display = "block";
    var asciiarry = [];
    var partasciiarry = [];
    var inputValue = input.value;
    console.log(inputValue);
    for (var i = 0; i < inputValue.length; i++) {
        asciiarry.push(inputValue.charCodeAt(i))
    }
    console.log(asciiarry);
    for (let i = 0; i < asciiarry.length; i++) {
        var first = asciiarry[i];
        var firststring = first.toString()
        var a;
        var b;
        var c;
        var d;
        for (let i = 0; i < firststring.length; i++) {
            if (firststring.length >= 3) {
                a = firststring[i];
                b = firststring[i + 1]
                c = a.toString() + b.toString()
                d = firststring[i + 2]
                partasciiarry.push(c)
                partasciiarry.push(d)
                break;
            } else {
                partasciiarry.push(firststring[i]);
            }
        }
    }
    console.log(partasciiarry);
    var R = [];
    for (let i = 0; i < partasciiarry.length; i = i + 2) {
        var M = Math.floor(partasciiarry[i]);
        var T = Math.floor(partasciiarry[i + 1]);
        var Re = M * (T + 2);
        R.push(Re);
    }
    console.log(R);
    var subtract = R.map(function (num, i) {
        return Math.abs(asciiarry[i] - num);
    });
    var CordWordArry = ["Zero", "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"];
    console.log(subtract);
    var encryptArry = [];
    for (let i = 0; i < subtract.length; i++) {
        if (subtract[i] >= 26) {
            var Firstcar = subtract[i].toString();
            for (let i = 0; i < Firstcar.length; i++) {
                console.log(CordWordArry[Firstcar[i]]);
                encryptArry.push(CordWordArry[Firstcar[i]]);
            }
        } else {
            console.log("Zero" + " " + CordWordArry[subtract[i]]);
            encryptArry.push("Zero" + " " + CordWordArry[subtract[i]])
        }
    }
    console.log(encryptArry);
    var newarryDe = R.map(function (num, i) {
        return subtract[i] + num;
    });
    console.log(newarryDe);
    for (let i = 0; i < newarryDe.length; i++) {
        console.log(String.fromCharCode(newarryDe[i]));
        Decrypt.push(String.fromCharCode(newarryDe[i]));
    }
    var ul = document.getElementById("firstul")
    encryptArry.forEach(function (e) {
        var li = document.createElement("li");
        li.innerText = e;
        ul.append(li)
    });
});

var DecryptValue = document.getElementById("DecryptValue").addEventListener("click", ()=>{
        if (Decrypt.length === 0) {}else{
            var De = document.getElementById("De").style.display = "block";
        }
        console.log(Decrypt.join(''));
        var ptext = document.getElementById("ptext").innerText = Decrypt.join('');
})