<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
$secret = require('../../.smtp.php');
//$secret = require('../../../.credital/.smtp.php');

// Переменные, которые отправляет пользователь
$type = (isset($_POST['type']) && !empty($_POST['type'])) ? htmlspecialchars($_POST['type']) : ''; 
$name = (isset($_POST['name']) && !empty($_POST['name'])) ? htmlspecialchars($_POST['name']) : '';
$phone = (isset($_POST['phone']) && !empty($_POST['phone'])) ? htmlspecialchars($_POST['phone']) : '';
$email = (isset($_POST['email']) && !empty($_POST['email'])) ? htmlspecialchars($_POST['email']) : '';
$message = (isset($_POST['message']) && !empty($_POST['message'])) ? htmlspecialchars($_POST['message']) : '';
//$file = $_FILES['myfile'];
switch ($type) {
    case 'gift':
        $title = "Заказ подарка Best Tour Plan";
        $body = "
            <h2>Новое обращение:</h2>
            <b>Имя:</b> $name<br>
            <b>Телефон:</b> $phone<br><br>
            <b>Сообщение:</b><br>$message
        ";
        break;
    case 'newsletter':
        $title = "Подписка на новости Ehya Bookstore";
        $body = "
            <h2>Новый запрос на подписку: </h2>
            <b>Почта:</b> $email
        ";
        break;
    case 'top-order':
        $title = "Покупка Ehya Bookstore";
        $body = "
            <h2>Новая покупка Top-книги:</h2>
            <b>Имя:</b> $name<br>
            <b>Телефон:</b> $phone<br>
            <b>Почта:</b> $email<br><br>
            <b>Сообщение:</b><br>$message
        ";
        break;
    case 'excite-order':
        $title = "Покупка Ehya Bookstore";
        $body = "
            <h2>Новая покупка рекомендованной книги:</h2>
            <b>Имя:</b> $name<br>
            <b>Телефон:</b> $phone<br>
            <b>Почта:</b> $email<br><br>
            <b>Сообщение:</b><br>$message
        ";
        break;
    
    default:
        $title = "Какое-то сообщение Ehya Bookstore";
        $body = "
            <h2>Неизвестный тип обращения:</h2>
            <b>Имя:</b> $name<br>
            <b>Телефон:</b> $phone<br>
            <b>Почта:</b> $email<br><br>
            <b>Сообщение:</b><br>$message
        ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = $secret['username']; // Логин на почте
    $mail->Password   = $secret['pass']; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom($secret['username'], 'Best Tour'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress($secret['post_address']);  
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
//echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
header('Location: thankyou.html');