import React from 'react'
import { Typography,Box,Stack } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";
import { ArrowCircleUpRounded } from '@mui/icons-material';
import { TotalRevenueOptions,TotalRevenueSeries  } from './chart.config';
const TotalRevenue = () => {
  return (
    <Box
    p={4}
    flex={1}
    bgcolor="#fcfcfc"
    id="chart"
    display="flex"
    flexDirection="column"
    borderRadius="15px"
    >
      <Typography fontSize="18px" fontWeight={600} color="#11142d">Total Revenue :</Typography>
      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
          <Typography fontSize={28}  fontWeight={700} color="#11142d">
                15 000 DHS
          </Typography>
          <Stack direction="row" alignItems="center" gap={1}> <ArrowCircleUpRounded sx={{ fontSize:25,color:'#475b8e'}}/>
            <Stack>
              <Typography fontSize={15} color="#475be8">0.8%</Typography>
              <Typography fontSize={12} color="#808191">Que le mois dernier</Typography>

            </Stack>
          </Stack>
      </Stack>
      <ReactApexChart
      series={TotalRevenueSeries}
      type="bar"
      height={310}
      options={TotalRevenueOptions}
      >

      </ReactApexChart>
    </Box>
  )
}
export {}
export default TotalRevenue
