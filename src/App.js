import React from "react";
import Userform from "./component/Userform";


function App(){
    const getFormData=(data)=>{
        console.log(data)
    }
        return<>
            <Userform FormData={getFormData}/>
        </>   
}
export default App