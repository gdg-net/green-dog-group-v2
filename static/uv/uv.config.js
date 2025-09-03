self.__uv$config = {
    prefix: '/static/tiw/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    client: '/uv/uv.client.js',
    sw: '/uv/uv.sw.js',
};
