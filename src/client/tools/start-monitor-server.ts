// Using redis-smq from a local repository
// Fix this according to your preferences
import { MonitorServer, setConfiguration } from '../../../../redis-smq';
import { IConfig, RedisClientName } from '../../../../redis-smq/dist/types';

export const config: IConfig = {
    namespace: 'ns1',
    redis: {
        client: RedisClientName.IOREDIS,
        options: {
            host: '127.0.0.1',
            port: 6379
        }
    },
    monitor: {
        enabled: true,
        port: 3000,
        host: '127.0.0.1'
    }
};

setConfiguration(config);

const server = new MonitorServer();
server.listen();
