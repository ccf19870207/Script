var body = $response.body;
body = '\/*\n@supported 填X的设备Id\n*\/\n' + body;

$done(body);
