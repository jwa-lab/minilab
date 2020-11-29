# minilab

The min lab is a minimal JWA Lab development environment. Start minilab and write your first service!

## Rational

The JWA Platform can seem overwhelming at first.
You need to run a Tezos node and an indexer, you need to run a message bus, there's an ingress service, there are protocols and security issues...
While the platform itself is easy to piece together as seen with the Community edition, it still separates the platform and the Tezos Node so it can be used in a production like environment.
To make things even easier, `minilab` offers a complete environment to be used exclusively for development. It can start a Tezos node from scratch or with a known state, which could in term become extremely convenient for testing or debugging!

Look no further, if you want to get familiar with the JWA Platform, you've come to the right place.

## Getting started

clone this repository and cd into the directory

```
git clone git@github.com:jwa-lab/minilab.git
cd minilab
```

```
./run start
```

Then import the alice and bob accounts:

```
./run bootstrap
```

## Tools and services

1. Flextesa
2. Nats.io
3. tzindex
4. tzstats