

Steps:

. docker pull rabbitmq:3.6.6-management

. docker run --hostname rabbit --name rabbit --rm -ti --net="host" rabbitmq:3.6.6-management /bin/bash




RABBITMQ_NODE_PORT=5672 RABBITMQ_SERVER_START_ARGS="-rabbitmq_management listener [{port,15672}]" RABBITMQ_NODENAME=rabbit rabbitmq-server -detached
RABBITMQ_NODE_PORT=5673 RABBITMQ_SERVER_START_ARGS="-rabbitmq_management listener [{port,15673}]" RABBITMQ_NODENAME=hare rabbitmq-server -detached
RABBITMQ_NODE_PORT=5674 RABBITMQ_SERVER_START_ARGS="-rabbitmq_management listener [{port,15674}]" RABBITMQ_NODENAME=john rabbitmq-server -detached




rabbitmqctl -n hare stop_app
rabbitmqctl -n hare join_cluster rabbit@`hostname -s`
rabbitmqctl -n hare start_app

rabbitmqctl -n john stop_app
rabbitmqctl -n john join_cluster rabbit@`hostname -s`
rabbitmqctl -n john start_app



<!-- visit http://localhost:15672   guest@guest -->


<!-- create policy -->
name: ha-2
pattern: .
apply to: exchanges and queues

priority: 1
definitio:
. ha-mode: exactly
. ha-params: 3
. ha-sync-mode: automatic

