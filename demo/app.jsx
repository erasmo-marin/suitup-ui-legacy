import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "../src/styles/index.less";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(
            `%c

                      #@@&*,          .*%@@*                   
                     &@@@@@@@@@@%*%@@@@@@@@@#                  
                    @@@@@@@@@@@@@/@@@@@@@@@@@@                 
                    @@@@@@@@@@@@/,/@@@@@@@@@@@                 
                     &@@@@@@@@@%,,,(@@@@@@@@@                  
                      @@@@@@@@&*,,,,%@@@@@@@                   
                       @@@@@@@@/,,,*@@@@@@@                    
                        @@@@@@@*,,,*@@@@@@@                    
                        @@@@@@@*,,,,&@@@@@                     
                         @@@@@&,,,,,&@@@@                      
                          @@@@%,,,,,%@@@@                      
                          @@@@#,,,,,#@@&                       
                           @@@(,,,,,(@@                        
                            @@/,,,,,/@                         
                             @*,,,,,*@                         
                              ,,,,,,/                          
                              /,,,,*                           
                               /,,,                            
                                *,                             
                                 ,                             

             ____        _ _   _   _         _   _ ___ 
           / ___| _   _(_) |_| | | |_ __   | | | |_ _|
           \\___ \\| | | | | __| | | | '_ \\  | | | || | 
            ___) | |_| | | |_| |_| | |_) | | |_| || | 
           |____/ \\__,_|_|\\__|\\___/| .__/   \\___/|___|
                                   |_|                
`, 'color: #41c39f');
    }

    render() {
        return <Routes />;
    }
}

export default App;
