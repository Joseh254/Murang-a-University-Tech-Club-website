function Login(Isloggedin){
    
        if (Isloggedin==true) {
            return(
            <button>Logout</button>
        )
        }else {
            return(
                <button>login</button>
            )
        }
}
export default Login;