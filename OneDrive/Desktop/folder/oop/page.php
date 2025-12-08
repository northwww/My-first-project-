<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Заголовок</h1>
    <p>Text</p>
    <form action="function.php" method="GET">
        <input type="text" name="text" placeholder="Введіть text" required>
        <br>
        <input type="number" name="number" placeholder="Введіть number" required>
        <br>
        <input type="date" name="date" placeholder="Введіть date" required>
        <br>
        <input type="submit" value="Push me" required>
        <br>
    </form>
<?php
    if(isset($_GET['text']))
        var_dump($_GET['text']);
    if(isset($_GET['number']))
        var_dump($_GET['number']);
    if(isset($_GET['date']))
        var_dump($_GET['date']);
?>    
</body>
</html>