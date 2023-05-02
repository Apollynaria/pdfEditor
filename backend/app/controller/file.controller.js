var multiparty = require('multiparty');
const fs = require("fs");

exports.fileSave = async (req, res) => {
    var form = new multiparty.Form();
    await form.parse(req, async (err, fields, files) => {
        if (!err) {
            console.log(fields.file[0]);
            fs.writeFile("hello.json", fields.file[0], function(error){
                if(error) throw error; // если возникла ошибка
            });
            res.send(200);
        } else {
            console.log("error");
        }
    });
};
