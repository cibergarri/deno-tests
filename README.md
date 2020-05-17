
## Install deno
  https://deno.land/

### Test installation
```
  deno run https://deno.land/std/examples/welcome.ts
```

## Deno typescript

Deno uses native typescript

```
  deno run typescript/index.ts
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

## run Echo Server  
```
  deno run --allow-net server/index.ts
```

test it:

```
  nc localhost 8080
 <write anything, it will be echoed>
```

## Imports map (Unsable feature)

```
deno run --allow-net --importmap=imports-map/import_map.json --unstable ./imports-map/hello_server.ts
```

## Write in files

Using Deno module for writing file

```
  deno run --allow-write write-file/index.ts
```

## Deno Module for dates

 ```
   deno run dates/index.ts
 ```
 
## Checking all modules in Deno namespace

```
  deno run deno-namespace/index.ts
```
