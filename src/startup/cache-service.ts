import { createClient } from 'redis';

export const CacheService = createClient({
    username: 'default', // use your Redis user. More info https://redis.io/docs/management/security/acl/
    password: 'secret', // use your password here
    socket: {
        host: 'my-redis.cloud.redislabs.com',
        port: 6379,
        tls: true,
    },
});

export async function initRedisCache() {
    CacheService.on('error', (err) => console.log('Redis Client Error', err));
    await CacheService.connect();
}
