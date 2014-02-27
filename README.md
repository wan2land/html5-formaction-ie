#HTML5, formaction for IE

##How to use

insert.

```lang-html
<!--[if lt IE 10]>
<script src="http://cdn.wani.kr/html5/input.formaction-ie.min.js"></script>
<![endif]-->
```

that's all.

## Example

```lang-html
<!DOCTYPE HTML>
<html lang="ko">
<head>

<title>Example</title>
<meta charset="utf-8" />

<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<!--[if lt IE 10]>
<script src="http://cdn.wani.kr/html5/input.formaction-ie.min.js"></script>
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
```