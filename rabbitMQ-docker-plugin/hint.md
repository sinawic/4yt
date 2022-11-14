wget https://github.com/rabbitmq/rabbitmq-delayed-message-exchange/releases/download/3.11.1/rabbitmq_delayed_message_exchange-3.11.1.ez
docker build -t gitlab.chista.ir:5050/general/images:rabbitmq--3.11-management-delayed-message .

version: '3.3'

services:
  rabbitmq:
    image: rabbitmq:3.11-management-delayed_message_exchange
    ports:
      - 5672:5672
      - 15672:15672
    volumes:
      - ./data/:/var/lib/rabbitmq/
    environment:
      - RABBITMQ_DEFAULT_USER=user
      - RABBITMQ_DEFAULT_PASS=password
