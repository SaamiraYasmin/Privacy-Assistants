import React from 'react';

import CustomModal from './CustomModal';

const DetailModal = ({ open, setOpen, item }) => {
    return (
        <CustomModal open={open} setOpen={setOpen}>
            {/* {item.render()} */}
        </CustomModal>
    )
}

export default DetailModal;