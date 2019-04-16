window.onload = function(){
    var i;
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].forEach(function(item, index){
        document.querySelector("div.app").innerHTML += `
        <section>
            <div class="top">
                <h1>${item}</h1>
                <p>Jan 22</p>
            </div>
            <ul class="tasks">
            <li contenteditable="true" spellcheck="false"></li>
            </ul>
        </section>
        `;
    });
}