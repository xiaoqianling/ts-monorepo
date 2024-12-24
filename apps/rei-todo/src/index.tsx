import React from "react";
import { FunctionComponent } from "react";
import './index.scss'

interface AppProps {
    
}
 
const App: FunctionComponent<AppProps> = () => {
    return (<>
        <div className="container">
            <div className="son1"/>
            <div className="son2"/>
            <div className="son3"/>
        </div>
    </>);
}
 
export default App;