import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';
import CharacterCard from "./Card"


export default function SwapiFetch() {
    const [swapiData, setSwapiData] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then((response) => {

                const profiles = response.data.results
                setSwapiData(profiles)
            })
            .catch(err => {
                console.log('whoops : ', err)
            }) 
    }, [])

    console.log(swapiData)



    
    return ( 
        <Grid relaxed columns={3} divided="vertically">
        <Grid.Row padded ="vertically" columns={3}>
        <div className="profile-case">
            
            {swapiData
                .map((item, index)=> {
                    return (
                        <CharacterCard 
                            name={item.name} 
                            height={item.height}
                            gender={item.gender}
                            eye_color={item.eye_color}
                            hair_color={item.hair_color}
                            key={index}
                        />
                    )
                })
            }
            </div>
            </Grid.Row>
            </Grid>
        
    )
}