# dashboard_tdd

## About
* vue-cli 3.0 
* coding rules : standard
* vuex, vue-router, node-sass

## 폴더구조
* assets : 이미지, 폰트, 아이콘 등 정적자원
* layout : 어플리케이션의 전체 레이아웃
* styles : 전역 CSS
* components : views에서 공통으로 사용되는 컴퍼넌트
* view/:name/index
* view/:name/components : 각각의 view내부에서만 사용되는 컴퍼넌트
* store : store는 모듈화화여 관리
* test/e2e : Cypress
* test/unit : Jest


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
