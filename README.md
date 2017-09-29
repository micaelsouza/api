# sodexo-microservice
Microservice REST não oficial para consulta de saldo dos cartões sodexo.

### Uso

```http
POST  HTTP/1.1
Host: sodexo.now.sh
Content-Type: application/json

{
	"card": "0000000000000000",
	"cpf": "00000000000"
}
```

### Licença
MIT
