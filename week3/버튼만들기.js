//DOM을 이용해 html 객체추가
var el = document.getElementById('test');

var menu = document.createElement('ul');
menu.id = 'menupan';

var item1 = document.createElement('li');
item1.id = 'menu1';
item1.innerHTML = "설렁탕";

menu.appendChild(item1);
el.appendChild(menu);

//콘솔창에 보여주기 
var readInput = function () {
    var input = document.getElementById("input1")
    console.log(input.value)
}

//JS를 이용해 버튼추가
var btn2 = document.createElement('button') // 버튼이라는 엘리먼트 만들기
btn2.innerHTML = '확인2' //안에 컨텐츠 추가
btn2.onclick = readInput; // 연결해주는 것이기 때문에 readInput , 괄호 쓰면안됨
var test2 = document.getElementById('test2') // 테스트 엘리먼트
test2.appendChild(document.createElement('br'))
test2.appendChild(btn2)






//DOM을 이용해 html 객체추가
var el = document.getElementById('test');

var menu = document.createElement('ul');
menu.id = 'menupan';

var item1 = document.createElement('li');
item1.id = 'menu1';
item1.innerHTML = "설렁탕";

menu.appendChild(item1);
el.appendChild(menu);