import { createClient } from 'redis';

export const cacheService = createClient({
    username: 'default', // use your Redis user. More info https://redis.io/docs/management/security/acl/
    password: 'B@rsum1375bar', // use your password here
    socket: {
        host: 'localhost',
        port: 6379,
    },
});
