import React from "react";
import "./assets/styles/App.css";

function App(){
    return(
    <>
        <div id="mainContainer">
            <section id="sleepLogsContainer">
                <div id="sleepLogs">

                    <h4 class="col-start-2">Score</h4>
                    <h4>Sleep</h4>
                    <h4>Wake Up</h4>
                    <h4>Hours</h4>
                    
                    <div class="contents">
                    <p>Monday</p>
                    <p>8</p>
                    <p>1:53 AM</p>
                    <p>6:24 AM</p>
                    <p>5</p>
                    </div>
                    
                    <hr class="col-span-5"/>
                    <div class="contents">
                    <p>Tuesday</p>
                    <p>7</p>
                    <p>2:10 AM</p>
                    <p>7:00 AM</p>
                    <p>5</p>
                    </div>

                    <hr class="col-span-5"/>
                    <div class="contents">
                    <p>Tuesday</p>
                    <p>7</p>
                    <p>2:10 AM</p>
                    <p>7:00 AM</p>
                    <p>5</p>
                    </div>

                    <hr class="col-span-5"/>
                    <div class="contents">
                    <p>Tuesday</p>
                    <p>7</p>
                    <p>2:10 AM</p>
                    <p>7:00 AM</p>
                    <p>5</p>
                    </div>
                </div>
            </section>

            <section id="timeSection">
            
            </section>
        </div>
    </>
    )
}

export default App;