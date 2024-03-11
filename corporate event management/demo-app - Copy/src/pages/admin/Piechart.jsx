import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const Piechart = () => {
    return (
        <div>
             <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Annual cermany' },
            { id: 1, value: 15, label: 'Education event' },
            { id: 2, value: 25, label: 'Employee Day' },
            { id: 3, value: 50, label: 'Workshop Event' }
          ],
          innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -90,
      endAngle: 180,
      cx: 100,
      cy: 150,
        },
      ]}
      width={400}
      height={300}
    />
        </div>
    )
}

export default Piechart
