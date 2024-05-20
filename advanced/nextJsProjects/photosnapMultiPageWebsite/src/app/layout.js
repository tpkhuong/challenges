import "../styles/global.css";

// export

export default function Rootlayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="KhuongCorp" />
        <meta name="description" content="Photoshop Page" />
        <title>Photosnap MultiPage</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
