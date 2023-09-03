import express from 'express'
import config from './config'
import strings from './res/strings';


async function main () {
    const app = express();

    await require("./loaders").default({ expressApp: app });

    app.listen(config.port, () => console.log(strings.serverMessage(config.port)))
        .on('err', err => {
            console.error(err);
            process.exit(1);
        });
}

main();