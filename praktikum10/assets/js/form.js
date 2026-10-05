// Get DOM elements
const textTutorial = document.getElementById("textTutorial");
const videoTutorial = document.getElementById("videoTutorial");
const contentContainer = document.getElementById("contentContainer");
const duration = document.getElementById("duration");

function updateForm() {

    contentContainer.replaceChildren();

    if (textTutorial.checked) {

        const input = document.createElement("input");

        input.type = "url";
        input.name = "content";
        input.id = "content";
        input.required = true;
        input.placeholder = "https://example.com/tutorial";

        contentContainer.appendChild(input);

        duration.required = false;

    } else if (videoTutorial.checked) {

        const textarea = document.createElement("textarea");

        textarea.name = "content";
        textarea.id = "content";
        textarea.required = true;
        textarea.placeholder = "Paste YouTube embed code here";

        contentContainer.appendChild(textarea);

        duration.required = true;
    }
}

textTutorial.addEventListener("change", updateForm);
videoTutorial.addEventListener("change", updateForm);

updateForm();