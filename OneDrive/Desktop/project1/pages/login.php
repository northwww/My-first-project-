<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?= $title ?></title>
  <link rel="icon" href="images/Daco_1302675.png">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css" integrity="sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls" crossorigin="anonymous">
  <link rel="stylesheet" href="style/style.css">
</head>
<body class="login-page">
  <a href="index.html" class="back-button">← Back to Home</a>
  <div class="login-box">
    <img src="images/Intel_logo_(2006-2020).svg.png" alt="Intel Logo" class="logo" />
    <h2>Sign In</h2>
    <form class="pure-form">
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
        <label class="remember-me">
      <input type="checkbox" name="remember" />
        Remember me
        </label>
      <button type="submit" class="pure-button ">Next</button>
  <button type="button" class="google-button">
  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google icon" />
  Sign in with Google
</button>
    </form>
    <hr/>
    <a href="registr.html" class="link">Don't have an account?</a>
    <p class="terms">
      By signing in, you agree to our <a href="#" class="link">Terms of Use</a>
    </p>
  </div>
</body>
</html>