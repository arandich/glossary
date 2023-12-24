
FROM golang:latest AS builder

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 go build -o main .


FROM alpine:latest

WORKDIR /app


COPY --from=builder /app/main .
COPY --from=builder /app/storage ./storage

EXPOSE 8080

CMD ["./main"]
