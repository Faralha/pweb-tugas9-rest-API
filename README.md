[![Hono](https://img.shields.io/badge/Hono-E36002?logo=hono&logoColor=fff)](#) [![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#) [![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)](#)
# Tugas 9 Rest API

Sebuah tugas sederhana dari Mata Kuliah "Pemrograman Web" minggu ke-9 dimana author diminta untuk mengimplementasikan beberapa fungsi dalam format REST.


## Uji Coba

Lakukan request ke link deployment 

```bash
https://pweb-e09-rest-api.vercel.app/
```

Aplikasi seperti Postman, Insomnia, dan aplikasi untuk test backend lainnya disarankan.


## Local Deployment

Clone repository ini

```bash
git clone https://github.com/Faralha/pweb-tugas9-rest-API.git
cd pweb-tugas9-rest-api
```

Install dependensi

```bash
npm install
```

Jalankan server secara lokal

```bash
  npm run start
```

## Endpoints

### GET /calculate/sum/:numX/:numY

**Description**: Return a summary of given two numbers.

**URL**: /calculate/sum

**Method**: GET

**URL Parameters**:
  - `numX` (required)
  - `numY` (required)

**URL Queries**:
  - `none`

**Success Responses**:
- **Code**: `200 OK`
- **Content**: 
  ```json
  {
    "success": true,
    "data": 10
  }
  ```


### GET /secrets

**Description**: Return a secrets (a funfact, perhaps?) of the Author.

**URL**: /secrets

**Method**: GET

**URL Parameters**:
  - `none`

**URL Queries**:
  - token (required)

**Success Responses**:
- **Code**: `200 OK`
- **Content**: 
  ```json
  {
    "success": true,
    "data": "Something that is considered secrets..."
  }
  ```

**Error Responses**:
- **Code**: `401 Unauthorized`
- **Content**: 
  ```json
  {
    "success": false,
    "data": "Invalid Token"
  }
  ```


### GET /range/:numX/:numY?

**Description**: Returns an Array of set range defined in the parameter.

**URL**: /range/:numX/:numY?

**Method**: GET

**URL Parameters**:
  - numX (required)
  - numY

**URL Queries**:
  - sort
    - `?sort=-1 for reversed array`

**Success Responses**:
- **Code**: `200 OK`
- **Content**: 
  ```json
  {
    "success": true,
    "data": [0, 1, 2, 3, 4]
  }
  ```