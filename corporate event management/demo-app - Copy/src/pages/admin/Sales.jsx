import React from 'react'
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
    yAxis: [
      {
        label: 'rainfall (mm)',
      },
    ],
    width: 800,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };
  const dataset = [
    {
      Annualcermany: 59,
      Educationevent: 57,
      EmployeeDay: 86,
      WorkshopEvent: 21,
      month: 'Jan',
    },
    {
      Annualcermany: 50,
      Educationevent: 52,
      EmployeeDay: 78,
      WorkshopEvent: 28,
      month: 'Fev',
    },
    {
      Annualcermany: 47,
      Educationevent: 53,
      EmployeeDay: 106,
      WorkshopEvent: 41,
      month: 'Mar',
    },
    {
      Annualcermany: 54,
      Educationevent: 56,
      EmployeeDay: 92,
      WorkshopEvent: 73,
      month: 'Apr',
    },
    {
      Annualcermany: 57,
      Educationevent: 69,
      EmployeeDay: 92,
      WorkshopEvent: 99,
      month: 'May',
    },
    {
      Annualcermany: 60,
      Educationevent: 63,
      EmployeeDay: 103,
      WorkshopEvent: 144,
      month: 'June',
    },
    {
      Annualcermany: 59,
      Educationevent: 60,
      EmployeeDay: 105,
      WorkshopEvent: 319,
      month: 'July',
    },
    {
      Annualcermany: 65,
      Educationevent: 60,
      EmployeeDay: 106,
      WorkshopEvent: 249,
      month: 'Aug',
    },
    {
      Annualcermany: 51,
      Educationevent: 51,
      EmployeeDay: 95,
      WorkshopEvent: 131,
      month: 'Sept',
    },
    {
      Annualcermany: 60,
      Educationevent: 65,
      EmployeeDay: 97,
      WorkshopEvent: 55,
      month: 'Oct',
    },
    {
      Annualcermany: 67,
      Educationevent: 64,
      EmployeeDay: 76,
      WorkshopEvent: 48,
      month: 'Nov',
    },
    {
      Annualcermany: 61,
      Educationevent: 70,
      EmployeeDay: 103,
      WorkshopEvent: 25,
      month: 'Dec',
    },
  ];
  

const Sales = () => {
    const valueFormatter = (value) => `${value}no`;
    return (
        <div style={{width : '800px'}}>
            <Card >
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Bookings
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Bookings made this year
                        </Typography>
                        <div style={{marginLeft: '10px',marginRight: '10px'}}>

                        <BarChart
                            dataset={dataset}
                            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                            series={[
                                { dataKey: 'Annualcermany', label: 'Annualcermany', valueFormatter },
                                { dataKey: 'Educationevent', label: 'Educationevent', valueFormatter },
                                { dataKey: 'EmployeeDay', label: 'EmployeeDay', valueFormatter },
                                { dataKey: 'WorkshopEvent', label: 'WorkshopEvent', valueFormatter },
                            ]}
                            {...chartSetting}
                            />
                            </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default Sales
