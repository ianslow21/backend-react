const express = require("express")
const cors = require("cors")
const morgan = require("morgan");
const routeAkses = require("./routes");

require("./db");
require("./model")

const app = express();
const port = 4000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/book", routeAkses)

app.listen(port, () => {
    console.log('Server berhasil dijalankan pada port'+port);
});