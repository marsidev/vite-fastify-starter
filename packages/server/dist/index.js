"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("dotenv/config");
const fastify_1 = tslib_1.__importDefault(require("fastify"));
const static_1 = tslib_1.__importDefault(require("@fastify/static"));
const path_1 = tslib_1.__importDefault(require("path"));
const hello_1 = tslib_1.__importDefault(require("@controllers/hello"));
const { PORT = 3001, HOST = '0.0.0.0' } = process.env;
const server = (0, fastify_1.default)();
server.register(static_1.default, {
    root: path_1.default.join(__dirname, '../../../public')
});
server.register(hello_1.default, { prefix: '/api/hello' });
const start = async () => {
    try {
        await server.listen(PORT, HOST);
        console.log(`Server listening on port ${PORT}`);
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=index.js.map