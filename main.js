var _a;
// Adding logic to add experience
var experience = document.querySelector("#addExp");
var newSecArray = [];
var newPreArray = [];
experience === null || experience === void 0 ? void 0 : experience.addEventListener("click", function () {
    var newSec = document.createElement("div");
    newSec.innerHTML = "\n        <div class=\"fieldContainer line\">\n        <i class=\"fa-solid fa-xmark cross-1 CRO\"></i>\n            <div class=\"info\">\n                <h3>Company Name</h3>\n                <input type=\"text\"class=\" newComName\">\n            </div>\n            <div class=\"info\">\n                <h3>Title</h3>\n                <input type=\"text\" class=\" newComTitle\">\n            </div>\n        </div>\n        <div class=\"fieldContainer\">\n            <div class=\"comp-info\">\n                <h3>Company Description</h3>\n                <div class=\"longInfoInput newComDes LText\" contenteditable=\"true\"></div>\n            </div>\n        </div>\n    ";
    var container = document.querySelector("#exp");
    if (container)
        container.appendChild(newSec);
    newSecArray.push(newSec);
    console.log(newSecArray);
    var newSecInputs = [
        newSec.querySelector(".newComTitle"),
        newSec.querySelector(".newComName"),
        newSec.querySelector(".newComDes")
    ];
    var line = newSec.querySelector(".line");
    if (line) {
        line.style.borderTop = "1px solid black";
    }
    var newPre = document.createElement("div");
    newPre.innerHTML = "\n        <div class=\"detailContainer\">\n            <div class=\"fieldmeasurements newPreTitle\"></div>\n            <div class=\"fieldmeasurements newPreComName\"></div>\n            <div class=\"duration\">\n                <div class=\"start\"></div>\n                <div class=\"end\"></div>\n            </div>\n            <div class=\"fieldmeasurements newPreComDes\"></div>\n        </div>\n    ";
    var expPre = document.querySelector("#expPreview");
    if (expPre)
        expPre.appendChild(newPre);
    newPreArray.push(newPre);
    var contain = newPre.querySelector(".detailContainer");
    if (contain) {
        contain.style.border = "none";
        // contain.style.marginTop="10px"
    }
    var newPreInputs = [
        newPre.querySelector(".newPreTitle"),
        newPre.querySelector(".newPreComName"),
        newPre.querySelector(".newPreComDes")
    ];
    var NewplaceholderText = ["Title", "Company Name", "Company Description"];
    // Set placeholders for previews
    newPreInputs.forEach(function (preview, i) {
        if (preview) {
            var placeholderText_1 = NewplaceholderText[i];
            function setPlaceholder() {
                var _a;
                if (preview)
                    if (!((_a = preview.textContent) === null || _a === void 0 ? void 0 : _a.trim())) {
                        preview.textContent = placeholderText_1;
                        preview.style.color = "grey";
                    }
            }
            function removePlaceholder() {
                if (preview)
                    if (preview.textContent === placeholderText_1) {
                        preview.textContent = "";
                        preview.style.color = "black";
                    }
            }
            setPlaceholder();
            preview.addEventListener("focus", removePlaceholder);
            preview.addEventListener("blur", setPlaceholder);
        }
    });
    // Update previews on input
    newSecInputs.forEach(function (input, i) {
        var preview = newPreInputs[i];
        var placeholderText = NewplaceholderText[i];
        if (input) {
            input.addEventListener("input", function () {
                var _a;
                if (preview) {
                    preview.textContent = input instanceof HTMLInputElement
                        ? input.value
                        : input.textContent;
                    preview.style.color = "black";
                }
                if (preview) {
                    if (!((_a = preview.textContent) === null || _a === void 0 ? void 0 : _a.trim())) {
                        preview.textContent = placeholderText;
                        preview.style.color = "grey";
                    }
                }
            });
        }
        // Dynamically attach the remove button's click handler
        var crossButton1 = newSec.querySelector(".cross-1");
        crossButton1 === null || crossButton1 === void 0 ? void 0 : crossButton1.addEventListener("click", function () {
            var _a, _b;
            var index = newSecArray.indexOf(newSec);
            if (index !== -1) {
                // Remove the elements from the DOM
                (_a = newSecArray[index]) === null || _a === void 0 ? void 0 : _a.remove();
                (_b = newPreArray[index]) === null || _b === void 0 ? void 0 : _b.remove();
                // Remove from the arrays
                newSecArray.splice(index, 1);
                newPreArray.splice(index, 1);
            }
        });
    });
});
// Adding logic to add education
var education = document.querySelector("#addEdu");
var neweduArray = [];
var newPreEArray = [];
education === null || education === void 0 ? void 0 : education.addEventListener("click", function () {
    var newEduSec = document.createElement("div");
    newEduSec.innerHTML = "\n                    <div class=\"fieldContainer line\">\n                    <i class=\"fa-solid fa-xmark cross-2 CRO\"></i>\n                        <div class=\"info\">\n                            <h3>School or University</h3>\n                            <input type=\"text\" required class=\"newScoolName\">\n                        </div>\n                        <div class=\"info\">\n                            <h3>Field of study</h3>\n                            <input type=\"text\" required class=\"newSchoolField\">\n                        </div>\n                    </div>\n    ";
    var educontainer = document.querySelector("#edu");
    if (educontainer)
        educontainer.appendChild(newEduSec);
    neweduArray.push(newEduSec);
    console.log(newSecArray);
    var newSecInputs = [
        newEduSec.querySelector(".newScoolName"),
        newEduSec.querySelector(".newSchoolField"),
    ];
    var lineE = newEduSec.querySelector(".line");
    if (lineE) {
        lineE.style.borderTop = "1px solid black";
    }
    var newEduPre = document.createElement("div");
    newEduPre.innerHTML = "\n                    <div class=\"detailContainer\">\n                        <div class=\" fieldmeasurements newSchoolP\"></div>\n                        <div class=\" fieldmeasurements newFieldP\"></div>\n                    </div>\n    ";
    var eduPre = document.querySelector("#eduPreview");
    if (eduPre)
        eduPre.appendChild(newEduPre);
    newPreEArray.push(newEduPre);
    var contain = newEduPre.querySelector(".detailContainer");
    if (contain)
        contain.style.border = "none";
    var newPreEInputs = [
        newEduPre.querySelector(".newSchoolP"),
        newEduPre.querySelector(".newFieldP"),
    ];
    var NewEplaceholderText = ["School or University", "Degree and Field of study"];
    // Set placeholders for previews
    newPreEInputs.forEach(function (preview, i) {
        if (preview) {
            var placeholderTextE_1 = NewEplaceholderText[i];
            function setPlaceholder() {
                var _a;
                if (preview)
                    if (!((_a = preview.textContent) === null || _a === void 0 ? void 0 : _a.trim())) {
                        preview.textContent = placeholderTextE_1;
                        preview.style.color = "grey";
                    }
            }
            function removePlaceholder() {
                if (preview)
                    if (preview.textContent === placeholderTextE_1) {
                        preview.textContent = "";
                        preview.style.color = "black";
                    }
            }
            setPlaceholder();
            preview.addEventListener("focus", removePlaceholder);
            preview.addEventListener("blur", setPlaceholder);
        }
    });
    // Update previews on input
    newSecInputs.forEach(function (input, i) {
        var preview = newPreEInputs[i];
        var placeholderTextE = NewEplaceholderText[i];
        if (input) {
            input.addEventListener("input", function () {
                var _a;
                if (preview) {
                    preview.textContent = input instanceof HTMLInputElement
                        ? input.value
                        : input.textContent;
                    preview.style.color = "black";
                }
                if (preview) {
                    if (!((_a = preview.textContent) === null || _a === void 0 ? void 0 : _a.trim())) {
                        preview.textContent = placeholderTextE;
                        preview.style.color = "grey";
                    }
                }
            });
        }
        // Dynamically attach the remove button's click handler
        var crossButton2 = newEduSec.querySelector(".cross-2");
        crossButton2 === null || crossButton2 === void 0 ? void 0 : crossButton2.addEventListener("click", function () {
            var _a, _b;
            var index = neweduArray.indexOf(newEduSec);
            if (index !== -1) {
                // Remove the elements from the DOM
                (_a = neweduArray[index]) === null || _a === void 0 ? void 0 : _a.remove();
                (_b = newPreEArray[index]) === null || _b === void 0 ? void 0 : _b.remove();
                // Remove from the arrays
                neweduArray.splice(index, 1);
                newPreEArray.splice(index, 1);
            }
        });
    });
});
// make an editable div 
var longInput = document.querySelectorAll(".longInfoInput");
longInput.forEach(function (div) {
    if (longInput) {
        div.contentEditable = "true";
    }
    ;
    // adding placeholder to first div
    var fisrtDiv = longInput[0];
    var placeholder = "Briefly explain why you'r a great fit for the role.";
    function setPLaceholder() {
        var _a;
        if (fisrtDiv) {
            if (!((_a = fisrtDiv.textContent) === null || _a === void 0 ? void 0 : _a.trim())) {
                fisrtDiv.textContent = placeholder;
                fisrtDiv.style.color = "grey";
            }
        }
    }
    if (fisrtDiv) {
        fisrtDiv.addEventListener("focus", function (e) {
            if (fisrtDiv.textContent === placeholder) {
                fisrtDiv.textContent = "";
                fisrtDiv.style.color = "black";
            }
        });
    }
    ;
    if (fisrtDiv) {
        fisrtDiv.addEventListener("blur", function () {
            setPLaceholder();
        });
    }
    setPLaceholder();
    // adding placeholder to 3rd div
    var thirdDiv = longInput[2];
    var placeholder3 = "Add your skills using commas.";
    function setPLaceholder3() {
        var _a;
        if (thirdDiv) {
            if (!((_a = thirdDiv.textContent) === null || _a === void 0 ? void 0 : _a.trim())) {
                thirdDiv.textContent = placeholder3;
                thirdDiv.style.color = "grey";
            }
        }
    }
    if (thirdDiv) {
        thirdDiv.addEventListener("focus", function (e) {
            if (thirdDiv.textContent === placeholder3) {
                thirdDiv.textContent = "";
                thirdDiv.style.color = "black";
            }
        });
    }
    ;
    if (thirdDiv) {
        thirdDiv.addEventListener("blur", function () {
            setPLaceholder3();
        });
    }
    setPLaceholder3();
});
// applying placeholder to personal
var personaldetails = document.querySelectorAll(".placeholder");
var placeholderText = ["YOUR NAME", "The role you are applying for?", ".Phone", ".Email", "Your summary here", "Title", "Company Name", "Company Description", "School or University", "Degree and Field of study", "Your Skills", "Course Title"];
var _loop_1 = function (i) {
    function setPLaceholderText() {
        var _a;
        if (personaldetails[i]) {
            if (!((_a = personaldetails[i].textContent) === null || _a === void 0 ? void 0 : _a.trim())) {
                personaldetails[i].textContent = placeholderText[i];
                personaldetails[i].style.color = "grey";
            }
        }
    }
    if (personaldetails[i]) {
        if ((_a = personaldetails[i].textContent) === null || _a === void 0 ? void 0 : _a.trim()) {
            personaldetails[i].textContent = personaldetails[i].textContent;
            personaldetails[i].style.color = "black";
        }
    }
    ;
    if (personaldetails[i]) {
        personaldetails[i].addEventListener("blur", function () {
            setPLaceholderText();
        });
    }
    setPLaceholderText();
};
for (var i = 0; i < personaldetails.length; i++) {
    _loop_1(i);
}
;
// Applying logic to generateMyResume button
var genButton = document.querySelector("#build");
if (genButton) {
    genButton.addEventListener("click", function (e) {
        var genBox = document.querySelector(".generator-box");
        if (genBox) {
            if (!(genBox === null || genBox === void 0 ? void 0 : genBox.style.display)) {
                genBox.style.display = "none";
            }
            genBox.style.display = "flex";
        }
    });
}
;
// applying logic to live preview button
var livePreviewBut = document.querySelector(".button");
if (livePreviewBut) {
    livePreviewBut.addEventListener("click", function () {
        if (livePreviewBut) {
            if (!(livePreviewBut === null || livePreviewBut === void 0 ? void 0 : livePreviewBut.style.display)) {
                livePreviewBut.style.display = "flex";
            }
            livePreviewBut.style.display = "none";
        }
        var PreviewBox = document.querySelector(".preview");
        if (PreviewBox) {
            if (!(PreviewBox === null || PreviewBox === void 0 ? void 0 : PreviewBox.style.display)) {
                PreviewBox.style.display = "none";
            }
            PreviewBox.style.display = "block";
        }
    });
}
;
// applying logic to cross button
var crossButton = document.querySelector(".cross");
var PreviewBox = document.querySelector(".preview");
if (crossButton) {
    crossButton.addEventListener("click", function () {
        if (PreviewBox) {
            if (!(PreviewBox === null || PreviewBox === void 0 ? void 0 : PreviewBox.style.display)) {
                PreviewBox.style.display = "block";
            }
            PreviewBox.style.display = "none";
        }
        if (livePreviewBut) {
            if (!(livePreviewBut === null || livePreviewBut === void 0 ? void 0 : livePreviewBut.style.display)) {
                livePreviewBut.style.display = "none";
            }
            livePreviewBut.style.display = "flex";
        }
    });
}
// getting all input element
var fullNameInput = document.querySelector("#FullNameF");
var roleInput = document.querySelector("#RoleF");
var phoneInput = document.querySelector("#PhoneNumberF");
var emailInput = document.querySelector("#EmailF");
var companyNameInput = document.querySelector("#CompanyNameF");
var companyTitleInput = document.querySelector("#TitleF");
var schoolNameInput = document.querySelector("#SchoolNameF");
var degreeInput = document.querySelector("#DegreeF");
// getting editableDivs Input element
var summaryInputD = document.querySelector("#SummaryF");
var companyDescriptionD = document.querySelector("#CompanyDescriptionF");
var skillsD = document.querySelector("#SkillsF");
var certificationD = document.querySelector("#CertificationF");
// getting preview elements
var nameP = document.querySelector("#name");
var roleP = document.querySelector("#role");
var phoneP = document.querySelector("#phone");
var emailP = document.querySelector("#email");
var companyNameP = document.querySelector("#companyName");
var companyTitleP = document.querySelector("#title");
var schoolNameP = document.querySelector("#schoolname");
var degreeP = document.querySelector("#degree");
var summaryP = document.querySelector("#summaryText");
var companyDescriptionP = document.querySelector("#companydescription");
var skillsP = document.querySelector("#skill");
var certificationP = document.querySelector("#certificates");
"";
// making input elements array
var input = [fullNameInput, roleInput, phoneInput, emailInput, companyTitleInput, companyNameInput, schoolNameInput, degreeInput, summaryInputD, companyDescriptionD, skillsD, certificationD];
// making preview elements array
var preview = [nameP, roleP, phoneP, emailP, companyTitleP, companyNameP, schoolNameP, degreeP, summaryP, companyDescriptionP, skillsP, certificationP];
// making placeHolders array
var placeholder = ["YOUR NAME", "The role you are applying for?", ".Phone", ".Email", "Title", "Company Name", "School or University", "Degree and Field of study", "Your summary here", "Company Description", "Your Skills", "Course Title"];
// live preview
var inputFields = document.querySelectorAll(".data");
var _loop_2 = function (i) {
    var Input = input[i];
    var Preview = preview[i];
    var PlaceText = placeholder[i];
    if (Input) {
        Input.addEventListener("input", function (e) {
            var _a;
            if (document.activeElement === Input) {
                function livePreview() {
                    var _a;
                    if (Preview && Input) {
                        if (!((_a = Preview === null || Preview === void 0 ? void 0 : Preview.textContent) === null || _a === void 0 ? void 0 : _a.trim())) {
                            Preview.textContent = PlaceText;
                            Preview.style.color = "grey";
                        }
                    }
                }
                if (Preview && Input) {
                    if ((_a = Preview.textContent) === null || _a === void 0 ? void 0 : _a.trim()) {
                        if (Input instanceof HTMLInputElement) {
                            Preview.textContent = Input.value;
                            Preview.style.color = "black";
                        }
                        else {
                            Preview.textContent = Input.textContent;
                            Preview.style.color = "black";
                        }
                    }
                }
                if (Preview && Input) {
                    Preview.addEventListener("blur", function () {
                        livePreview();
                    });
                }
                ;
                livePreview();
            }
        });
    }
};
for (var i = 0; i < inputFields.length; i++) {
    _loop_2(i);
}
;
// submission & final resume generation
var form = document.querySelector("form");
var savebutton = document.querySelector(".save");
var options = document.querySelector(".opt");
var longText = document.querySelectorAll(".LText");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    longText.forEach(function (textfields) {
        var _a;
        if (!((_a = textfields === null || textfields === void 0 ? void 0 : textfields.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || textfields.style.color == "grey") {
            alert("Fill all fields correctly before submission");
            throw new Error("Username is required");
        }
    });
    if (fullNameInput && nameP) {
        var fullName = fullNameInput.value;
        nameP.textContent = fullName;
    }
    ;
    if (roleInput && roleP) {
        var role = roleInput.value;
        roleP.textContent = role;
    }
    ;
    if (phoneInput && phoneP) {
        var phone = phoneInput.value;
        phoneP.textContent = phone;
    }
    ;
    if (emailInput && emailP) {
        var email = emailInput.value;
        emailP.textContent = email;
    }
    ;
    if (companyNameInput && companyNameP) {
        var companyName = companyNameInput.value;
        companyNameP.textContent = companyName;
    }
    ;
    if (companyTitleInput && companyTitleP) {
        var companyTitle = companyTitleInput.value;
        companyTitleP.textContent = companyTitle;
    }
    ;
    if (schoolNameInput && schoolNameP) {
        var schoolName = schoolNameInput.value;
        schoolNameP.textContent = schoolName;
    }
    ;
    if (degreeInput && degreeP) {
        var degreeName = degreeInput.value;
        degreeP.textContent = degreeName;
    }
    ;
    if (summaryInputD && summaryP) {
        var summary = summaryInputD.textContent;
        summaryP.textContent = summary;
    }
    ;
    if (companyDescriptionD && companyDescriptionP) {
        var summaryDes = companyDescriptionD.textContent;
        companyDescriptionP.textContent = summaryDes;
    }
    ;
    if (skillsD && skillsP) {
        var skills = skillsD.textContent;
        skillsP.textContent = skills;
    }
    ;
    if (certificationD && certificationP) {
        var certification = certificationD.textContent;
        certificationP.textContent = certification;
    }
    ;
    var formbox = document.querySelector(".form");
    if (formbox) {
        if (!(formbox === null || formbox === void 0 ? void 0 : formbox.style.display)) {
            formbox.style.display = "block";
        }
        formbox.style.display = "none";
    }
    ;
    if (PreviewBox) {
        if (PreviewBox.style.display = "none") {
            PreviewBox.style.display = "block";
        }
        PreviewBox.style.width = "60%";
    }
    if (livePreviewBut) {
        if (!(livePreviewBut === null || livePreviewBut === void 0 ? void 0 : livePreviewBut.style.display)) {
            livePreviewBut.style.display = "flex";
        }
        livePreviewBut.style.display = "none";
    }
    if (crossButton) {
        if (!(crossButton === null || crossButton === void 0 ? void 0 : crossButton.style.display)) {
            crossButton.style.display = "block";
        }
        crossButton.style.display = "none";
    }
    if (options) {
        if (!(options === null || options === void 0 ? void 0 : options.style.display)) {
            options.style.display = "none";
        }
        options.style.display = "block";
    }
});
var edit = document.querySelector(".edit");
edit === null || edit === void 0 ? void 0 : edit.addEventListener("click", function () {
    if (PreviewBox) {
        PreviewBox.contentEditable = "true";
    }
    if (options) {
        if (!(options === null || options === void 0 ? void 0 : options.style.display)) {
            options.style.display = "block";
        }
        options.style.display = "none";
    }
    if (savebutton) {
        if (!(savebutton === null || savebutton === void 0 ? void 0 : savebutton.style.display)) {
            savebutton.style.display = "none";
        }
        savebutton.style.display = "flex";
    }
});
if (savebutton) {
    savebutton.addEventListener("click", function () {
        if (PreviewBox) {
            PreviewBox.contentEditable = "false";
        }
        if (savebutton) {
            if (!(savebutton === null || savebutton === void 0 ? void 0 : savebutton.style.display)) {
                savebutton.style.display = "flex";
            }
            savebutton.style.display = "none";
        }
        if (options) {
            if (!(options === null || options === void 0 ? void 0 : options.style.display)) {
                options.style.display = "none";
            }
            options.style.display = "block";
        }
    });
}
// // creating download logic
// const download: HTMLDivElement | null = document.querySelector(".download");
// const resume: HTMLDivElement | null = document.querySelector(".borderbox");
// download?.addEventListener("click", () => {
//     if (resume) {
//         // Temporarily hide everything except the preview box
//         const originalContent = document.body.innerHTML; // Save original page content
//         document.body.innerHTML = resume.innerHTML; // Replace with preview content
//         window.print(); // Trigger the print dialog
//     }
// })
var download = document.querySelector(".download");
var resume = document.querySelector(".borderbox");
download === null || download === void 0 ? void 0 : download.addEventListener("click", function () {
    var _a, _b, _c;
    if (resume) {
        // Create a hidden iframe for the printable content
        var iframe_1 = document.createElement("iframe");
        iframe_1.style.position = "absolute";
        iframe_1.style.top = "-10000px"; // Move it out of view
        document.body.appendChild(iframe_1);
        var iframeDoc = iframe_1.contentDocument || ((_a = iframe_1.contentWindow) === null || _a === void 0 ? void 0 : _a.document);
        if (iframeDoc) {
            iframeDoc.open();
            iframeDoc.write("\n        <!DOCTYPE html>\n        <html>\n        <head>\n          <title>Print Resume</title>\n          <style>\n          .detailContainer {\n            border-top: 2px solid black;\n            margin: 8px 0px 10px 0px;\n            }\n          .fieldmeasurements {\n            padding: 2px;\n            }\n            body {\n              font-family: Arial, sans-serif;\n              margin: 20px;\n            }\n              .heading {\n    display: flex;\n    justify-content: center;\n    margin-top: 50px\n}\n    .headingS {\n    display: flex;\n    justify-content: center;\n    margin-top: 30px\n}\n    .personaldetails {\n    padding: 10px 10px 3px 10px;\n\n}\n    .personal {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 7px;\n    gap: 15px;\n\n\n}\n    .borderbox {\n    border: 2px solid #2D3639;\n    background-color: white;\n    padding: 80px 60px 100px 60px;\n    font-family: \"Calibri\";\n    position: relative;\n     break-inside: avoid;\n\n}\n\n#name {\n    font-size: 30px;\n    font-weight: bold;\n}\n\n#role {\n    font-size: 22px;\n\n}\n\n/* summary */\n#summaryText {\n    border-top: 2px solid black;\n    margin: 8px 0px 20px 0px;\n    padding: 10px;\n\n}\n\n/* experience */\n\n#companyName {\n    font-size: 17px;\n}\n\n#title {\n    font-size: 19px;\n    font-weight: 600\n}\n\n.newPreTitle {\n    font-size: 19px;\n    font-weight: 600\n}\n\n.newPreComName {\n    font-size: 17px;\n\n}\n\n/* education */\n#schoolname {\n    font-size: 19px;\n    font-weight: 600\n}\n\n#degree {\n    font-size: 18px;\n\n}\n\n.newSchoolP {\n    font-size: 19px;\n    font-weight: 600\n}\n\n.newFieldP {\n    font-size: 18px;\n\n}\n\n          </style>\n        </head>\n        <body>\n          ".concat(resume.innerHTML, "\n        </body>\n        </html>\n      "));
            iframeDoc.close();
            // Trigger the print dialog in the iframe
            (_b = iframe_1.contentWindow) === null || _b === void 0 ? void 0 : _b.focus();
            (_c = iframe_1.contentWindow) === null || _c === void 0 ? void 0 : _c.print();
        }
        // Remove the iframe after a short delay
        setTimeout(function () {
            iframe_1.remove();
        }, 1000);
    }
});
