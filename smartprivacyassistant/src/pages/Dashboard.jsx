/*global chrome*/
import React from 'react';
import CardPanelContainer from '../components/CardPanelContainer';
// import CustomAppbar from '../components/CustomAppbar';
import { Box } from '@mui/material';
import ShowErrorHelp from '../components/ShowHelpError';

const Dashboard = ({order}) => {
    const [itemList, setItemList] = React.useState([]);
    // const [order, setOrder] = React.useState("rp");

    // const itemList = [
    //     {
    //         _title: "Searched for Fast and Furious 13",
    //         _datetime: "2021-08-01 12:00:00",
    //         _description: "You searched for Fast and Furious 13 on Google",
    //         _type: "Mixed",
    //         _class: "Unsafe",
    //         _risk: 0.8,
    //     },
    //     {
    //         _title: "Searched for Fast and Furious 13",
    //         _datetime: "2021-08-01 12:00:00",
    //         _description: "You searched for Fast and Furious 13 on Google",
    //         _type: "Mixed",
    //         _class: "Unsafe",
    //         _risk: 0.95,
    //     },
    //     {
    //         _title: "Searched for Fast and Furious 13",
    //         _datetime: "2021-08-01 12:00:00",
    //         _description: "You searched for Fast and Furious 13 on Google",
    //         _type: "Mixed",
    //         _class: "Unsafe",
    //         _risk: 0.7,
    //     },
    //     {
    //         _title: "Searched for Inception",
    //         _datetime: "2021-08-01 12:00:00",
    //         _description: "You searched for Inception on Google",
    //         _type: "Mixed",
    //         _class: "Safe",
    //         _risk: 0.3,
    //     },
    //     {
    //         _title: "Searched for Inception",
    //         _datetime: "2021-08-01 12:00:00",
    //         _description: "You searched for Inception on Google",
    //         _type: "Mixed",
    //         _class: "Safe",
    //         _risk: 0.2,
    //     },
    //     {
    //         _title: "Searched for Inception",
    //         _datetime: "2021-08-01 12:00:00",
    //         _description: "You searched for Inception on Google",
    //         _type: "Mixed",
    //         _class: "Safe",
    //         _risk: 0.45,
    //     },
    // ]

    React.useEffect(() => {
        let bg = chrome.extension.getBackgroundPage();
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            var l = [];
            for (var i in bg.data) {
                l.push(bg.data[i]);
            }
            switch(order) {
                case "rp":
                    l.sort((a,b) => (a._probability > b._probability) ? -1 : 1);
                    setItemList(l);
                    break;
                case "date":
                    setItemList(bg.data);
                    break;
                default:
                    l.sort((a,b) => (a._probability > b._probability) ? -1 : 1);
                    setItemList(l);
                    break;
            }
            
        });
    }, [order])

    return (
        <>
            <Box
                sx={{
                    pt: '5em',
                    backgroundColor: 'primary.main',
                }}
            >
                {
                    itemList.length > 0 ? <CardPanelContainer itemList={itemList} /> : <ShowErrorHelp />
                }
            </Box>
        </>
    );
};

export default Dashboard;