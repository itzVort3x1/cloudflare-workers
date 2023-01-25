import flag from 'country-code-emoji';

const template = (cf) => {
    const emoji = flag(cf.country);
    return `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css"></link>
    <style>
        body {
            background: #eee;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            font-family: sans-serif;
        }
        div.container {
            background: #fff;
            border-radius: 1rem;
            padding: 4rem;
        }
    </style>
    <title>Hello!</title>
</head>
<body>
        <div class="container">
            <h1>Hello Your connect from ${cf.city} in ${cf.country} ${emoji}</h1>
        </div>
</body>
</html>
`}

export default template;