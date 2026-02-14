
<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SmartEnglish</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    <script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#0d7ff2",
              "background-light": "#f5f7f8",
              "background-dark": "#101922",
            },
            fontFamily: {
              "display": ["Lexend", "system-ui", "sans-serif"]
            },
          },
        },
      }
    </script>
    <style>
      body {
        font-family: 'Lexend', sans-serif;
        -webkit-tap-highlight-color: transparent;
        background-color: #f5f7f8;
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    </style>
  <script type="importmap">
{
  "imports": {
    "react-dom/": "https://esm.sh/react-dom@^19.2.4/",
    "react/": "https://esm.sh/react@^19.2.4/",
    "react": "https://esm.sh/react@^19.2.4"
  }
}
</script>
<link rel="stylesheet" href="/index.css">
</head>
  <body class="bg-background-light text-slate-900">
    <div id="root"></div>
  <script type="module" src="/index.tsx"></script>
</body>
</html>
