<!DOCTYPE html>
<html lang="hu">
<head>
	<title>Aliens vs. Predator</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/home.css">
	<link rel="icon" type="image/png" href="pics/facicon.png">
</head>
<body>
	<div class="wrapper">
	<div class="banner">
	<h1>Aliens vs. Predator<br>
	Concept</h1>
	</div>
		<div class="content">
			<nav>
				<label for="menu" class="menu-btn">
					MENÜ
				</label>
				<input type="checkbox" id="menu">
			
				<ul class="nav1">
					<li><a href="index.php">Főoldal</a></li>
					<li><a href="index.php?op=news">Hírek</a></li>
					<li class="has-submenu"><a href="">Almenük<div class="arrow">⯈</div></a>
						<ul class="submenu">
							<li>Első</li>
							<li>Második</li>
							<li>Harmadik</li>
						</ul>
					</li>
					<li><a href="index.php?op=contact">Kapcsolat</a></li>
					<li style="margin:10px 0 5px 2px; line-height:40px; border-top: 2px solid #39e600;">&#9635 Online</li>
					<li><a href="">Beállítások</a></li>
					<li><a href="">Nyomtatás</a></li>
					<li><a href="../index.html">Kilépés</a></li>
				</ul>
			</nav>
			<main>
				<?php
					if(isset($_GET["op"]) && $_GET["op"]!="") {
					$op = $_GET["op"];
					if (file_exists("inc/".$op.".php")) {
						include_once ("inc/".$op.".php");
						} else {
							include_once ("inc/404.php");
							}
					} else {
						include_once ("inc/main.php");
					}
				?>
			</main>
			<footer>
			<div class="left">Copyright szöveg</div>
			<div class="right">
				<a href="">Link1</a> |
				<a href="">Link2</a> |
				<a href="">Link3</a>
				<div>
			</footer>
		</div>
	</div>
	
</body>
</html>