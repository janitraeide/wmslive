<?php
session_start();
require_once('translations.php');
?>
<!DOCTYPE html>
<html lang="<?php echo $_SESSION['lang'] ?? 'en'; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found | Work Mate Solutions</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        .error-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 2rem;
            background: var(--light-color);
        }

        .error-number {
            font-size: clamp(6rem, 20vw, 12rem);
            font-weight: bold;
            color: var(--primary-color);
            animation: floating 3s ease-in-out infinite;
            margin: 0;
            line-height: 1;
        }

        .error-text {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            margin: 1rem 0;
            color: var(--text-color);
            animation: fadeIn 1s ease-out;
        }

        .error-description {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            color: var(--text-color);
            opacity: 0.8;
            animation: fadeIn 1.5s ease-out;
        }

        .home-button {
            padding: 1rem 2rem;
            background: var(--primary-color);
            color: white;
            text-decoration: none;
            border-radius: 30px;
            font-weight: 500;
            transition: transform 0.3s, box-shadow 0.3s;
            animation: fadeIn 2s ease-out;
        }

        .home-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        @keyframes floating {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .astronaut {
            width: 150px;
            height: 150px;
            position: relative;
            animation: float 6s ease-in-out infinite;
            margin: 2rem 0;
        }

        .astronaut img {
            width: 100%;
            height: auto;
        }

        @keyframes float {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
            100% { transform: translateY(0) rotate(0deg); }
        }
    </style>
</head>
<body>
    <div class="error-container">
        <h1 class="error-number">404</h1>
        <div class="astronaut">
            <img src="assets/astronaut.svg" alt="Lost astronaut">
        </div>
        <h2 class="error-text">Page Not Found</h2>
        <p class="error-description">Oops! Looks like you've ventured into unknown territory.</p>
        <a href="./index.php" class="home-button">Return Home</a>
    </div>
</body>
</html>