<style>
.box-wrapper {
	display:flex;
	flex-flow: row wrap;
}
.box {
	flex: 1;
	margin: 10px;
	min-width: 185px;
}
img {
	max-width: 100%;
	
}
.btn {
	display:inline-block;
	padding: .5rem 1rem;
	text-decoration: none;
	background: #39e600;
	color:black;
	box-shadow: 0 0 5px rgba(57, 230, 0, 1);
	margin: 0px auto;
}
@media (max-width: 530px) {
	.box {
		min-width: 150px;
	}
}
</style>

<h1>HÍREK</h1>
<div class="box-wrapper">
	<div class="box">
		<img src="pics/news/1.jpg" alt="">
		<div class="box-content">
			<h2>Első</h2>
			<p>Flexbox-ba lesz elrendezve</p>
			<a class="btn" href="">Részletek</a>
		</div>
	</div>
	<div class="box">
		<img src="pics/news/2.jpg" alt="">
		<div class="box-content">
			<h2>Második</h2>
			<p>Flexbox-ba lesz elrendezve</p>
			<a class="btn" href="">Részletek</a>
		</div>
	</div>
	<div class="box">
		<img src="pics/news/3.jpg" alt="">
		<div class="box-content">
			<h2>Harmadik</h2>
			<p>Flexbox-ba lesz elrendezve</p>
			<a class="btn" href="">Részletek</a>
		</div>
	</div>
	<div class="box">
		<img src="pics/news/4.jpg" alt="">
		<div class="box-content">
			<h2>Negyedik</h2>
			<p>Flexbox-ba lesz elrendezve</p>
			<a class="btn" href="">Részletek</a>
		</div>
	</div>
	<div class="box">
		<img src="pics/news/5.jpg" alt="">
		<div class="box-content">
			<h2>Ötödik</h2>
			<p>Flexbox-ba lesz elrendezve</p>
			<a class="btn" href="">Részletek</a>
		</div>
	</div><div class="box">
		<img src="pics/news/6.jpg" alt="">
		<div class="box-content">
			<h2>Hatodik</h2>
			<p>Flexbox-ba lesz elrendezve</p>
			<a class="btn" href="">Részletek</a>
		</div>
	</div>
</div>