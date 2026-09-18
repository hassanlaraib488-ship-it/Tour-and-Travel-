import "./SingUpStyle.css"


function SingUpForm(){
    return(
     <div className="SingUp-container">
     <h1>Sing Up Page</h1>
     <form>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Enter Password"></input>
        <button>Sing Up</button>
     </form>
     </div>
    )
}

export default SingUpForm