import React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FilterModal from './Modal/FilterModal';

import { Wordfilter } from '../services/filter/wordfilter';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteModal from './Modal/DeleteModal';

const FilterPanel = ({ filter, setFilter, items }) => {
    const [keyword, setKeyword] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [openDelModal, setOpenDelModal] = React.useState(false);

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            var l = [...filter];
            l.push(new Wordfilter(keyword));
            setFilter(l);
            console.log(filter);
            event.target.value = '';
        }
    }

    const handleFilterDelete = (index) => {
        var l = [...filter];
        l.splice(index, 1);
        setFilter(l);
        console.log(filter);
    }

    const handleMultipleDelete = () => {
        setOpenDelModal(true);
    }

    return (
        <>
            <Grid container spacing={2}
                sx={{
                    backgroundColor: 'primary.main',
                    width: '80%',
                    margin: '0 auto',
                    alignItems: 'center',
                }}
            >
                <Grid item xs={7}>
                    <TextField id="search" label="Search" variant="filled"
                        sx={{
                            borderRadius: '10px',
                            width: '100%',
                        }}
                        onChange={handleKeywordChange}
                        onKeyDown={handleKeyDown}
                    />
                </Grid>
                <Grid item xs={2}
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    <Box>
                        Filter:
                        <IconButton onClick={() => setOpenModal(true)}>
                            <FilterAltIcon />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box>
                        <Button
                            variant="contained"
                            onClick={handleMultipleDelete}
                        >
                            Delete all data
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            {
                filter != null && filter.length > 0 && (
                    <Stack direction="row" spacing={1}
                        sx={{
                            width: '80%',
                            margin: '0 auto',
                            marginTop: '1em',
                        }}
                    >
                        {
                            filter.map((f, index) => {
                                return (
                                    <Chip label={f.print()} onDelete={() => handleFilterDelete(index)} />
                                )
                            })
                        }
                    </Stack>
                )
            }
            <FilterModal open={openModal} setOpen={setOpenModal} filter={filter} setFilter={setFilter} />
            <DeleteModal open={openDelModal} setOpen={setOpenDelModal} item={items} />
        </>
    )
}

export default FilterPanel;