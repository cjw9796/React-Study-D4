function User({user}){
    return (
        <div>
            <b>{user.username}</b> <br/>
            <b>{user.email}</b> <br/>
        </div>
    );
}

function UserList(){
  
    {}
    const users = [
        {
            id       : 1,
            username : "nany", 
            email    : "nany@gmail.com" 
        },
        {
            id       : 2,
            username : "sonny", 
            email    : "sonny@gmail.com" 
        },
        {
            id       : 3,
            username : "hinny", 
            email    : "hinny@gmail.com" 
        }
    ];
    return(
        <div>
            <div>
               <User user = {users[0]}/>
               <User user = {users[1]}/>
               <User user = {users[2]}/>
            </div>

        </div>
    );
}
export default UserList; 

/** 
                <b> 이름 : {users[0].username}</b>
               
                <b> 연락처 : {users[0].email}</b>
                <br/>
                <b> 이름 : {users[1].username}</b>
                <b> 연락처 : {users[1].email}</b>
                <br/>

                <b> 이름 : {users[2].username}</b>
                <b> 연락처 : {users[2].email}</b>
                <br/>
                 */