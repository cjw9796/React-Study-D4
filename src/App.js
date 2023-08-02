import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  /** script 작성한다
   * css, javascript 활동을 적는다. 
   * 변수 선언, 상태 변경은 여기에서 진행해준다. 
   * 
   * useState : 상태값 관리자 초기값 세팅, 값 변환이 가능 
   * 
   * npx -> 폴더 설치. 초기에 패키지를 최신으로 업데이트 
   * npm -> 리액트를 실행한다. 
   */

/*
  var name = "javascript";
  console.log(name);

  var name = "react";
  console.log(name);

  let name1 = "hello";
  console.log(name1);
  name1 = "world";
  console.log(name1);

  const name2 = "vue";
  console.log(name2);

  const name = "가능?"
  console.log(name2);

*/
/*

// let count = 0; 
// const [useState(0), 변환될 값] = 초기값;  
// state 
- 컴포넌트 내부에서 선언한 값 
- setState를 통해서 내부 값을 변경할 수 있다. 
- const[state, setState] = useState(0);

*/
const [count, setCount] = useState(100);  
const [time, setTime] = useState(0);


const plus = () => {
  // count = count + 1
  setCount(count + 1);

  console.log(count);
}

const minus = () => {
  // count = count - 1
  setCount(count -1);
  console.log(count);
}

const updateTime = () =>{
  setTime(time +1);
}
  return (

    /**html만 적는다.  */
    <div className="App"> 
    {/**
     * <div className = "App">은 <html> 태그와 비슷한 역할을 한다. 
     * 
     * 리액트에서는 onClick={} 으로 표기한다. 
     * 
     * 위에서 변수 선언한 값을 가져오기 위해서는 {} 중괄호를 사용해서 변수값을 넣어준다. 
  
     */}
     <h2> 숫자값: <br/> {count} </h2>
     <button onClick={plus}> + </button>
     <button onClick={minus}> - </button>

     <h2> {time}시 </h2>
     <button onClick={updateTime}> 시간올리기 </button>
     


    </div>
  );
}

export default App;
