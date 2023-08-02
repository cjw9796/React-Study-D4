// 문제 1. 이름 변경하는 컴포넌트 만들기 inputmain

import { useState } from "react";

function InputmainCopy() {
    const [text, setText] = useState("");
    const exchangevalue = (event) => {
        // 변환될 값
        setText(event.target.value);
    }
    const exchangeReset = () => {
        setText("");

    }

    return(
        <div>
            <input onchange={exchangevalue} value={text} />
            <button onclick={exchangeReset}>버튼이얌</button>
            <div>
                <b> 값 : {text}</b>
            </div>

        </div>
    );
}

export default InputmainCopy;