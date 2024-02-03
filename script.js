let button = document.getElementById("button");

function isPalindrome(inputString) {
  let string = inputString.toLowerCase().trim();
  let reversedString = string.split("").reverse().join("");
  return string === reversedString;
}

button.addEventListener("click", () => {
  let input = document.getElementById("palindrome");
  let html_result = document.querySelector(".result");
  let result;

  if (input.value === "") {
    html_result.innerHTML = "No input has been given!";

  } else {
    result = isPalindrome(input.value);
    let span = document.createElement("span");

    // Styling the particular word
    span.style.color = "lightcoral";
    span.style.textTransform = "uppercase";
    span.style.textDecoration = "underline";
    span.style.fontWeight = "bold";
    span.textContent = input.value;

    if (result) {
      html_result.innerHTML = `Yes, the word/phrase ${span.outerHTML} is a Palindrome.`;
    } else {
      html_result.innerHTML = `No, the word/phrase ${span.outerHTML} is not a Palindrome.`;
    }
  }

  input.value = "";
});
