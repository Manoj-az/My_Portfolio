'use strict'

var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click",function()
{
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed=new Typed(".input",{
    strings:["Frontend Developer","Web Developer"],
    typesSpeed:90,
    backSpeed:90,
    loop:true
})

        document.getElementById("download").addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default link behavior

            // Create a temporary <a> element to trigger the download
            const a = document.createElement("a");

            // Set the file URL (path to your resume)
            a.href = "https://drive.google.com/file/d/1q6pVi2idr7cz980iCm9By16ZNfdPY_D_/view?usp=drive_link";  // Replace with the actual file path

            // Set the download attribute with the desired file name
            a.download = "My_Resume.pdf"; // Name of the file to be downloaded

            // Append the <a> element to the document
            document.body.appendChild(a);

            // Programmatically click the <a> element to trigger the download
            a.click();

            // Remove the <a> element after the download is triggered
            document.body.removeChild(a);
        });
