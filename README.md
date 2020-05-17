
### Install deno
  https://deno.land/

### Test installation
```
  deno run https://deno.land/std/examples/welcome.ts
```

## Server - client

### run Server 
```
  deno run --allow-net server/index.ts
```

### run Client
```
  deno run --allow-net=localhost:8000 server/client.ts http:\\localhost:8000
```

## File reader

### run File reader

```
  deno run --allow-read ./files/index.ts files/example.txt
```

### run Echo Server  
```
  deno run --allow-net server/index.ts
```

test it:

```
  nc localhost 8080
 <write anything, it will be echoed>
```