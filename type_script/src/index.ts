import http from 'http';

async function main(){
    try {
        const PORT: number = +(process.env.PORT ?? 3000);
        const server = http.createServer();
        server.listen(PORT);
    } catch (error) {
        
    }
}