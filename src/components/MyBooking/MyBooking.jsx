import React from 'react';
import { Button,} from 'react-bootstrap';

const MyBooking = ({booking,setMyBookings,myBookings}) => {
    const {_id,name,countryName,email,passportNumber} = booking;

    // DElete My booking
    
    const handleMyBookingDel = id =>{
        const url = `http://localhost:5000/myBooking/${id}`;
        const confirm = window.confirm("Are You Sure You Wanted Deleted ? ");
        if(confirm){
            fetch(url,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    alert("Successfully Deleted");
                    const filter = myBookings.filter(booking => booking._id !== id);
                    setMyBookings(filter);
                }
            });
        }
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{countryName}</td>
            <td>{email}</td>
            <td>{passportNumber}</td>
            <td>
                <div className="text-center">
                    <Button variant='transparent' className="text-center" onClick={()=>handleMyBookingDel(_id)}><i className="far fa-trash-alt fs-4 text-danger"></i></Button>
                </div>
            </td>
        </tr>
    );
};

export default MyBooking;