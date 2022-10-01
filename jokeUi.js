class UiJoke {
    constructor(){

    }

    createUI(myData){
        console.log(myData);
        
        let date = new Date();
        let month = date.getMonth()+1;
        let day = date.getDate();
        let year= date.getFullYear();
        let formattedDate = `${month}.${day}.${year}`;
        let dateString = formattedDate.toString();

        
        let myJoke = myData.contents.jokes[0].joke.text;

        let myJokeAIndex= myJoke.indexOf("?");
        let jokeSetup = myJoke.slice(0,myJokeAIndex + 1); 
        let jokeAnswer = myJoke.slice(myJokeAIndex + 1);

       
        if(localStorage.getItem("date") === null){
            localStorage.setItem("date", JSON.stringify(formattedDate));
            localStorage.setItem("count", JSON.stringify(0));

            let insertContent = document.getElementById("insert");

            insertContent.innerHTML = `
            <section id="topSection">
                <p id="date">${formattedDate}</p>
                <h1 id="title">JOKE OF THE DAY</h1>
            </section>
            <section class="bottomSection">
                <h2 class="joke" id="jokeSetup">${jokeSetup}</h2>
                <h2 class="joke" id="punchline" style="display: none">${jokeAnswer}</h2>
                <button id="punchlineBtn">Click Here</button>
                <h2 id="comeBack" style="display: none">Come back tomorrow for another joke!</h2>
            </section>
            `
        } 

        
        if((JSON.parse(localStorage.getItem("date")) !== dateString) || (JSON.parse(localStorage.getItem("date")) == dateString && JSON.parse(localStorage.getItem("count")) == 0)){
            localStorage.setItem("date", JSON.stringify(formattedDate));
            localStorage.setItem("count", JSON.stringify(0));

            
            let insertContent = document.getElementById("insert");

            insertContent.innerHTML = `
            <section id="topSection">
                <p id="date">${formattedDate}</p>
                <h1 id="title">JOKE OF THE DAY</h1>
            </section>
            <section class="bottomSection">
                <h2 class="joke" id="jokeSetup">${jokeSetup}</h2>
                <h2 class="joke" id="punchline" style="display: none">${jokeAnswer}</h2>
                <button id="punchlineBtn">Click Here</button>
                <h2 id="comeBack" style="display: none">Come back tomorrow for another joke!</h2>
            </section>
            `
        } 
        else if (JSON.parse(localStorage.getItem("date")) == dateString && JSON.parse(localStorage.getItem("count")) == 1){
            let insertContent = document.getElementById("insert");

            insertContent.innerHTML = `
            <section id="topSection">
                <p id="date">${formattedDate}</p>
                <h1 id="title">JOKE OF THE DAY</h1>
            </section>
            <section class="bottomSection">
                <h2 class="jokeTold" id="jokeSetup">${jokeSetup}</h2>
                <h2 class="joke" id="punchline">${jokeAnswer}</h2>
                <button id="punchlineBtn" style="display: none">Click Here</button>
                <h2 id="comeBack">Come back tomorrow for another joke!</h2>
            </section>
            `
        } else {
            console.log("error");
        }
    }

    showJoke(){
        localStorage.setItem("count", JSON.stringify(1));
        let comeBack = document.getElementById("comeBack");
        let jokeSetup = document.getElementById("jokeSetup");
        let punchline = document.getElementById("punchline");
        punchlineBtn.style.display = "none";
        jokeSetup.className = "jokeTold";
        punchline.style.display = "block";
        setTimeout(() => {
            comeBack.style.display = "block";
          }, 1000)

    }

}