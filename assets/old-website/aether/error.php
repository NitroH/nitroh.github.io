<?php
switch($_GET['code'])
{
case '404':header('Location: https://nitroh.fr/erreur-404.php');
break;
default:header('Location: https://nitroh.fr');
}
?>