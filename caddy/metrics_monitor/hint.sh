
# https://caddyserver.com/docs/caddyfile-tutorial
# https://caddyserver.com/docs/caddyfile/directives/metrics
# https://grafana.com/docs/grafana-cloud/monitor-infrastructure/integrations/integration-reference/integration-caddy/
# https://caddyserver.com/docs/metrics
# https://grafana.com/grafana/dashboards/20802-caddy-monitoring/

mkdir config data

mkdir -p volumes/promconfig volumes/promdata volumes/grafanadata
sudo chmod -R 777 volumes

