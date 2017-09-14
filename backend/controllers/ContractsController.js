const solc = require('solc');

let compile = (req, res) => {
    let code = req.body.text;
    res.json(solc.compile(code).contracts[':Test']);
}

module.exports = {
    compile: compile
}