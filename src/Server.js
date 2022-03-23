const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/index");

class Server {
    constructor(app, port) {
        this.app = app;
        this.port = port;
    }

    run() {
        // Cors
        this.app.use(cors({
            origin: ['http://localhost:3000', 'http://192.168.1.90:3000', 'https://react.jdm.boutique/', 'http://react.jdm.boutique/'],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            credentials: true
        }));

        // Body Parser
        this.app.use(bodyParser.json());
        this.app.use(
            bodyParser.urlencoded({
                extended: false,
            })
        );

        // Routes
        this.app.use(router);

        // Run app
        return this.app.listen(this.port, () => {
            try {
                console.log(`server is running on ${this.port} ...🚀`);
            } catch (error) {
                throw error;
            }
        });
    }
}
