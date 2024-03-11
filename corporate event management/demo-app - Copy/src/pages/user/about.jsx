import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

const About = () => {
    return (
        
        <div style={{backgroundImage: "url('/src/assets/Images/aboutus.png')", backgroundSize: 'cover'}}>
            <h1 style={{textAlign: 'center', marginBottom: '5%'}}>About</h1>
            <div style={{marginLeft: '5%', marginRight: '5%'}}>

    <Grid container spacing={2}>
        <Grid item xs={7} style={{minWidth: '300px'}}>
            <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%', backgroundColor: 'lightblack'}}>
                <h1 style={{marginBottom: '2%', fontFamily: 'fantasy'}}>Mission Statement</h1>
                <h4>At [Your Company Name], our mission is to exceed the expectations of our clients by delivering events that not only meet their objectives but also leave a lasting impression. We believe in the power of events to inspire, connect, and elevate brands, and we are committed to ensuring that every event we manage reflects the unique identity and goals of our clients.</h4>
            </Card>
        </Grid>
        <Grid item xs={5} style={{minWidth: '300px'}}>
            <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%', backgroundColor: 'lightblue'}}>
                <h1 style={{marginBottom: '2%', fontFamily: 'fantasy'}}>Vision Statement</h1>
                <h4>As we forge ahead, our commitment remains unwavering: to be the premier event management company that doesn't just plan events but crafts experiences that define the forefront of excellence in the industry.

Join us on this journey as we transform visions into reality, one extraordinary event at a time."

</h4>
            </Card>
        </Grid>
    </Grid>
    <Grid container spacing={2} style={{marginTop: '2%', minWidth: '300px'}}>
        <Grid item xs={4} style={{minWidth: '300px'}}>
            <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%', backgroundColor:'lightgray'}}>
                <h1>Our Services</h1>
                <img src="/src/assets/Images/ser.jpg" alt="Not avail" style={{height: '250px', padding: '5px'}}/>
            </Card>
        </Grid>
        <Grid item xs={8} style={{minWidth: '300px'}}>
            {/* <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%'}}>
                <h1>Second</h1>
            </Card> */}
             <Grid container direction="column" justifyContent="center" alignItems="center" style={{minWidth: '300px'}}>
                        <Grid item xs={8} style={{minWidth: '100px'}}>
                        <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%'}}>
                            {/* <img src="/src/assets/Images/corevalues1.png" alt="Not avail"/> */}
                           {/* <h1>Three</h1> */}
                           {/* <div style={{display: 'flex'}}> */}
                           <Grid container spacing={4} style={{minWidth: '100px'}}>
                            <Grid item xs={2} style={{minWidth: '150px'}}>
                                <img src="/src/assets/Images/cre.jpg" alt="not avail"/>
                            </Grid>
                            <Grid item xs={2} style={{minWidth: '150px'}}>
                                <img src="/src/assets/Images/ino.jpg" alt="not avail"/>
                            </Grid>
                            <Grid item xs={2} style={{minWidth: '150px'}}>
                                <img src="/src/assets/Images/qua.jpg" alt="not avail"/>
                            </Grid>
                            <Grid item xs={2} style={{minWidth: '150px'}}>
                                <img src="/src/assets/Images/tru.jpg" alt="not avail"/>
                            </Grid>
                            <Grid item xs={2} style={{minWidth: '150px'}}>
                                <img src="/src/assets/Images/cli.jpg" alt="not avail"/>
                            </Grid>
                            {/* <Grid item xs={2} style={{minWidth: '100px'}}>
                                <img src="/src/assets/Images/clients.png" alt="not avail"/>
                            </Grid> */}
                           </Grid>
 
                           {/* </div> */}

                        </Card>
                        </Grid>
                        <Grid item xs={8} style={{ marginTop: '40px', minWidth: '200px' }}>
    <Card border="light" className="bg-white shadow-sm mb-4" style={{ padding: '2%', display: 'block', width: '100%' }}>
        <h3 style={{ textAlign: 'center' }}>&copy; 2024 corporate event management. All rights reserved.</h3>
    </Card>
</Grid>
                    </Grid>
        </Grid>
    </Grid>
        </div>
        </div>
    )
}

export default About