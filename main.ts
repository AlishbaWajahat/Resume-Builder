// Adding logic to add experience
const experience = document.querySelector("#addExp");
let newSecArray: (HTMLDivElement | null)[] = [];
let newPreArray: (HTMLDivElement | null)[] = []
experience?.addEventListener("click", () => {
    const newSec = document.createElement("div");
    newSec.innerHTML = `
        <div class="fieldContainer line">
        <i class="fa-solid fa-xmark cross-1 CRO"></i>
            <div class="info">
                <h3>Company Name</h3>
                <input type="text"class=" newComName">
            </div>
            <div class="info">
                <h3>Title</h3>
                <input type="text" class=" newComTitle">
            </div>
        </div>
        <div class="fieldContainer">
            <div class="comp-info">
                <h3>Company Description</h3>
                <div class="longInfoInput newComDes LText" contenteditable="true"></div>
            </div>
        </div>
    `;

    const container = document.querySelector("#exp");
    if (container) container.appendChild(newSec);
    newSecArray.push(newSec);
    console.log(newSecArray);


    const newSecInputs = [
        newSec.querySelector(".newComTitle"),
        newSec.querySelector(".newComName"),
        newSec.querySelector(".newComDes")
    ];
    const line: HTMLDivElement | null = newSec.querySelector(".line");
    if (line) { line.style.borderTop = "1px solid black" }

    const newPre = document.createElement("div");
    newPre.innerHTML = `
        <div class="detailContainer">
            <div class="fieldmeasurements newPreTitle"></div>
            <div class="fieldmeasurements newPreComName"></div>
            <div class="duration">
                <div class="start"></div>
                <div class="end"></div>
            </div>
            <div class="fieldmeasurements newPreComDes"></div>
        </div>
    `;

    const expPre = document.querySelector("#expPreview");
    if (expPre) expPre.appendChild(newPre);
    newPreArray.push(newPre);
    const contain: HTMLDivElement | null = newPre.querySelector(".detailContainer");
    if (contain) {
        contain.style.border = "none";
        // contain.style.marginTop="10px"
    }




    const newPreInputs: (HTMLDivElement | null)[] = [
        newPre.querySelector(".newPreTitle"),
        newPre.querySelector(".newPreComName"),
        newPre.querySelector(".newPreComDes")
    ];

    const NewplaceholderText = ["Title", "Company Name", "Company Description"];

    // Set placeholders for previews
    newPreInputs.forEach((preview, i) => {
        if (preview) {
            const placeholderText = NewplaceholderText[i];

            function setPlaceholder() {
                if (preview)
                    if (!preview.textContent?.trim()) {
                        preview.textContent = placeholderText;
                        preview.style.color = "grey";
                    }
            }
            function removePlaceholder() {
                if (preview)
                    if (preview.textContent === placeholderText) {
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
    newSecInputs.forEach((input, i) => {
        const preview = newPreInputs[i];
        const placeholderText = NewplaceholderText[i];

        if (input) {
            input.addEventListener("input", () => {
                if (preview) {
                    preview.textContent = input instanceof HTMLInputElement
                        ? input.value
                        : input.textContent;
                    preview.style.color = "black";
                }
                if (preview) {
                    if (!preview.textContent?.trim()) {
                        preview.textContent = placeholderText;
                        preview.style.color = "grey";

                    }

                }

            });
        }
        // Dynamically attach the remove button's click handler
        const crossButton1 = newSec.querySelector(".cross-1");
        crossButton1?.addEventListener("click", () => {
            const index = newSecArray.indexOf(newSec);

            if (index !== -1) {

                // Remove the elements from the DOM
                newSecArray[index]?.remove();
                newPreArray[index]?.remove();

                // Remove from the arrays
                newSecArray.splice(index, 1);
                newPreArray.splice(index, 1);

            }
        });
    });
});

// Adding logic to add education
const education = document.querySelector("#addEdu");
let neweduArray: (HTMLDivElement | null)[] = [];
let newPreEArray: (HTMLDivElement | null)[] = []
education?.addEventListener("click", () => {
    const newEduSec = document.createElement("div");
    newEduSec.innerHTML = `
                    <div class="fieldContainer line">
                    <i class="fa-solid fa-xmark cross-2 CRO"></i>
                        <div class="info">
                            <h3>School or University</h3>
                            <input type="text" required class="newScoolName">
                        </div>
                        <div class="info">
                            <h3>Field of study</h3>
                            <input type="text" required class="newSchoolField">
                        </div>
                    </div>
    `;

    const educontainer = document.querySelector("#edu");
    if (educontainer) educontainer.appendChild(newEduSec);
    neweduArray.push(newEduSec);
    console.log(newSecArray);


    const newSecInputs = [
        newEduSec.querySelector(".newScoolName"),
        newEduSec.querySelector(".newSchoolField"),

    ];
    const lineE: HTMLDivElement | null = newEduSec.querySelector(".line");
    if (lineE) { lineE.style.borderTop = "1px solid black" }

    const newEduPre = document.createElement("div");
    newEduPre.innerHTML = `
                    <div class="detailContainer">
                        <div class=" fieldmeasurements newSchoolP"></div>
                        <div class=" fieldmeasurements newFieldP"></div>
                    </div>
    `;

    const eduPre = document.querySelector("#eduPreview");
    if (eduPre) eduPre.appendChild(newEduPre);
    newPreEArray.push(newEduPre);
    const contain: HTMLDivElement | null = newEduPre.querySelector(".detailContainer");
    if (contain)
        contain.style.border = "none";


    const newPreEInputs: (HTMLDivElement | null)[] = [
        newEduPre.querySelector(".newSchoolP"),
        newEduPre.querySelector(".newFieldP"),
    ];

    const NewEplaceholderText = ["School or University", "Degree and Field of study"];

    // Set placeholders for previews
    newPreEInputs.forEach((preview, i) => {
        if (preview) {
            const placeholderTextE = NewEplaceholderText[i];

            function setPlaceholder() {
                if (preview)
                    if (!preview.textContent?.trim()) {
                        preview.textContent = placeholderTextE;
                        preview.style.color = "grey";
                    }
            }
            function removePlaceholder() {
                if (preview)
                    if (preview.textContent === placeholderTextE) {
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
    newSecInputs.forEach((input, i) => {
        const preview = newPreEInputs[i];
        const placeholderTextE = NewEplaceholderText[i];

        if (input) {
            input.addEventListener("input", () => {
                if (preview) {
                    preview.textContent = input instanceof HTMLInputElement
                        ? input.value
                        : input.textContent;
                    preview.style.color = "black";
                }
                if (preview) {
                    if (!preview.textContent?.trim()) {
                        preview.textContent = placeholderTextE;
                        preview.style.color = "grey";

                    }

                }

            });
        }
        // Dynamically attach the remove button's click handler
        const crossButton2 = newEduSec.querySelector(".cross-2");
        crossButton2?.addEventListener("click", () => {
            const index = neweduArray.indexOf(newEduSec);

            if (index !== -1) {

                // Remove the elements from the DOM
                neweduArray[index]?.remove();
                newPreEArray[index]?.remove();

                // Remove from the arrays
                neweduArray.splice(index, 1);
                newPreEArray.splice(index, 1);

            }
        });
    });
});











// make an editable div 
const longInput: NodeListOf<HTMLDivElement> | null = document.querySelectorAll(".longInfoInput");

longInput.forEach((div) => {
    if (longInput) {
        div.contentEditable = "true";
    };

    // adding placeholder to first div
    const fisrtDiv: HTMLDivElement = longInput[0];
    const placeholder: string = "Briefly explain why you'r a great fit for the role.";
    function setPLaceholder() {
        if (fisrtDiv) {
            if (!fisrtDiv.textContent?.trim()) {
                fisrtDiv.textContent = placeholder;
                fisrtDiv.style.color = "grey";
            }
        }
    }
    if (fisrtDiv) {
        fisrtDiv.addEventListener("focus", (e) => {
            if (fisrtDiv.textContent === placeholder) {
                fisrtDiv.textContent = "";
                fisrtDiv.style.color = "black";
            }
        })
    };
    if (fisrtDiv) {
        fisrtDiv.addEventListener("blur", () => {
            setPLaceholder();

        });

    }
    setPLaceholder();

    // adding placeholder to 3rd div
    const thirdDiv: HTMLDivElement = longInput[2];
    const placeholder3: string = "Add your skills using commas.";
    function setPLaceholder3() {
        if (thirdDiv) {
            if (!thirdDiv.textContent?.trim()) {
                thirdDiv.textContent = placeholder3;
                thirdDiv.style.color = "grey";
            }
        }
    }
    if (thirdDiv) {
        thirdDiv.addEventListener("focus", (e) => {
            if (thirdDiv.textContent === placeholder3) {
                thirdDiv.textContent = "";
                thirdDiv.style.color = "black";
            }
        })
    };
    if (thirdDiv) {
        thirdDiv.addEventListener("blur", () => {
            setPLaceholder3();

        });

    }
    setPLaceholder3();

})

// applying placeholder to personal
const personaldetails: NodeListOf<HTMLDivElement> = document.querySelectorAll(".placeholder");

let placeholderText: string[] = ["YOUR NAME", "The role you are applying for?", ".Phone", ".Email", "Your summary here", "Title", "Company Name", "Company Description", "School or University", "Degree and Field of study", "Your Skills", "Course Title"];
for (let i = 0; i < personaldetails.length; i++) {
    function setPLaceholderText() {
        if (personaldetails[i]) {
            if (!personaldetails[i].textContent?.trim()) {
                personaldetails[i].textContent = placeholderText[i];
                personaldetails[i].style.color = "grey";
            }
        }
    }
    if (personaldetails[i]) {
        if (personaldetails[i].textContent?.trim()) {
            personaldetails[i].textContent = personaldetails[i].textContent;
            personaldetails[i].style.color = "black";
        }

    };
    if (personaldetails[i]) {
        personaldetails[i].addEventListener("blur", () => {
            setPLaceholderText();

        });

    }
    setPLaceholderText();

};

// Applying logic to generateMyResume button
const genButton: HTMLElement | null = document.querySelector("#build");

if (genButton) {
    genButton.addEventListener("click", (e) => {
        const genBox: HTMLDivElement | null = document.querySelector(".generator-box");
        if (genBox) {
            if (!genBox?.style.display) {
                genBox.style.display = "none";
            }
            genBox.style.display = "flex";
        }
    })
};

// applying logic to live preview button
const livePreviewBut: HTMLButtonElement | null = document.querySelector(".button");
if (livePreviewBut) {
    livePreviewBut.addEventListener("click", () => {
        if (livePreviewBut) {
            if (!livePreviewBut?.style.display) {
                livePreviewBut.style.display = "flex";
            }
            livePreviewBut.style.display = "none";
        }
        const PreviewBox: HTMLDivElement | null = document.querySelector(".preview");
        if (PreviewBox) {
            if (!PreviewBox?.style.display) {
                PreviewBox.style.display = "none";
            }
            PreviewBox.style.display = "block";
        }
    });
};

// applying logic to cross button
const crossButton: HTMLElement | null = document.querySelector(".cross");
const PreviewBox: HTMLDivElement | null = document.querySelector(".preview");
if (crossButton) {
    crossButton.addEventListener("click", () => {
        if (PreviewBox) {
            if (!PreviewBox?.style.display) {
                PreviewBox.style.display = "block";
            }
            PreviewBox.style.display = "none";
        }
        if (livePreviewBut) {
            if (!livePreviewBut?.style.display) {
                livePreviewBut.style.display = "none";
            }
            livePreviewBut.style.display = "flex";

        }


    })
}





// getting all input element
const fullNameInput: HTMLInputElement | null = document.querySelector("#FullNameF");
const roleInput: HTMLInputElement | null = document.querySelector("#RoleF");
const phoneInput: HTMLInputElement | null = document.querySelector("#PhoneNumberF");
const emailInput: HTMLInputElement | null = document.querySelector("#EmailF");
const companyNameInput: HTMLInputElement | null = document.querySelector("#CompanyNameF");
const companyTitleInput: HTMLInputElement | null = document.querySelector("#TitleF");
const schoolNameInput: HTMLInputElement | null = document.querySelector("#SchoolNameF");
const degreeInput: HTMLInputElement | null = document.querySelector("#DegreeF");
// getting editableDivs Input element
const summaryInputD: HTMLDivElement | null = document.querySelector("#SummaryF");
const companyDescriptionD: HTMLDivElement | null = document.querySelector("#CompanyDescriptionF");
const skillsD: HTMLDivElement | null = document.querySelector("#SkillsF");
const certificationD: HTMLDivElement | null = document.querySelector("#CertificationF");


// getting preview elements
const nameP: HTMLDivElement | null = document.querySelector("#name");
const roleP: HTMLDivElement | null = document.querySelector("#role");
const phoneP: HTMLDivElement | null = document.querySelector("#phone");
const emailP: HTMLDivElement | null = document.querySelector("#email");
const companyNameP: HTMLDivElement | null = document.querySelector("#companyName");
const companyTitleP: HTMLDivElement | null = document.querySelector("#title");
const schoolNameP: HTMLDivElement | null = document.querySelector("#schoolname");
const degreeP: HTMLDivElement | null = document.querySelector("#degree");
const summaryP: HTMLDivElement | null = document.querySelector("#summaryText");
const companyDescriptionP: HTMLDivElement | null = document.querySelector("#companydescription");
const skillsP: HTMLDivElement | null = document.querySelector("#skill");
const certificationP: HTMLDivElement | null = document.querySelector("#certificates");

``

// making input elements array
const input: (HTMLInputElement | null | HTMLDivElement)[] = [fullNameInput, roleInput, phoneInput, emailInput, companyTitleInput, companyNameInput, schoolNameInput, degreeInput, summaryInputD, companyDescriptionD, skillsD, certificationD];



// making preview elements array

const preview: (null | HTMLDivElement)[] = [nameP, roleP, phoneP, emailP, companyTitleP, companyNameP, schoolNameP, degreeP, summaryP, companyDescriptionP, skillsP, certificationP];


// making placeHolders array
let placeholder: string[] = ["YOUR NAME", "The role you are applying for?", ".Phone", ".Email", "Title", "Company Name", "School or University", "Degree and Field of study", "Your summary here", "Company Description", "Your Skills", "Course Title"];


// live preview
const inputFields: NodeListOf<HTMLInputElement> = document.querySelectorAll(".data");

for (let i = 0; i < inputFields.length; i++) {
    const Input: HTMLInputElement | null | HTMLDivElement = input[i];
    const Preview: HTMLDivElement | null = preview[i];
    const PlaceText = placeholder[i];

    if (Input) {
        Input.addEventListener("input", (e) => {
            if (document.activeElement === Input) {
                function livePreview() {
                    if (Preview && Input) {
                        if (!Preview?.textContent?.trim()) {
                            Preview.textContent = PlaceText;
                            Preview.style.color = "grey";

                        }
                    }
                }
                if (Preview && Input) {
                    if (Preview.textContent?.trim()) {
                        if (Input instanceof HTMLInputElement) {
                            Preview.textContent = Input.value;
                            Preview.style.color = "black";
                        } else {
                            Preview.textContent = Input.textContent;
                            Preview.style.color = "black";
                        }

                    }
                }
                if (Preview && Input) {

                    Preview.addEventListener("blur", () => {
                        livePreview();

                    });
                };
                livePreview();

            }
        });
    }


};

// submission & final resume generation
const form: HTMLFormElement | null = document.querySelector("form");
const savebutton: HTMLDivElement | null = document.querySelector(".save");
const options: HTMLDivElement | null = document.querySelector(".opt");
const longText: NodeListOf<HTMLDivElement> = document.querySelectorAll(".LText");
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    longText.forEach((textfields) => {
        if (!textfields?.textContent?.trim() || textfields.style.color == "grey") {
            alert("Fill all fields correctly before submission")
            throw new Error("Username is required");

        }
    })


    if (fullNameInput && nameP) {
        const fullName: string = fullNameInput.value;
        nameP.textContent = fullName;
    };
    if (roleInput && roleP) {
        const role: string = roleInput.value;
        roleP.textContent = role;
    };
    if (phoneInput && phoneP) {
        const phone: string = phoneInput.value;
        phoneP.textContent = phone;
    };
    if (emailInput && emailP) {
        const email: string = emailInput.value;
        emailP.textContent = email;
    };
    if (companyNameInput && companyNameP) {
        const companyName: string = companyNameInput.value;
        companyNameP.textContent = companyName;
    };
    if (companyTitleInput && companyTitleP) {
        const companyTitle: string = companyTitleInput.value;
        companyTitleP.textContent = companyTitle;
    };
    if (schoolNameInput && schoolNameP) {
        const schoolName: string = schoolNameInput.value;
        schoolNameP.textContent = schoolName;
    };
    if (degreeInput && degreeP) {
        const degreeName: string = degreeInput.value;
        degreeP.textContent = degreeName;
    };
    if (summaryInputD && summaryP) {
        const summary: string | null = summaryInputD.textContent;
        summaryP.textContent = summary;
    };
    if (companyDescriptionD && companyDescriptionP) {
        const summaryDes: string | null = companyDescriptionD.textContent;
        companyDescriptionP.textContent = summaryDes;
    };
    if (skillsD && skillsP) {
        const skills: string | null = skillsD.textContent;
        skillsP.textContent = skills;
    };
    if (certificationD && certificationP) {
        const certification: string | null = certificationD.textContent;
        certificationP.textContent = certification;
    };


    const formbox: HTMLDivElement | null = document.querySelector(".form");
    if (formbox) {
        if (!formbox?.style.display) {
            formbox.style.display = "block";
        }
        formbox.style.display = "none";
    };
    if (PreviewBox) {
        if (PreviewBox.style.display = "none") {
            PreviewBox.style.display = "block";
        }

        PreviewBox.style.width = "60%";
    }
    if (livePreviewBut) {
        if (!livePreviewBut?.style.display) {
            livePreviewBut.style.display = "flex";
        }
        livePreviewBut.style.display = "none";
    }
    if (crossButton) {
        if (!crossButton?.style.display) {
            crossButton.style.display = "block";

        }
        crossButton.style.display = "none";

    }
    if (options) {
        if (!options?.style.display) {
            options.style.display = "none";
        }
        options.style.display = "block";
    }
}





);
const edit: HTMLDivElement | null = document.querySelector(".edit");
edit?.addEventListener("click", () => {
    if (PreviewBox) {
        PreviewBox.contentEditable = "true";
    }
    if (options) {
        if (!options?.style.display) {
            options.style.display = "block";
        }
        options.style.display = "none";
    }
    if (savebutton) {
        if (!savebutton?.style.display) {
            savebutton.style.display = "none";
        }
        savebutton.style.display = "flex";

    }

})
if (savebutton) {
    savebutton.addEventListener("click", () => {
        if (PreviewBox) {
            PreviewBox.contentEditable = "false";
        }
        if (savebutton) {
            if (!savebutton?.style.display) {
                savebutton.style.display = "flex";
            }
            savebutton.style.display = "none";

        }
        if (options) {
            if (!options?.style.display) {
                options.style.display = "none";
            }
            options.style.display = "block";
        }





    })

}

const download: HTMLDivElement | null = document.querySelector(".download");
const resume: HTMLDivElement | null = document.querySelector(".borderbox");

download?.addEventListener("click", () => {
    if (resume) {
        // Open a new window for the printable content
        const printWindow = window.open("", "_blank");

        if (printWindow) {
            // Create an iframe inside the print window to isolate content for printing
            const iframe = printWindow.document.createElement("iframe");
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.border = "none";
            printWindow.document.body.appendChild(iframe);

            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (iframeDoc) {
                iframeDoc.open();
                iframeDoc.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>Print Resume</title>
                        <style>
                            /* General Styles */
                            body {
                                font-family: Arial, sans-serif;
                                margin: 20px;
                            }
                            .borderbox {
                                border: 2px solid #2D3639;
                                background-color: white;
                                padding: 80px 60px 100px 60px;
                                font-family: "Calibri";
                                position: relative;
                                break-inside: avoid;
                            }
                            #name {
                                font-size: 30px;
                                font-weight: bold;
                            }
                            #role {
                                font-size: 22px;
                            }
                            #summaryText {
                                border-top: 2px solid black;
                                margin: 8px 0px 20px 0px;
                                padding: 10px;
                            }
                            #companyName {
                                font-size: 17px;
                            }
                            #title {
                                font-size: 19px;
                                font-weight: 600;
                            }
                            .newPreTitle {
                                font-size: 19px;
                                font-weight: 600;
                            }
                            .newPreComName {
                                font-size: 17px;
                            }
                            #schoolname {
                                font-size: 19px;
                                font-weight: 600;
                            }
                            #degree {
                                font-size: 18px;
                            }
                            .newSchoolP {
                                font-size: 19px;
                                font-weight: 600;
                            }
                            .newFieldP {
                                font-size: 18px;
                            }
                            .detailContainer {
                                border-top: 2px solid black;
                                margin: 8px 0px 10px 0px;
                            }
                            .fieldmeasurements {
                                padding: 2px;
                            }
                            .heading {
                                display: flex;
                                justify-content: center;
                                margin-top: 50px;
                            }
                            .headingS {
                                display: flex;
                                justify-content: center;
                                margin-top: 30px;
                            }
                            .personaldetails {
                                padding: 10px 10px 3px 10px;
                            }
                            .personal {
                                display: flex;
                                justify-content: center;
                                margin-bottom: 7px;
                                gap: 15px;
                            }
                        </style>
                    </head>
                    <body>
                        ${resume.innerHTML}
                    </body>
                    </html>
                `);
                iframeDoc.close();

                // Ensure the content is fully loaded before triggering print
                iframe.onload = () => {
                    iframe.contentWindow?.focus();
                    iframe.contentWindow?.print();

                    // Optional: Close the window after printing (works well for mobile)
                    setTimeout(() => {
                        printWindow.onafterprint = () => printWindow.close();
                    }, 500);
                };
            }
        }
    }
});

































