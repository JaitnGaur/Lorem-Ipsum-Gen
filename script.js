let getnumber = document.querySelector("#input-paranumber");
let getlorem = document.querySelector("#go");
let paragraph = document.querySelector("#para");
paragraph.innerHTML = '';
let error = document.getElementById("error");


getlorem.addEventListener("click", function () {
    error.innerHTML = "";
    document.getElementById("copy").style.display = "none";
    paragraph.innerHTML = '';
    if (getnumber.value == '' || getnumber.value == 0) {
        error.innerHTML = "Please Enter Valid Number";
    }
    else {
        let number = getnumber.value;
        printlorem(number);
        document.getElementById("copy").style.display = "block";
    }
});

let printlorem = (num) => {
    for (i = 0; i < num; i++) {

        let li = document.createElement('li');
        li.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus lorem, ultrices vitae euismod a, fermentum vitae ex. Cras ac neque sed nibh pretium ullamcorper. Nulla vel elit sapien. Maecenas eget tortor aliquet, suscipit lacus in, malesuada purus. Maecenas semper consequat leo at accumsan. Vivamus magna neque, ornare non molestie vitae, dignissim sit amet lacus. Aliquam tempor, arcu ac convallis elementum, dolor augue consectetur lacus, ac dictum quam mi ut lorem. Quisque facilisis quis ipsum quis tristique. Maecenas ornare dolor ac finibus lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat turpis nec tempus finibus. Morbi nec facilisis nisl, et ultrices ante. Sed at enim quis dolor consectetur tincidunt. \n";

        paragraph.appendChild(li);

    }
    document.getElementById('copy').addEventListener('click', function () {
        let inputelement = document.createElement('input');
        document.body.appendChild(inputelement);
        inputelement.value = paragraph.innerText;

        inputelement.select();
        document.execCommand('copy');
        inputelement.parentNode.removeChild(inputelement);


        // navigator.clipboard.writeText(copyText.value);
    }
    );

}