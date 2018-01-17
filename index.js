const crypto = require('crypto');

let hash = (algorithm, string) => {
    var hash = crypto.createHash(algorithm);
    hash.update(string);
    return hash.digest('base64');
};

module.exports = {
    sha1: (string) => {
        return hash('sha1', string);
    }
};