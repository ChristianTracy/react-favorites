# Favorites movies 

<p align="center">
  <img width="460" height="300" src="https://lh3.googleusercontent.com/UHE6V-Qh2sPY9AfyBNXbzZZrmsbchBj5Kdvlw-KFuziGKZncu2QbhOOTTOX0k3LY2y8ax0wH6HCNHsC-GojGCxTDHXQd0mhTPVXtV9Z44fjXHsxDlO9HuZp3Wh9qj9mrU0hVBvNhjub1u5sdCPpZrkipx3_tMrr5M-q-MNZPQxGnRJpfHJLYJmMq6PTliYL1tXR8aYjURHVrGLhVxYSYLbV3I5kNEX_DUinzdHJn6YicSdRk882D3UydYpA5eRwSPjmO8R_2WKAsEZbHGXEQox7qa1mR_2VCg9osUwD730m8L1e8xcTdB3iaaARVSixymZvlwd3tVhDRvXNqsd5rn4q6cdYLfclWXQICVBRmW2YGRI9WEmfe_AoMGLJXlhMmVD_KZSdrxE9gT87KZajuLGUI_sqmwufzov7zm1z64w_4AI806CT-p2YovQaC151FvHWS83hIzJHMuL1WPi76TKrLxNKOj4PgJcltIngaIkheyo8u5RzueNM-4qUkVqlfhWTw_FvF_GiG5yMQd1pvJI9rVxkBNmzgfjd1mLtxVASCU4_pNpSOCJfgOZesyFEs=w1317-h653">
</p>

# STEPS

## ENVIRONMENT VARIABLES

* Create `.env` file in the root folder.
* Add the following values: 

``` 
REACT_APP_API_KEY=[YOUR_omdbapi_KEY]
REACT_APP_SERVER_URL=http://www.omdbapi.com

```

## RUN APP

```
npm start
```

## /LOGIN 

After run `npm start` a server in the port 3001 should be available.
To use this mock login response make a `POST` method to `/login`.


### POST /login
``` 
{
	"username": "myuser@gmail.com",
	"password": "mypassword"
}
```

### RESPONSE
```
{
    "username": "myuser@gmail.com",
    "name": "Name",
    "lastname": "LastName",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```
