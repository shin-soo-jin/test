// 변수선언
const btns = document.querySelectorAll(".btns li");
const boxes = document.querySelectorAll("section article");


for (let i = 0; i < btns.length; i++) { // i는 0 ; i가 btns.length(3)보다 작으면; i를 1씩 증가
  btns[i].addEventListener("click", () => { // 클릭 이벤트 추가

    /* ---------- 기본 for문 ---------- */

    // // 버튼 활성화
    // for (let k = 0; k < btns.length; k++) { btns[k].classList.remove('on'); } // btns 클래스 on 제거
    // btns[i].classList.add('on'); // 클릭한 btns에 클래스 on 추가

    // // 박스 활성화
    // for (let j = 0; j < boxes.length; j++) { boxes[j].classList.remove('on'); } // boxes 클래스 on 제거
    // boxes[i].classList.add('on'); // 클릭한 btns와 같은 인덱스 boxes에 클래스 on 추가

    // /* ---------- for of문 ---------- */

    // // 버튼 활성화
    // for (let el of btns) { el.classList.remove('on'); }
    // btns[i].classList.add('on');

    // // 박스 활성화
    // for (let el of boxes) { el.classList.remove('on'); }
    // boxes[i].classList.add('on');

    /* ---------- 함수 패키징 ---------- */

    // 버튼 활성화
    activation(btns, i); // activation 함수에 인수값 btns, i 전달

    // 박스 활성화
    activation(boxes, i); // activation 함수에 인수값 boxes, i 전달
  })
}

// /* ---------- 함수 패키징 ---------- */
function activation(list, index) { // 함수 activation에 매개변수로 list, index 사용
  for (let el of list) { // 변수 el은 list를 반복
    el.classList.remove('on'); // el에 클래스 on 제거
  }
  list[index].classList.add('on'); // list에 index번째에 클래스 on 추가
}
