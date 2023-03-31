# Keycloak Angular Integration

This is an example project for the integration of Keycloak in an Angular SPA.

## Project structure

- [frontend](frontend) contains Angular frontend
- [kubernetes](kubernetes) contains manifests for starting Keycloak with instructions

## Todos

- ci: linter

## Run

```sh
cd keycloak-angular
yarn install
yarn build
cd ..
docker build keycloak-angular --tag=ghcr.io/kokuwaio/keycloak-angular
docker save ghcr.io/kokuwaio/keycloak-angular --output kubernetes/keycloak-angular.tar
docker run --name k3s -d -p6443:6443 -p8080:8080 --privileged  -v`pwd`/kubernetes/:/tmp/kubernetes rancher/k3s:v1.24.12-k3s1 server --disable-cloud-controller --disable-network-policy --disable=metrics-server --disable-helm-controller --disable=local-storage --disable=traefik
sleep 30
docker exec k3s cat /etc/rancher/k3s/k3s.yaml > ~/.kube/k3s.yaml
export KUBECONFIG=~/.kube/k3s.yaml
cat $KUBECONFIG
kubectl config view
kubectl get all --all-namespaces
docker exec k3s ls /tmp/kubernetes
docker exec k3s ctr image import /tmp/kubernetes/keycloak-angular.tar
docker exec k3s ctr image ls
kubectl apply -k kubernetes
```
