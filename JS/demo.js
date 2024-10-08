<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        p {
            font-size: 16px;
            color: #333;
        }
        button {
            padding: 10px 15px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #218838;
        }
    </style>
</head>
<body>

    <h1>JavaScript Interaction Demo</h1>
    <p id="text">This text will change when you click the button!</p>
    <button id="changeTextButton">Click Me!</button>
    <p>Button clicked <span id="counter">0</span> times.</p>

    <script>
        let count = 0;

        const button = document.getElementById('changeTextButton');
        const text = document.getElementById('text');
        const counter = document.getElementById('counter');

        button.addEventListener('click', () => {
            count++;
            text.textContent = "You clicked the button!";
            counter.textContent = count;
        });
    </script>

</body>
</html>
