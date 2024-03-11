import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import '../../assets/css/home.css'
import { useNavigate } from 'react-router-dom';
const CenteredContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Set height to viewport height for vertical centering
});

const Home = () => {
  const navigate= useNavigate();
  return (
    <CenteredContainer>
      <video className="video-bg" autoPlay loop muted>
        <source src="/src/assets/Videos/home.mp4" type="video/mp4" />
      </video>
      <div style={{marginBottom: 80}}>
      <h1>Welcome To Corporate Event Management</h1>
      </div>
      <div >
      <div style={{ display: 'flex' }}>

        <Grid className="grid-container" container rowSpacing={1} columnSpacing={{ xs: 5, sm: 10, md: 6 }}>
          <Grid className='grid1' item xs={3} style={{ minWidth: '400px' }}>
            <img style={{ height: '100%', width: '100%' }} src="/src/assets/images/a.jpg" alt="Description of the image" />
            <div className='paper' style={{ backgroundColor: 'lightblue', padding: '5px', borderRadius: '5px' }}>
              <h1>Annual General Meeting</h1>
              <h3>"Welcome everyone to our Annual General Meeting.</h3>
            </div>
          </Grid>
          <Grid className='grid2' item xs={3} style={{ minWidth: '400px' }}>
            <img style={{ height: '100%', width: '100%' }} src="/src/assets/images/th.jpg" alt="Description of the image" />
            <div className='paper' style={{ backgroundColor: 'lightblue', padding: '5px', borderRadius: '5px' }}>
              <h1>Corporate Training Workshop</h1>
              <h3>Corporate training workshops serve as dynamic platforms.</h3>
            </div>
          </Grid>
          <Grid className='grid3' item xs={3} style={{ minWidth: '400px' }}>
            <img style={{ height: '100%', width: '100%' }} src="/src/assets/images/c.jpg" alt="Description of the image" />
            <div className='paper' style={{ backgroundColor: 'lightblue', padding: '5px', borderRadius: '5px' }}>
              <h1>Company Anniversary Celebration</h1>
              <h3>Happy Anniversary to our incredible team.</h3>
            </div>
          </Grid>
        </Grid>
      </div>
      </div>
      <div style={{ marginTop: '2%' }}>
        <Button variant="contained" color="success" onClick={() => navigate('/user/Events')}>
          Get Started
        </Button>
      </div>
    </CenteredContainer>
  );
}

export default Home;
