const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

//key값에 문자열을 직접 입력하지 않고 변수화.
const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

const nickname = localStorage.getItem(NICKNAME);

if (nickname == null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input; // input.value
  input.value = "";
  //username저장
  localStorage.setItem(NICKNAME, value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
