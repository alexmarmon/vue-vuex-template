vue-vuex-template
=====================

An application that combines:

* [Vue](https://github.com/vuejs/vue) Version: ^2.4.2
* [Vuex](https://github.com/vuejs/vuex) Version ^2.3.1
* [Vue Router](https://github.com/vuejs/vue-router) Version ^2.7.0
* [Webpack 3](https://github.com/webpack/webpack.js.org) Version: ^3.0.0
* [Airbnb's ESLint](https://github.com/airbnb/javascript) Version: ^15.0.1
* [Express](https://expressjs.com/) Version: ^4.15.2

### Getting Started
```
vim creds.json
{
	"host": "localhost",
	"user": "mysql user",
	"password": "mysql password",
	"database": "template"
}

// in mysql
create database template;

mysql -u [user] -p template < /path/to/this/repo/src/api/template.sql
```

### Run It
```
npm run dev
```

### Run Lint
```
npm run lint
npm run lint-fix
```

### Run Tests
```
npm run test
```

### Build Production Files
```
npm run build
```

### Serve Production Files
```
npm run production
```
