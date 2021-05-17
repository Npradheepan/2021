<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title> Fixed Navigation Manu</title>
	<meta name="viewport" content="width=device-width , initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js">
	</script>
	
<style>
body{
	margin: 0;
	padding: 0;
	font-family: sans-serif;
	background:url(image/whw.jpg);
	background-size:cover;
	 
}
header{
	position: absolute;
	width: 100%;
	top:0;
	left: 0;
	padding: 0 100px;
	background: #373642;
	box-sizing: border-box;
}
header .logo{
	color: #fff;
	height: 50px;
	line-height: 50px;
	font-size: 24px;
	float: left;
	font-weight: bold;
}
header nav{
	float: right;
}
header nav ul{
	margin: 0;
	padding: 0;
	display: flex;
}
header nav ul li{
	list-style: none;
	position: relative;
}
header nav ul li.sub-menu:before{
	content: '\f0d7';
	font-family: fontAwesome;
	position: absolute;
	line-height: 50px;
	color:#fff;
	right: 5px;
}
header nav ul li.active.sub-menu:before{
	content: '\f0d8';
}
header nav ul li ul{
	position: absolute;
	left: 0;
	background:#333;
	display: none;
}
header nav ul li.active ul{
	display: block;
}
header nav ul li ul li{
	display: block;
	width: 200px;

}

header nav ul li a{
	height: 50px;
	line-height: 50px;
	padding: 0 20px;
	color: #fff;
	text-decoration: none;
	display: block;
	background-color:#373642;

}
header nav ul li a:hover{
	color: #fff;
	background:#0fccd2;
}
.btn span{
	display: block;
	margin: 6px;
	width: 40px;
	height: 3px; 
	background:#e5041b;
}
.btn{
	
	position: absolute;
	right: 20px;
	color:#beeae1;
	float: right;
	line-height: 50px;
	font-size: 24px;
	cursor: pointer;
	display: none;
}
.btn:hover> span{
	background: #6ab04c;
}
@media(max-width: 680px){
	header{
		padding: 0 20px;
	}
	.btn{
		display: block;
	}
	header  nav
	{
		
		position: absolute;
		width: 100%;
		height:calc(100vh -50px);
		background-color: #333;
		top:50px;
		left: -100%;
		transition: 0.5s;
	}
	header  nav.active{
		left:0;
	}
	header nav ul{
		display: block;
		text-align: center;
	}
	header nav ul li a{
		border-bottom: 1px solid rgba(0,0,0,.2)
	}
	header nav ul li.active ul{
		position: relative;
		background-color:#4441f4;
	}
	header nav ul li ul li{
		width: 100%;
	}
}

</style>
</head>
<body>
	<header>
		
			<div class="logo">LOGO</div>
			
			<div class="btn">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav>
			 <ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Work</a></li>
				<li class="sub-menu"><a href="#">Contact</a>
					<ul>
						<li><a href="#">Link1</a></li>
						<li><a href="#">Link2</a></li>
						<li><a href="#">Link3</a></li>
						<li><a href="#">Link4</a></li>
						<li><a href="#">Link5</a></li>

					</ul>
				</li>
				<li><a href="#">Team</a></li>
				<li class="sub-menu"><a href="#">Service</a>
					<ul>
						<li><a href="#">Morning</a></li>
						<li><a href="#">Noon</a></li>
						<li><a href="#">Evening</a></li>
						<li><a href="#">Night</a></li>
					</ul>
				</li>
			</ul>
			 </nav>
		
	</header>
</body>
<script type="text/javascript">
  $(document).ready(function(){
  $('.btn').click(function(){
  $('nav').toggleClass('active');
    })
  $('ul li').click(function(){
  $(this).siblings().removeClass('active')
  $(this).toggleClass('active')
    })
  
  })
</script>
</html>
	
