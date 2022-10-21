# SpaceX - CalliX

Front-end deploy: `https://space-callix.vercel.app/`

Front-end repo: `https://github.com/victornunesc/frontend-callix`

## **Main technologies**

<hr/>
Back-end:

    - Typescript
    - Node.js
    - Express

Front-end:

    - Typescript
    - React
    - Styled components

<hr/>
<br/>

# API Docs

Base URL: `https://backend-callix.herokuapp.com`

# Get next launch

\*Method\*\* : `GET`

**URL** : `https://backend-callix.herokuapp.com/spacex/launches/next`

**Auth required** : `False`

## Success Responses

**Code** : `200 OK`

```json
{
  "date_utc": "2022-10-20T14:50:00.000Z",
  "date_unix": 1666277400,
  "name": "Starlink 4-36 (v1.5)",
  "flight_number": 188,
  "crew": [],
  "failures": [],
  "success": null,
  "rocket": "5e9d0d95eda69973a809d1ec",
  "links": {
    "wikipedia": null,
    "patch": {
      "small": "https://images2.imgbox.com/a9/9a/NXVkTZCE_o.png",
      "large": "https://images2.imgbox.com/e3/cc/hN96PmST_o.png"
    }
  },
  "id": "63161345ffc78f3b8567070d"
}
```

# Get latest launch

\*Method\*\* : `GET`

**URL** : `https://backend-callix.herokuapp.com/spacex/launches/latest`

**Auth required** : `False`

## Success Responses

**Code** : `200 OK`

```json
{
  {
	"date_utc": "2022-10-05T16:00:00.000Z",
	"date_unix": 1664985600,
	"name": "Crew-5",
	"flight_number": 187,
	"crew": [
		{
			"crew": "62dd7196202306255024d13c",
			"role": "Commander"
		},
		{
			"crew": "62dd71c9202306255024d13d",
			"role": "Pilot"
		},
		{
			"crew": "62dd7210202306255024d13e",
			"role": "Mission Specialist 1"
		},
		{
			"crew": "62dd7253202306255024d13f",
			"role": "Mission Specialist 2"
		}
	],
	"failures": [],
	"success": true,
	"rocket": "5e9d0d95eda69973a809d1ec",
	"links": {
		"wikipedia": "https://en.wikipedia.org/wiki/SpaceX_Crew-5",
		"patch": {
			"small": "https://images2.imgbox.com/eb/d8/D1Yywp0w_o.png",
			"large": "https://images2.imgbox.com/33/2e/k6VE4iYl_o.png"
		}
	},
	"id": "62dd70d5202306255024d139"
}
}
```

# Get all upcoming launches

\*Method\*\* : `GET`

**URL** : `https://backend-callix.herokuapp.com/spacex/launches/upcoming`

**Auth required** : `False`

## Success Responses

**Code** : `200 OK`

```json
[
    {
		"date_utc": "2022-10-20T14:50:00.000Z",
		"date_unix": 1666277400,
		"name": "Starlink 4-36 (v1.5)",
		"flight_number": 188,
		"crew": [],
		"failures": [],
		"success": null,
		"rocket": "5e9d0d95eda69973a809d1ec",
		"links": {
			"wikipedia": null,
			"patch": {
				"small": "https://images2.imgbox.com/a9/9a/NXVkTZCE_o.png",
				"large": "https://images2.imgbox.com/e3/cc/hN96PmST_o.png"
			}
		},
		"id": "63161345ffc78f3b8567070d"
	},
    ...
]
```

# Get all past launches

\*Method\*\* : `GET`

**URL** : `https://backend-callix.herokuapp.com/spacex/launches/past`

**Auth required** : `False`

## Success Responses

**Code** : `200 OK`

```json
[
    {
		"date_utc": "2006-03-24T22:30:00.000Z",
		"date_unix": 1143239400,
		"name": "FalconSat",
		"flight_number": 1,
		"crew": [],
		"failures": [
			{
				"time": 33,
				"altitude": null,
				"reason": "merlin engine failure"
			}
		],
		"success": false,
		"rocket": "5e9d0d95eda69955f709d1eb",
		"links": {
			"wikipedia": "https://en.wikipedia.org/wiki/DemoSat",
			"patch": {
				"small": "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png",
				"large": "https://images2.imgbox.com/5b/02/QcxHUb5V_o.png"
			}
		},
		"id": "5eb87cd9ffd86e000604b32a"
	},
    ...
]
```
