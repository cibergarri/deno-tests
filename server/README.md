
## Server - client

### run Server 
```
  deno run --allow-net server/index.ts
```


### run Client
```
  deno run --allow-net=localhost:8000 server/client.ts http:\\localhost:8000
```
