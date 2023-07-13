


# Node Engine

### Desktop view
![mobile-version](https://github.com/ricardocastl3/nodeproduct/blob/master/src/assets/desktop01.png)

### Overview
<img src="https://github.com/ricardocastl3/nodeproduct/blob/master/src/assets/mobile01.png?raw=true" width="200">

### Overview mobile
<img src="https://github.com/ricardocastl3/nodeproduct/blob/master/src/assets/mobile02.png?raw=true" width="200">

### Visualization on tablets
<img src="https://github.com/ricardocastl3/nodeproduct/blob/master/src/assets/tablet01.png?raw=true" width="200">

## 🚀 Get Started

These instructions will allow you to get a copy of the project up and running on your local machine for development and testing purposes.

### 🔧 Settings to run on local machine

The first step you'll need to get started is downloading the project.

```
git clone https://github.com/ricardocastl3/nodeproduct
```

After the previous step, feel free to make changes to the database information inside the ``.env`` file, like:

```
MONGODB_USERNAME=username
MONGODB_PASSWORD=password
MONGODB_LOCATION=your-location
```
These are the fields in your connection string:

```
mongodb+srv://<username>:<passowrd>@yourlocation
```


This setup uses the mongodb cloud, if you don't have an account, [create it there](https://account.mongodb.com/account/login), and get your connection string, after that you can replace the specific fields by putting it in the .env file.

Make sure the settings match your machine's settings.


### 📋 Install Dependences
```
npm install
```

### ⚙️ Run application

```
npm run start

https://localhost:8888
```

### ⚙️ End-Points


| End-Point | Description
|---|---|
https://localhost:8888/v/products | View home page returned html.
https://localhost:8888/products | Get All Products
https://localhost:8888/product/id | Get, Delete, Update product



## 🛠️ Developed with


* [Node.JS](https://nodejs.org/en/docs) - Back-End.
* [AlpineJS](https://alpinejs.dev/) - Front-End.

## ✒️ Author

For the development of the platform we have:

* **Developer and Documentation** - [Ricardo Castle](https://www.linkedin.com/in/ricardocastles/)


## 🎁 Expressions of gratitude

* Tell others about this project 📢;

---