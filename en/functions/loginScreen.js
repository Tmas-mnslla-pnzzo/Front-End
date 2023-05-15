function toString(l){
    let h = ""
    let i = 0
    let total = l.length
    while (i < total) {
        if (i!=(total-1)){
            h=h+l[i]+" "
        } else {
            h=h+l[i]
        }   
        i=i+1
    }
    return h
}

const abc = {
    'A': 78,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
    'F': 5,
    'G': 6,
    'H': 7,
    'I': 8,
    'J': 9,
    'K': 10,
    'L': 11,
    'M': 12,
    'N': 13,
    'Ñ': 14,
    'O': 15,
    'P': 16,
    'Q': 17,
    'R': 18,
    'S': 19,
    'T': 20,
    'U': 21,
    'V': 22,
    'W': 23,
    'X': 24,
    'Y': 25,
    'Z': 26,
    'a': 27,
    'b': 28,
    'c': 29,
    'd': 30,
    'e': 31,
    'f': 32,
    'g': 33,
    'h': 34,
    'i': 35,
    'j': 36,
    'k': 37,
    'l': 38,
    'm': 39,
    'n': 40,
    'ñ': 41,
    'o': 42,
    'p': 43,
    'q': 44,
    'r': 45,
    'd': 46,
    's': 47,
    't': 48,
    'u': 49,
    'v': 50,
    'w': 51,
    'x': 52,
    'y': 53,
    'z': 54,
    '' : 55,
    '.': 56,
    '@': 57,
    '"': 58,
    ':': 59,
    '/': 60,
    '-': 61,
    '_': 62,
    '1': 63,
    '2': 64,
    '3': 65,
    '4': 66,
    '5': 67,
    '6': 68,
    '7': 69,
    '8': 70,
    '9': 71,
    '0': 72,
    '{': 73,
    '}': 74,
    '=': 75,
    '¿': 76,
    '?': 77
}
const cba = {
    78: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
    6: "G",
    7: "H",
    8: "I",
    9: "J",
    10: "K",
    11: "L",
    12: "M",
    13: "N",
    14: "Ñ",
    15: "0",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z",
    27: "a",
    28: "b",
    29: "c",
    30: "d",
    31: "e",
    32: "f",
    33: "g",
    34: "h",
    35: "i",
    36: "j",
    37: "k",
    38: "l",
    39: "m",
    40: "n",
    41: "ñ",
    42: "o",
    43: "p",
    44: "q",
    45: "r",
    46: "d",
    47: "s",
    48: "t",
    49: "u",
    50: "v",
    51: "w",
    52: "x",
    53: "y",
    54: "z",
    55: " ",
    56: ".",
    57: "@",
    58: '"',
    59: ':',
    60: '/',
    61: '-',
    62: '_',
    63: '1',
    64: '2',
    65: '3',
    66: '4',
    67: '5',
    68: '6',
    69: '7',
    70: '8',
    71: '9',
    72: '0',
    73: '{',
    74: '}',
    75: '=',
    76: '¿',
    77: '?'
}

function ciff_rsa(t,n1,n2,e){
    let text = t.split("")
    var c = []

    for (var i in text) {
        c.push(abc[text[i]]);
    }

    var c2 = []

    for (var j in c) {
        c2.push((c[j]**e)%(n1*n2));
    }
    return c2
}

function desciff_rsa(l,n1,n2,e){
    var l2=[]
    const z = expPri(n1,n2,e)
    for (var i in l) {
        l2.push(mod(l[i],z,(n1*n2)));
    }
    var l3=[];
    for (var k in l2) {
        l3.push(cba[l2[k]]);
    }
    return l3
}

function mod(num,exp,a){
    let u = BigInt(num)**BigInt(exp);
    let u2 = BigInt(u).toString();
    let res = 0;
    for(let i = 0; i < u2.length; i++)
        res = (res * 10 +
            parseInt(u2[i])) % a;
    return res;
}

function expPri(n1,n2,e){
    var d = [];
    var list = [...Array(10).keys()]
    const z = (n1-1)*(n2-1)
    for (var j in list) {
        if ((((j)*z)+1)%e==0){
            d.push(((j)*z)+1)
        }
    }
    
    return d[0]/e
}





function aprove(m,p,m0,p0){
    if (m==m0 && p==p0) {
        console.log("si")
        document.body.style.overflow = 'visible';
    } else {
        console.log("no")
        document.getElementById('svg1').src = '../svg/alert-triangle.svg';
        document.getElementById('alert').innerText  = 'Incorrect credentials.';
    }
}

function loginCreateSend(){
    if (document.getElementById('but2').innerText =='Log In'){
        document.getElementById('svg1').src = '';
        document.getElementById('alert').innerText = '';
        document.getElementById('inpu1').value = '';
        document.getElementById('inpu2').value = '';
        document.getElementById('text1').innerHTML = "Create new account.";
        document.getElementById('inpu1').placeholder = "Your Email";
        document.getElementById('inpu2').placeholder = "Your Password";
        document.getElementById('logscreen').style.height = '395px';
        document.getElementById('botones').style.top = '90px';
        document.getElementById('but1').innerText = 'Back';
        document.getElementById('but2').innerText = 'Create';
        document.getElementById('text3').style.display = 'none';
        document.getElementById('text2').style.top = '50px';
        document.getElementById('div3').style.display = 'inline';
        document.getElementById('alert').style.display = 'inline';
        document.getElementById('forgot').text = 'Show password'
        document.getElementById('inpu2').type = 'password'
        document.getElementById('inpu3').type = 'password'
    } else if (document.getElementById('but2').innerText =='Send'){
        const emailF = document.getElementById('inpu1').value;

        if (emailF==''){
            document.getElementById('svg1').src = '../svg/alert-triangle.svg';
            document.getElementById('alert').innerText  = 'Input are empty...';
        } else if (emailF.length<=10) {
            document.getElementById('svg1').src = '../svg/alert-triangle.svg';
            document.getElementById('alert').innerText  = 'Your email address is a little short.';
        } else if (emailF.length>=50){
            document.getElementById('svg1').src = '../svg/alert-triangle.svg';
            document.getElementById('alert').innerText  = 'Sorry. Your email address is not permited';
        } else {
            document.getElementById('svg1').src = '';
            document.getElementById('alert').innerText = '';
        }

    } else {
        const nUser = document.getElementById('inpu1').value;
        const nPass = document.getElementById('inpu2').value;
        const nPass2 = document.getElementById('inpu3').value;

        if (nUser=='' && nPass=='' && nPass2==''){
            document.getElementById('svg1').src = '../svg/alert-triangle.svg';
            document.getElementById('alert').innerText  = 'Inputs are empty...';
        } else if (nUser.length<=10 && nUser.length>=1) {
            document.getElementById('svg1').src = '../svg/alert-triangle.svg';
            document.getElementById('alert').innerText  = 'Your email address is a little short.';
        } else if (nUser.length>=50){
            document.getElementById('svg1').src = '../svg/alert-triangle.svg';
            document.getElementById('alert').innerText  = 'Sorry. Your email address is not permited';
        } else if (nUser==''){
            document.getElementById('svg1').src = '../svg/alert-triangle.svg';
            document.getElementById('alert').innerText  = 'Some inputs are empty';  
        } else if (nPass.length<10 && nPass.length>=1){
            document.getElementById('svg1').src = '../svg/alert-triangle.svg';
            document.getElementById('alert').innerText  = 'Your password is short. Min 10';
        } else if (nPass.length>=80){
            document.getElementById('svg1').src = '../svg/alert-triangle.svg';
            document.getElementById('alert').innerText  = 'Your password is very large. Max 80';
        } else if (nPass==''){
            document.getElementById('svg1').src = '../svg/alert-triangle.svg';
            document.getElementById('alert').innerText  = 'Some inputs are empty';
        } else if (nPass!=nPass2){
            document.getElementById('svg1').src = '../svg/alert-triangle.svg';
            document.getElementById('alert').innerText  = 'The passwords not coicided'
        } else if (nUser=='' || nPass=='' || nPass2==''){
            document.getElementById('svg1').src = '../svg/alert-triangle.svg';
            document.getElementById('alert').innerText  = 'Some inputs are empty';
        } else {
            document.getElementById('svg1').src = '';
            document.getElementById('alert').innerText = '';
        }
    }
}


function backEnter(){
    if (document.getElementById('but1').innerText =='Back'){
        document.getElementsByClassName('alert')[0].style.paddingTop = '0px';
        document.getElementsByClassName('input')[0].style.top = '0px';
        document.getElementById('inp1').style.height = '';
        document.getElementById('forgot').text = 'Show password'
        document.getElementById('svg1').src = '';
        document.getElementById('alert').innerText = '';
        document.getElementById('div2').style.display = 'block';
        document.getElementById('text1').innerHTML = "Wait! You need to log in first.";
        document.getElementById('inpu1').placeholder = "Username or Email";
        document.getElementById('inpu2').placeholder = "Password";
        document.getElementById('logscreen').style.height = '325px';
        document.getElementById('botones').style.top = '65px';
        document.getElementById('but1').innerText = 'Enter';
        document.getElementById('but2').innerText = 'Log In';
        document.getElementById('text2').style.position = 'relative';
        document.getElementById('text2').style.top = '25px';
        document.getElementById('text2').style.display = 'block';
        document.getElementById('text3').style.display = 'block';
        document.getElementById('div3').style.display = 'none';
    }
    else {
        const user = document.getElementById('inpu1').value;
        const pass = document.getElementById('inpu2').value;
        const user0 = toString(ciff_rsa(user,13,31,7));
        const pass0 = toString(ciff_rsa(pass,13,31,7));


        if (user=='' && pass==''){
            document.getElementById('svg1').src = '../svg/alert-triangle.svg';
            document.getElementById('alert').innerText  = 'Inputs are empty...';
        } else {
            if (user=='' || pass==''){
                document.getElementById('svg1').src = '../svg/alert-triangle.svg';
                document.getElementById('alert').innerText  = 'Some inputs are empty...';
                console.log("reeeee")
            } else {
                console.log("rwrer")
                document.getElementById('svg1').src = '';
                document.getElementById('alert').innerText = '';}  
                fetch('http://localhost:3002/')
                .then(response => response.json()) 
                .then(json => 
                    aprove(json[1]['mail'],json[1]['pass'],user0,pass0 )
                ) 
                
                .catch(err => console.log(err))    
        }
    }
}

function show(){
    if (document.getElementById('forgot').text == 'Show password'){
        document.getElementById('forgot').text = 'Hide password';
        document.getElementById('inpu2').type = 'text';
        document.getElementById('inpu3').type = 'text';
    } else {
        document.getElementById('forgot').text = 'Show password';
        document.getElementById('inpu2').type = 'password';
        document.getElementById('inpu3').type = 'password';
    }
}

function forgot1(){
    document.getElementById('svg1').src = '';
    document.getElementById('alert').innerText = '';
    document.getElementById('inpu1').value = '';
    document.getElementById('text1').innerHTML = "You will receive an email to change <br> your password.";
    document.getElementById('inpu1').placeholder = "Email";
    document.getElementById('div2').style.display = 'none';
    document.getElementById('text2').style.display = 'none';
    document.getElementById('text3').style.display = 'none';
    document.getElementById('logscreen').style.height = '270px';
    document.getElementById('botones').style.top = '40px';
    document.getElementById('but1').innerText = 'Back';
    document.getElementById('but2').innerText = 'Send';
    document.getElementsByClassName('alert')[0].style.paddingTop = '30px';
    document.getElementsByClassName('input')[0].style.top = '15px';
}

