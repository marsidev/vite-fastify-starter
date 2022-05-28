"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { MESSAGE } = process.env;
const router = async (server, opts) => {
    server.get('/', opts, async (_request, reply) => {
        const data = {
            hello: MESSAGE || 'fastify'
        };
        return reply.send(data);
    });
};
exports.default = router;
//# sourceMappingURL=hello.js.map