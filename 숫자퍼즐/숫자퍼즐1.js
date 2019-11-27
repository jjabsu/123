var str = document.getElementById("word1").innerHTML // word1의 HELLO 가져오기

var word2 = document.getElementById("word2") // div엘리먼트

// var word_array = str.split("")
var game = {};
game.word = str.split("")
game.btns = []; // 빈 배열


for (var i = 0; i < str.length; i++) {
    var btn = document.createElement("button") // 버튼엘리먼트만들기

    btn.innerHTML = str[i] // 버튼 안에 문자 넣기

    word2.appendChild(btn) // div에 붙이기2

    game.btns.push(btn) // 빈 배열에 버튼 넣기
}

// 별도의 배열을 이용해야겠다고 생각할것

var swap = function (event) {
    console.log("swap")
    game.word.reverse();
    for (var i = 0; i < game.word.length; i++) {
        game.btns[i].innerHTML = game.word[i]
    }
};

var rshift = function (event) {
    console.log("rshift")
    var last = game.word.pop() //이 두줄은 배열을 바꿔줌 
    game.word.unshift(last)    //["E", "L", "L", "O", "H"]

    for (var i = 0; i < game.word.length; i++) {
        game.btns[i].innerHTML = game.word[i] //바뀐 문자배열을 버튼배열의 innerHTML에 넣어줌
    }
};

var lshift = function (event) {
    console.log("lshift")
    var first = game.word.shift()
    game.word.push(first)

    for (var i = 0; i < game.word.length; i++) { // 중복부분 안나오게 해보기
        game.btns[i].innerHTML = game.word[i]
    }
};