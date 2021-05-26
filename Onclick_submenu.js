<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
    <title>Document</title>
</head>
<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);

* {
  margin: 0;
  padding: 0;
}

body {
  background: #567;
  font-family: "Open Sans", sans-serif;
}

.button {
  width: 200px;
  background: red;
  display: block;
  margin: 0 auto;
  margin-top: 1%;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-transition: background 0.3s;
}

.button:hover {
  background: #333;
}

#login {
  width: 400px;
  margin: 0 auto;
  margin-top: 8px;
  margin-bottom: 2%;
  transition: opacity 1s;
  -webkit-transition: opacity 1s;
}

#triangle {
  width: 0;
  border-top: 12x solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid red;
  border-left: 12px solid transparent;
  margin: 0 auto;
}

#login h1 {
  background: red;
  padding: 20px 0;
  font-size: 140%;
  font-weight: 300;
  text-align: center;
  color: #fff;
}

form {
  background: #f0f0f0;
  padding: 6% 4%;
}

input[type="text"] {
  width: 92%;
  background: #fff;
  margin-bottom: 4%;
  border: 1px solid #ccc;
  padding: 4%;
  font-family: "Open Sans", sans-serif;
  font-size: 95%;
  color: #555;
}

input[type="submit"] {
  width: 100%;
  background: green;
  border: 0;
  padding: 4%;
  font-family: "Open Sans", sans-serif;
  font-size: 100%;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-transition: background 0.3s;
}

input[type="submit"]:hover {
  background: red;
}

</style>
<body>
    <span href="#" class="button" id="toggle-login">Experimente grátis</span>

<div id="login">
  <div id="triangle"></div>
  <h1>Experimente grátis</h1>
  <form>
    <input type="text" placeholder="Nome" />
    <input type="text" placeholder="OAB" />
    <input id="estados" type="text" placeholder="Estados" />
    <input type="text" placeholder="Email" />
    <input type="submit" value="Log in" />
  </form>
</div>
</body>
<script>
    $(function () {
  var estadosList = ["São Paulo", "Rio de Janeiro"];
  $("#estados").autocomplete({
    source: estadosList
  });
});

$("#toggle-login").click(function () {
  $("#login").toggle();
});

</script>
</html>
