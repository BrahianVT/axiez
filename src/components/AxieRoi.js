import React from 'react';
import { ListItemText, Button, Stack, TextField, InputAdornment } from '@mui/material';
import { Box } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses }  from '@mui/material/TableCell';
const BASE = 'https://api.binance.com/api/v3/ticker/price?symbol=SLPUSDT'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function gtSLPPrice(setslpPrice) {
    fetch(BASE)
        .then(response => response.json())
        .then(data => setslpPrice(parseFloat(data.price).toFixed(4)))
}

function getEarnings(quest, mission, period, slps) {
    return period * (quest + mission + (10 * slps));
}

const styles = {
    flexGrow: 1
}
export default function AxieRoi() {
    const [slpPrice, setslpPrice] = React.useState(0)
    const [priceTeam, setPriceTeam] = React.useState(750)
    const [rows, setRows] = React.useState([])
    const[ rows2, setRows2] = React.useState([])
    React.useEffect(() => {
        gtSLPPrice(setslpPrice)    
    },[])
    
    var quest = 25, mission = 50
    var one = ['800', 1, getEarnings(quest, mission, 1, 1), getEarnings(quest, mission, 7, 1), getEarnings(quest, mission, 30, 1), slpPrice * getEarnings(quest, mission, 30, 1), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 1))]
    var two = ['1000', 3, getEarnings(quest, mission, 1, 3), getEarnings(quest, mission, 7, 3), getEarnings(quest, mission, 30, 3), slpPrice * getEarnings(quest, mission, 30, 3), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 3))]
    var three = ['1100', 6, getEarnings(quest, mission, 1, 6), getEarnings(quest, mission, 7, 6), getEarnings(quest, mission, 30, 6), slpPrice * getEarnings(quest, mission, 30, 6), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 6))]
    var four = ['1300', 9, getEarnings(quest, mission, 1, 9), getEarnings(quest, mission, 7, 9), getEarnings(quest, mission, 30, 9), slpPrice * getEarnings(quest, mission, 30, 9), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 9))]
    var five = ['1500', 12, getEarnings(quest, mission, 1, 12), getEarnings(quest, mission, 7, 12), getEarnings(quest, mission, 30, 12), slpPrice * getEarnings(quest, mission, 12), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 12))]
    var six = ['1800', 15, getEarnings(quest, mission, 1, 15), getEarnings(quest, mission, 7, 15), getEarnings(quest, mission, 30, 15), slpPrice * getEarnings(quest, mission, 30, 15), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 15))]
    var seven = ['2000', 18, getEarnings(quest, mission, 1, 18), getEarnings(quest, mission, 7, 18), getEarnings(quest, mission, 30, 18), slpPrice * getEarnings(quest, mission, 30, 18), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 18))]
    var eigth = ['2200', 21, getEarnings(quest, mission, 1, 21), getEarnings(quest, mission, 7, 21), getEarnings(quest, mission, 30, 21), slpPrice * getEarnings(quest, mission, 30, 21), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 21))]

    var one2 = []
    var two2 = []
    var three2 = []
    var four2 = []
    var five2 = []
    var six2 = []
    var seven2 = []
    var eigth2 = []

    React.useEffect( () => {
        one = ['800', 1, getEarnings(quest, mission, 1, 1), getEarnings(quest, mission, 7, 1), getEarnings(quest, mission, 30, 1), slpPrice * getEarnings(quest, mission, 30, 1), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 1))]
        two = ['1000', 3, getEarnings(quest, mission, 1, 3), getEarnings(quest, mission, 7, 3), getEarnings(quest, mission, 30, 3), slpPrice * getEarnings(quest, mission, 30, 3), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 3))]
        three = ['1100', 6, getEarnings(quest, mission, 1, 6), getEarnings(quest, mission, 7, 6), getEarnings(quest, mission, 30, 6), slpPrice * getEarnings(quest, mission, 30, 6), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 6))]
        four = ['1300', 9, getEarnings(quest, mission, 1, 9), getEarnings(quest, mission, 7, 9), getEarnings(quest, mission, 30, 9), slpPrice * getEarnings(quest, mission, 30, 9), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 9))]
        five = ['1500', 12, getEarnings(quest, mission, 1, 12), getEarnings(quest, mission, 7, 12), getEarnings(quest, mission, 30, 12), slpPrice * getEarnings(quest, mission,30, 12), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 12))]
        six = ['1800', 15, getEarnings(quest, mission, 1, 15), getEarnings(quest, mission, 7, 15), getEarnings(quest, mission, 30, 15), slpPrice * getEarnings(quest, mission, 30, 15), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 15))]
        seven = ['2000', 18, getEarnings(quest, mission, 1, 18), getEarnings(quest, mission, 7, 18), getEarnings(quest, mission, 30, 18), slpPrice * getEarnings(quest, mission, 30, 18), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 18))]
        eigth = ['2200', 21, getEarnings(quest, mission, 1, 21), getEarnings(quest, mission, 7, 21), getEarnings(quest, mission, 30, 21), slpPrice * getEarnings(quest, mission, 30, 21), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 21))]
        setRows([one, two, three, four, five, six, seven, eigth])
        quest = 0; mission = 0
        one2 = ['999', 1, getEarnings(quest, mission, 1, 1), getEarnings(quest, mission, 7, 1), getEarnings(quest, mission, 30, 1), slpPrice * getEarnings(quest, mission, 30, 1), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 1))]
        two2 = ['1000', 3, getEarnings(quest, mission, 1, 3), getEarnings(quest, mission, 7, 3), getEarnings(quest, mission, 30, 3), slpPrice * getEarnings(quest, mission, 30, 3), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 3))]
        three2 = ['1100', 5, getEarnings(quest, mission, 1, 5), getEarnings(quest, mission, 7, 5), getEarnings(quest, mission, 30, 5), slpPrice * getEarnings(quest, mission, 30, 5), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 5))]
        four2 = ['1300', 6, getEarnings(quest, mission, 1, 6), getEarnings(quest, mission, 7, 6), getEarnings(quest, mission, 30, 6), slpPrice * getEarnings(quest, mission, 30, 6), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 6))]
        five2 = ['1500', 8, getEarnings(quest, mission, 1, 8), getEarnings(quest, mission, 7, 8), getEarnings(quest, mission, 30, 8), slpPrice * getEarnings(quest, mission,30, 8), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 8))]
        six2 = ['1800', 10, getEarnings(quest, mission, 1, 10), getEarnings(quest, mission, 7, 10), getEarnings(quest, mission, 30, 10), slpPrice * getEarnings(quest, mission, 30, 10), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 10))]
        seven2 = ['2000', 12, getEarnings(quest, mission, 1, 12), getEarnings(quest, mission, 7, 12), getEarnings(quest, mission, 30, 12), slpPrice * getEarnings(quest, mission, 30, 12), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 12))]
        eigth2 = ['2500', 14, getEarnings(quest, mission, 1, 14), getEarnings(quest, mission, 7, 14), getEarnings(quest, mission, 30, 14), slpPrice * getEarnings(quest, mission, 30, 14), priceTeam / (slpPrice * getEarnings(quest, mission, 30, 14))]
        setRows2([one2, two2, three2, four2, five2, six2, seven2, eigth2])

    },[priceTeam, slpPrice])
    

    const priceTeamChange = (event) => {
        setPriceTeam(event.target.value)
    }
    return (
        <Box sx={{ padding: 5, bgcolor: 'background.paper' , ...styles }}>
            <ListItemText primary={"SLP PRICE"}  />
            <Stack  spacing={1}  direction="row" justifyContent="flex-start" sx={{ width: 300}}>
                <Button  variant="contained" color="success" onClick={() => { gtSLPPrice(setslpPrice) }}> Update  SLP Price</Button>
                <ListItemText primary={slpPrice} sx={{ border:'1px solid #ced4da' }} />
            </Stack> <br/>
            <Stack direction="row" justifyContent="flex-start">
                <TextField label="Price Team" id="idPrice"  defaultValue = {priceTeam} onChange={priceTeamChange}
                    sx={{ m: 1, width: '15ch' }}
                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                />
            </Stack>

            <ListItemText primary={"BEFORE UPDATE"}  />
            <Stack  sx ={{bgcolor: '#FFA533' , width: 450}} direction="row">
                <ListItemText primary={'Quest : 25'} />
                <ListItemText primary={'Mission : 50'} />
            </Stack>
            <ListItemText sx ={{bgcolor: '#FFA533' , width: 100}}  primary={'Winrate 50%'} />

            <TableContainer component={Paper}>
                <Table sx={{ ...styles }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <StyledTableCell >MMR</StyledTableCell>
                            <StyledTableCell >Slp/Win</StyledTableCell>
                            <StyledTableCell >Slp/Day</StyledTableCell>
                            <StyledTableCell >Slp/Week</StyledTableCell>
                            <StyledTableCell >Slp/Month</StyledTableCell>
                            <StyledTableCell >Earns</StyledTableCell>
                            <StyledTableCell >ROI</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow  key={row[0]}>
                            <TableCell sx={{bgcolor: '#1CD58E' }}>{row[0]} </TableCell>
                            <TableCell sx={{bgcolor: '#FFC2EF' }}>{row[1]} </TableCell>
                            <TableCell sx={{bgcolor: '#FFC2EF' }}>{row[2]} </TableCell>
                            <TableCell sx={{bgcolor: '#FFC2EF' }}>{row[3]} </TableCell>
                            <TableCell sx={{bgcolor: '#FFC2EF' }}>{row[4]} </TableCell>
                            <TableCell sx={{bgcolor: '#FF5733' }}>{'$ '  + row[5].toFixed(2)} </TableCell>
                            <TableCell sx={{bgcolor: '#FF5733' }}>{row[6].toFixed(2)} </TableCell>
                            </TableRow >
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <ListItemText primary={"AFTER UPDATE"}  />
            <TableContainer component={Paper}>
                <Table sx={{ ...styles }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <StyledTableCell >MMR</StyledTableCell>
                            <StyledTableCell >Slp/Win</StyledTableCell>
                            <StyledTableCell >Slp/Day</StyledTableCell>
                            <StyledTableCell >Slp/Week</StyledTableCell>
                            <StyledTableCell >Slp/Month</StyledTableCell>
                            <StyledTableCell >Earns</StyledTableCell>
                            <StyledTableCell >ROI</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows2.map((row) => (
                            <TableRow  key={row[0]}>
                            <TableCell sx={{bgcolor: '#1CD58E' }}>{row[0]} </TableCell>
                            <TableCell sx={{bgcolor: '#FFC2EF' }}>{row[1]} </TableCell>
                            <TableCell sx={{bgcolor: '#FFC2EF' }}>{row[2]} </TableCell>
                            <TableCell sx={{bgcolor: '#FFC2EF' }}>{row[3]} </TableCell>
                            <TableCell sx={{bgcolor: '#FFC2EF' }}>{row[4]} </TableCell>
                            <TableCell sx={{bgcolor: '#FF5733' }}>{'$ '  + row[5].toFixed(2)} </TableCell>
                            <TableCell sx={{bgcolor: '#FF5733' }}>{row[6].toFixed(2)} </TableCell>
                            </TableRow >
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>               
        </Box>

    );
}
