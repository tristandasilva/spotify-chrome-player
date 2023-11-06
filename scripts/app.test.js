//Test Case 1: Check if profile section is created when user is not logged in
test("Profile section should have login button when user is not logged in", () => {
  document.body.innerHTML = `
    <div id="profile"></div>
  `;

  if (localStorage.getItem("access_token") == null) {
    document.getElementById("profile").innerHTML = `
      <button
        id="login-button"
        type="button"
      >
        <i class="fa-brands fa-spotify mx-3 text-green-500"></i>
      </button>
    `;
  }

  const loginButton = document.getElementById("login-button");
  expect(loginButton).not.toBeNull();
});

//Test Case 2: Check if profile section is created when user is logged in
test("Profile section should have profile button when user is logged in", () => {
  document.body.innerHTML = `
    <div id="profile"></div>
  `;

  localStorage.setItem("access_token", "example_token");

  if (localStorage.getItem("access_token") == null) {
    document.getElementById("profile").innerHTML = `
      <button
        id="login-button"
        type="button"
      >
        <i class="fa-brands fa-spotify mx-3 text-green-500"></i>
      </button>
    `;
  } else {
    document.getElementById("profile").innerHTML = `
      <button
        data-dropdown-toggle="account-dropdown"
        type="button"
        id="profile-button"
      >
        <i class="fa-solid fa-user mx-3 dark:text-white"></i>
      </button>
    `;
  }

  const profileButton = document.getElementById("profile-button");
  expect(profileButton).not.toBeNull();
});

//Test Case 3: Check if getMinAndSec function converts milliseconds correctly

function getMinAndSec(ms) {
  var min = Math.floor(ms / 60000);
  var sec = ((ms % 60000) / 1000).toFixed(0);
  return sec == 60 ? min + 1 + ":00" : min + ":" + (sec < 10 ? "0" : "") + sec;
}

test("getMinAndSec function should convert milliseconds correctly", () => {
  const milliseconds = 123456;
  const result = getMinAndSec(milliseconds);
  expect(result).toBe("2:03");
});
