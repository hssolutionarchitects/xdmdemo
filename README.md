# XDMDemo

## Develop

```sh
docker-compose up
````

Get the ngrok url

```sh
curl -Ls $(docker port xdmdemo_ngrok_1 4040)/api/tunnels/command_line | python -c 'import sys, json; print json.load(sys.stdin)["public_url"]'
``

Add the content from the campaigns.js file into the campaign.

