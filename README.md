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
docker build keycloak-angular --tag=keycloak-angular
docker run --name k3s -d -p6443:6443 -p8080:8080 --privileged  -v`pwd`/kubernetes/:/tmp/kubernetes rancher/k3s:v1.24.12-k3s1 server --disable-cloud-controller --disable-network-policy --disable=metrics-server --disable-helm-controller --disable=local-storage --disable=traefik
docker exec k3s cat /etc/rancher/k3s/k3s.yaml > ~/.kube/k3s.yaml
export KUBECONFIG=~/.kube/k3s.yaml
cat $KUBECONFIG
kubectl config view
kubectl get all --all-namespaces
kubectl apply -k kubernetes
```
