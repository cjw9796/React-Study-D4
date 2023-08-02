//2) 음식점 출력하기 (마지막 수업시간 배열 활용)
function Foods({foods}){
    return(
        <div>
            <p>{foods.name}</p>
            <p>{foods.star}</p>
        </div>
    );

}


function FoodList(){
    const foods = [
        {
            id : 1,
            name : "A음식점",
            star : "별3개"
        },
        {
            id : 2, 
            name : "B음식점",
            star : "별4개"
        }

    ]
    return(
        <div>
            <Foods foods={foods[0]} />
            <Foods foods={foods[1]} />
           
        </div>
    );
}
export default FoodList;