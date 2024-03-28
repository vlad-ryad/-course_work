<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "vladvirys09@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта SMM-менеджера Дмитревой Евгении";

	
	$msg="
    Имя: $name 
    Телефон: $phone 
    Почта: $email 
    Текст: $text"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p style="font-size: 40px; margin-top: 100px;"> форма успешно отправленна</p>
