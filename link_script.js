//링크 생성은 여기부터
let $nameList = document.querySelectorAll('#resTable tr :nth-child(1)');

// 3번. 이걸 모든 테이블에 적용하기
for (let resNum = 1;
  resNum < $nameList.length;
  resNum++
) {

  // 1번. 링크 태그 만들기
  // 1-1. 가게명 선택하기
  let $resName = $nameList[resNum].textContent;

  // 1-2. 가게 주소 선택하기
  let tableHeader = document.querySelectorAll('#resTable th');
  let tableLength = tableHeader.length;
  let $linkList = document.querySelectorAll('#resTable tr :nth-child('+tableLength+')'); // 행 개수를 세서 1을 더해주고 nth-child 값에 넣어주기
  let $resLink = $linkList[resNum].textContent;

  // 1-3. 'a' 태그 생성 후, textContent와 href 값 설정하기
  let $aLink = document.createElement('a');
  $aLink.textContent = $resName;
  $aLink.setAttribute('href', $resLink);


  // 2번. 태그를 가게 이름에 넣어주기
  $nameList[resNum].textContent = '';
  $nameList[resNum].appendChild($aLink);

}


//마지막 컬럼 삭제하기
//3번. 전체 테이블에 반복
for (let removeNum = 0;
  removeNum < $nameList.length;
  removeNum++
) {
  //1번. 제거 대상 정의하기
  $trList = document.querySelectorAll('#resTable tr');
  $removetr = $trList[removeNum].querySelectorAll('tr > *');
  $removeColNum = $removetr.length;

  //2번. 제거하기
  $removetr[$removeColNum-1].remove();
}

