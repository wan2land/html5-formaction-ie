<!DOCTYPE HTML>
<!--//
This web page has been developed by Wani.
 - me@wani.kr
 - http://wani.kr
-->
<html lang="ko">
<head>

<title>Title</title>
<meta charset="utf-8" />

<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<!--[if lt IE 10]>
<script src="input.formaction-ie.min.js"></script>
<![endif]-->

</head>
<body>


<form action="go1.php" method="POST">
	First name: <input type="text" name="fname"><br>
	Last name: <input type="text" name="lname"><br>
	<button type="submit">submit1</button>
	<button type="submit" formaction="go2.php">submit2</button>
</form>

</body>
</html>