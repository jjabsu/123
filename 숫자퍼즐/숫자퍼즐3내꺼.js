//단어랜덤
var words = 'apple,linux,javascript,tutorial,codesquad,baby,girlfriend,legend'
var words_arr = words.split(",")

var choose = function () {
    var idx = Math.floor(Math.random() * words_arr.length)
    return words_arr[idx]
}

var word1 = choose();
var word1_arr = word1.split("");                        //단어배열

//check
var check = function () {
    if (word1 === word1_arr.join('')) {
        document.getElementById("check").innerHTML = "일치합니다."
    } else {
        document.getElementById("check").innerHTML = "불일치합니다."
    }
}

//버튼만들기
var word1_div = document.getElementById("word1")
word1_div.innerHTML = word1

var word2_div = document.getElementById("word2")
var btn_arr = [];                                         //버튼배열

for (var i = 0; i < word1.length; i++) {
    var btn = document.createElement("button")
    btn.innerHTML = word1[i]
    word2_div.appendChild(btn)
    btn_arr.push(btn)
}

//progress
// 한 문제를 맞추면 다음 문제를 출제한다.
// 한 문제를 맞출 때마다 상단에 O를 하나씩 추가한다.
// 세 문제를 맞추면 Thank you for playing! 문구를 표시한다.
var progress = document.getElementById('progress')



//배열이용

var rshift = function () {
    var last = word1_arr.pop();
    word1_arr.unshift(last)

    for (var i = 0; i < word1.length; i++) {
        btn_arr[i].innerHTML = word1_arr[i]
    }
    check();
};

var lshift = function () {
    var first = word1_arr.shift();
    word1_arr.push(first)

    for (var i = 0; i < word1.length; i++) {
        btn_arr[i].innerHTML = word1_arr[i]
    }
    check();
};

// var swap = function () {
//     word1_arr.reverse()
//     for (var i = 0; i < word1.length; i++) {
//         btn_arr[i].innerHTML = word1_arr[i]
//     }
//     check();
// };

var swap = function () {
    var temp = [];
    while (word1_arr.length != 0) {
        var s = word1_arr.pop()
        temp.push(s)
    }

    word1_arr = temp

    for (var i = 0; i < word1.length; i++) {
        btn_arr[i].innerHTML = word1_arr[i]
    }
    check();
};

// shuffle
var shuffle = function () {
    var toggle = Math.floor(Math.random() * 2) === 0

    if (toggle) {
        swap();
    };

    var n = Math.floor(Math.random() * word1.length);

    for (var i = 0; i < n; i++) {
        rshift();
    }
}
shuffle();
