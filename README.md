# vuejs-pwa-and-ssr-on-lambda
Vue.jsでPWA作って、LambdaでSSRすることを~~目標とする~~達成したリポジトリ。

検証用で作ってるので無用なコメントアウトなど残ってるかもしれないです。
あと、プロダクション用に作っているわけではないのでこのままは使わない方がいいです。


## ~~使う予定~~使ったのもの

### Vue.js

[https://vuejs.org/](https://vuejs.org/)

Vue Router や Vuex も利用。


### vue-server-renderer

[https://ssr.vuejs.org/](https://ssr.vuejs.org/)


### Workbox

[https://workboxjs.org/](https://workboxjs.org/)

※プロダクションビルド時のみ利用。


### Serverless Framework

[https://serverless.com/](https://serverless.com/)


### Material Components Web
[https://material.io/components/web/](https://material.io/components/web/)



## デプロイについて

デプロイはServerless Frameworkを使って行っています。

デプロイのパッケージには画像などは含まれていません。画像は別途手動でS3に上げてCloudFrontにてAPI GatewayとS3に向きを変えています。

## DEMO

簡単なメモアプリです。
リストがあって、編集ができるというシンプルなものです。

[https://vuejs-pwa-ssr.mya-ake.org](https://vuejs-pwa-ssr.mya-ake.org)
