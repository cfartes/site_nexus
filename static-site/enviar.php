<?php
declare(strict_types=1);

header('Content-Type: text/html; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Método inválido</title><body style="font-family:Arial,sans-serif;background:#05100e;color:#e9f2ef;padding:24px">Método inválido.</body></html>';
  exit;
}

function field(string $key): string {
  return trim((string)($_POST[$key] ?? ''));
}

$nome = field('Nome');
$email = field('email');
$empresa = field('Empresa');
$interesse = field('Interesse');
$mensagem = field('Mensagem');

if ($nome === '' || $email === '' || $mensagem === '') {
  http_response_code(422);
  echo '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Dados incompletos</title><body style="font-family:Arial,sans-serif;background:#05100e;color:#e9f2ef;padding:24px">Preencha nome, e-mail e mensagem.</body></html>';
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>E-mail inválido</title><body style="font-family:Arial,sans-serif;background:#05100e;color:#e9f2ef;padding:24px">E-mail inválido.</body></html>';
  exit;
}

$to = 'comercial@nexusdataanalytics.com.br';
$subject = 'Novo contato - Site Nexus';
$from = 'noreply@nexusdataanalytics.com.br';

$safeNome = htmlspecialchars($nome, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeEmpresa = htmlspecialchars($empresa, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeInteresse = htmlspecialchars($interesse, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeMensagem = nl2br(htmlspecialchars($mensagem, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));

$body = <<<HTML
<!doctype html>
<html lang="pt-BR">
  <meta charset="utf-8">
  <body style="font-family:Arial,sans-serif;line-height:1.5;color:#18211f">
    <h2>Novo contato recebido pelo site</h2>
    <p><strong>Nome:</strong> {$safeNome}</p>
    <p><strong>Email:</strong> {$safeEmail}</p>
    <p><strong>Empresa:</strong> {$safeEmpresa}</p>
    <p><strong>Interesse:</strong> {$safeInteresse}</p>
    <p><strong>Mensagem:</strong><br>{$safeMensagem}</p>
  </body>
</html>
HTML;

$headers = [
  'MIME-Version: 1.0',
  'Content-type: text/html; charset=UTF-8',
  'From: Nexus Site <' . $from . '>',
  'Reply-To: ' . $email,
];

$ok = @mail($to, $subject, $body, implode("\r\n", $headers));

if (!$ok) {
  http_response_code(500);
  echo '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Falha no envio</title><body style="font-family:Arial,sans-serif;background:#05100e;color:#e9f2ef;padding:24px"><h2>Não foi possível enviar agora.</h2><p>Tente novamente em instantes ou use o WhatsApp (48) 3197-8198.</p></body></html>';
  exit;
}

echo '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Mensagem enviada</title><body style="font-family:Arial,sans-serif;background:#05100e;color:#e9f2ef;padding:24px"><h2>Mensagem enviada com sucesso.</h2><p>Retornaremos em breve.</p></body></html>';
