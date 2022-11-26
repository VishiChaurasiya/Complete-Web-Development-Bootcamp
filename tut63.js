// console.log("Hello World");

// Creating a Server by using code provided by NodeJS(Website)
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid with Media Queries</title>
    <style>
        .container{
            display: grid;
            grid-gap: 1rem;
            grid-template-areas:
            'navbar navbar navbar navbar'
            'section section section aside'
            'footer footer footer footer';
        }
        nav{
            grid-area: navbar;
        }
        section{
            grid-area: section;
        }
        aside{
            grid-area: aside;
        }
        footer{
            grid-area: footer;
            text-align: center;
        }

        .bdr{
            border: 2px solid black;
            padding: 10px 23px;
            background-color: wheat;
        }

        @media only screen and (max-width: 300px) {
            body{
                background-color: red;
            }
            .container{
                grid-template-areas:
                'navbar navbar navbar navbar'
                'section section section section'
                /* 'aside aside aside aside' */
                'footer footer footer footer';
            }
            aside{
                display: none;
            }
            span{
                display: block;
                text-align: center;
            }
        }
        @media only screen and (min-width: 300px) and (max-width: 500px) {
            body{
                background-color: blue;
            }
            .container{
                grid-template-areas:
                'navbar navbar navbar navbar'
                'section section section section'
                /* 'aside aside aside aside' */
                'footer footer footer footer';
            }
            aside{
                display: none;
            }
            span{
                display: block;
                text-align: center;
            }
        }
        @media (min-width: 500px) and (max-width: 800px) {
            body{
                background-color: yellow;
            }
            .container{
                grid-template-areas:
                'navbar navbar navbar navbar'
                'section section section section'
                'aside aside aside aside'
                'footer footer footer footer';
            }
            span{
                display: block;
                text-align: center;
            }
        }
        @media (min-width: 800px) {
            body{
                background-color: green;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <nav class="bdr">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact</span>
        </nav>
        <section class="bdr">
            <h2>Learn CSS in hindi</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis expedita laudantium ab distinctio corporis doloremque odit voluptate dolores maxime? Atque ratione error hic omnis aut quia et quam aspernatur rerum? Corporis aspernatur accusamus aliquam, aliquid obcaecati magni reprehenderit vero dolore excepturi beatae deleniti quam ut ad deserunt quisquam laborum porro voluptate temporibus ducimus doloremque cum necessitatibus! Ab, eveniet hic? Soluta aliquam fugit mollitia dicta harum, autem, excepturi consequuntur voluptatibus amet dolores consequatur nesciunt iusto id sint facere hic pariatur animi facilis repellendus reiciendis est tempora, similique molestias error? Repellendus ipsam aut, quisquam voluptatem a fugiat quam molestias quae ab eum?</p>
        </section>
        <aside class="bdr">
            <h1>More about us</h1>
        </aside>
        <footer class="bdr">Copyright CodeWithHarry 2022</footer>
    </div>
</body>
</html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});