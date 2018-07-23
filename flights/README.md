* wget https://raw.githubusercontent.com/datasets/airport-codes/master/data/airport-codes.csv
* csv2json airport-codes.csv > airport-codes.json
* jq 'reduce .[] as $i ({}; .[$i.iata_code] = $i)' airport-codes.json  > airport-codes-hash.json

# get CSV export from egencia
* csv2json pairs.csv > pairs.json
