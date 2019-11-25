express = require("express");
path = require("path");
metrics = require("./metrics");
app = express();
app.use(express.static(path.join(__dirname, "public")));
app.set("port", 1337);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.get('/', function (req, res) {
    return res.render("index.ejs", { name: "kjkj" });
});
app.get("/hello/:name", function (req, res) {
    return res.render("hello.ejs", { name: req.params.name });
});
app.get("/metrics.json", function (req, res) {
    metrics.get(function (err, data) {
        if (err)
            throw err;
        res.status(200).json(data);
    });
});
app.listen(app.get("port"), function () {
    return console.log("server listening on " + app.get("port"));
});
