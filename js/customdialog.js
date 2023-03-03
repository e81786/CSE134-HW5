export function customDialogs() {
  //variables
  const output = document.getElementById("output");
  const buttons = document.getElementsByTagName("button");
  const dialogs = document.getElementsByTagName("dialog");
  const alertDialog = document.getElementById("alertDialog");
  const alertDone = document.getElementById("done");
  const confirmDialog = document.getElementById("confirmDialog");
  const confirmDone = document.getElementById("confirmDone");
  const confirmCancel = document.getElementById("confirmCancel");
  const promptDialog = document.getElementById("promptDialog");
  const promptDone = document.getElementById("promptDone");
  const promptCancel = document.getElementById("promptCancel");
  const promptInput = document.getElementById("name");

  //Clear output when button is pressed, then open the dialog
  for (let i = 0; i < 3; i++) {
    buttons[i].addEventListener("click", () => {
      output.innerHTML = "";
      setTimeout(() => {
        dialogs[i].showModal();
      }, 20);
    });
  }

  //Close Alert
  alertDone.addEventListener("click", () => {
    alertDialog.close();
  });

  //Cancel Confirm Button
  confirmCancel.addEventListener("click", () => {
    output.innerHTML = `Confirm Result: WRONG`;
    confirmDialog.close();
  });

  //Confirm Confirm Button
  confirmDone.addEventListener("click", () => {
    output.innerHTML = `Confirm Result: True :)`;
    confirmDialog.close();
  });

  //Cancel Prompt Button
  promptCancel.addEventListener("click", () => {
    output.innerHTML = `User cancelled`;
    promptInput.value = "";
    promptDialog.close();
  });

  //Confirm Prompt Button
  promptDone.addEventListener("click", () => {
    const text = promptInput.value;
    if (text == "") {
      output.innerHTML = "No user input";
    } else {
      output.innerHTML = tagPurify`User Name: ${text}`;
    }
    promptInput.value = "";
    promptDialog.close();
  });

  //The tagged on Purify Function
  function tagPurify(strings, ...values) {
    const dirty = strings.reduce(
      (prev, next, i) => `${prev}${next}${values[i] || ""}`,
      ""
    );
    return DOMPurify.sanitize(dirty);
  }
}
