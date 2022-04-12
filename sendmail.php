<?php
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = "tls";
$mail->Host = "smtp.gmail.com";
$mail->Port = "587";
$mail->Username = "sasha.h.l2018@gmail.com";
$mail->Password = "aerwfgujyqmysyrh";

$mail->IsHTML(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer/language/');
$mail->setFrom('sasha.h.l2018@gmail.com', 'Alexander');
$mail->addAddress('pixelgun3d2014@gmail.com');


$mail->Subject = 'Обратная связь';

$body = '<h1>Вот ваше письмо!</h1>';

if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя: </strong>' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['formTheme']))) {
    $body .= '<p><strong>Тема обращения: </strong>' . $_POST['formTheme'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
    $body .= '<p><strong>E-mail: </strong>' . $_POST['email'] . '</p>';
}
if (trim(!empty($_POST['message']))) {
    $body .= '<p><strong>Сообщение: </strong>' . $_POST['message'] . '</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}
$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);
