import React from "react";

import {
    Container,
    Box,
} from '@mui/material';

import DataCard from '../components/DataCard';
import CardPanel from '../components/CardPanel';
import FilterPanel from '../components/FilterPanel';


function CardPanelContainer({ itemList }) {
    const [filter, setFilter] = React.useState([]);
    const [items, setItems] = React.useState(itemList);

    const getList = () => {
        var l = itemList;
        console.log(l);
        filter.forEach((f) => {
            l = f.filterData(l);
            console.log(l);
        })
        console.log(l);
        return l;
    }

    React.useEffect(() => {
        console.log(filter);
        console.log(itemList);
        setItems(getList());
    }, [filter, itemList])

    return (
        <Container>
            <Box
                sx={{
                    pb: '1em',
                    width: '100%',
                }}
            >
                <FilterPanel filter={filter} setFilter={setFilter} items={items}/>
            </Box>
            {
                items && items.length > 0 ? (
                    <CardPanel>
                        {items.map((item) => (
                            <DataCard item={item} />
                        ))}
                    </CardPanel>
                ) : null
            }
        </Container>
    );
}

export default CardPanelContainer;