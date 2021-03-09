function updateMap() {
    console.log("updated data")
        // fetch("/project/coronamap/data.json")
        fetch("https://corona-api.com/countries?include=timeline")
    
            .then(response => response.json())
            .then(rsp => {
                console.log(rsp.data)
                rsp.data.forEach(element => {
                    latitude = element.coordinates.latitude;
                    longitude = element.coordinates.longitude;
    
                    cases = element.latest_data.confirmed;
    
                    names = element.name;
    
                    if (cases > 25000) {
                        color = "rgb(255,0,0)";
    
    
                    }
                    else {
                        ca=cases/1000
                        color = `rgb(${ca},0,0)`;
                    }
                    color
                    new mapboxgl.Marker({
                        color: color
                    })
                        .setLngLat([longitude, latitude])
                        .addTo(map);
    
    
                    
                });
    
            })
    }
    
    let interval=2000;
    
    setInterval(updateMap,interval);
    